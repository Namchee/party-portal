import * as React from "react";

import { ethers } from "ethers";

import SpinnerIcon from "~/components/Icon/LoadingIcon";

import ABI from "~/constant/contract.json";
import { CONTRACT_ADDRESS } from "~/constant/eth";

export default function Index() {
  const [hasMetamask, setHasMetamask] = React.useState(true);

  const [account, setAccount] = React.useState("");
  const [isAuthorizing, setIsAuthorizing] = React.useState(false);

  const [partyCount, setPartyCount] = React.useState(0);
  const [myPartyCount, setMyPartyCount] = React.useState(0);
  const [best, setBest] = React.useState("");

  const [isMining, setIsMining] = React.useState(false);

  const [punchline, setPunchline] = React.useState("");
  const [error, setError] = React.useState("");

  const refreshPartyCount = async () => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);

      const totalParties = await contract.getPartyCount();

      if (account) {
        const parties = await contract.getParties();

        const userParties = parties.filter((p: Record<string, string>) => {
          return p.host.toUpperCase() === account.toUpperCase();
        }).length;

        setMyPartyCount(userParties);
      }

      const bestHost: string = await contract.getBestHost();

      setPartyCount(totalParties.toNumber());
      setBest(bestHost);
    }
  };

  const checkWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      setHasMetamask(false);
      return;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
      const account = accounts[0];
      console.log(`Found an authorized account: ${account}`);
      setAccount(account);
    }
  };

  const authorizeWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    setIsAuthorizing(true);

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(`Connected with: ${accounts[0]}`);

    setIsAuthorizing(false);
    setAccount(accounts[0]);
  };

  const party = async () => {
    try {
      if (!punchline) {
        throw new Error("Party punchline is required!");
      }

      const { ethereum } = window;

      if (ethereum && punchline) {
        setIsMining(true);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);

        const partyTrx = await contract.throwParty(punchline, {
          gasLimit: 300000,
        });
        return await partyTrx.wait();
      }

      throw new Error("Ethereum wallet does not exist!");
    } catch (err) {
      console.error(err);

      const error = err as Error;
      if (error.message.startsWith("transaction")) {
        setError("Slow down! You've thrown too many parties at once!");
      } else {
        setError(error.message);
      }
    } finally {
      setIsMining(false);
      setPunchline("");
    }
  };

  const partyButtonClass = () => {
    return `mx-auto
    shadow
    grid place-items-center
    w-40 h-full
    py-4 px-6
    rounded-md
    text-lg
    font-medium
    transition-all
    ${!isMining && "hover:bg-indigo-600"}
    focus:bg-indigo-600
    focus:ring-4
    focus:ring-indigo-400
    focus:ring-opacity-40
    focus:outline-none
    ${isMining ? "bg-indigo-400" : "bg-indigo-500"}
    ${isMining && "cursor-not-allowed"}`;
  };

  const punchlineInputClass = () => {
    return `mx-auto
      shadow
      px-6 py-4
      bg-gray-700
      text-xl
      flex-1
      rounded-md
      transition-all
      focus:ring-4
      focus:ring-indigo-500
      focus:ring-opacity-70
      focus:outline-none
      ${isMining && "cursor-not-allowed"}
      ${isMining && "bg-gray-600"}`;
  };

  const updatePunchline = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPunchline(e.target.value);
    setError("");
  };

  const partyForm = () => {
    if (!hasMetamask) {
      return (
        <p
          className="text-gray-300 text-2xl text-center leading-relaxed">
          To use this awesome portal, install{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400
            transition-colors
            hover:text-indigo-300
            active:text-indigo-300
            focus:text-indigo-300
            focus:outline-none"
            href="https://metamask.io/"
          >
            Metamask
          </a> and refresh this page
          after installing
        </p>
      );
    }

    return account ? (
      <>
        <input
          type="text"
          className={punchlineInputClass()}
          disabled={isMining}
          value={punchline}
          onChange={updatePunchline}
          placeholder="Your party punchline"
        />
        <button
          onClick={party}
          className={partyButtonClass()}
          disabled={isMining}
        >
          {isMining ? <SpinnerIcon /> : "Throw Party!"}
        </button>
      </>
    ) : (
      <button
        className={`bg-indigo-500
        mx-auto
        grid place-items-center
        text-lg
        font-medium
        py-4 px-6
        w-72
        rounded-md
        transition-all
        ${!isAuthorizing && "hover:bg-indigo-600"}
        focus:bg-indigo-600
        focus:ring-4
        focus:ring-indigo-400
        focus:ring-opacity-40
        focus:outline-none
        shadow
        ${isAuthorizing && "cursor-not-allowed"}`}
        onClick={authorizeWallet}
        disabled={isAuthorizing}
      >
        {isAuthorizing ? <SpinnerIcon /> : "Connect Ethereum Wallet"}
      </button>
    );
  };

  React.useEffect(() => {
    checkWallet();
    refreshPartyCount();
  }, []);

  React.useEffect(() => {
    if (account) {
      refreshPartyCount();
    }
  }, [account]);

  React.useEffect(() => {
    const onNewParty = (host: string) => {
      setPartyCount(prev => prev + 1);

      if (account.toUpperCase() === host.toUpperCase()) {
        setMyPartyCount(prev => prev + 1);
      }
    };

    const onNewLeader = (host: string) => {
      setBest(host);
    };

    let contract: ethers.Contract;

    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);
      contract.on("NewParty", onNewParty);
      contract.on("NewLeader", onNewLeader);
    }

    return () => {
      if (contract) {
        contract.off("NewParty", onNewParty);
        contract.off("NewLeader", onNewLeader);
      }
    };
  }, [account]);

  return (
    <div
      className="flex flex-col
      min-h-screen
      w-full mx-auto max-w-5xl
      pt-32"
    >
      <section className="flex-1">
        <h1
          className="text-center
        text-5xl tracking-tight font-bold
        leading-relaxed"
        >
          Be the life of the <span className="text-yellow-300">party</span>{" "}
          overnight
        </h1>

        <h2
          className="text-center
        text-xl max-w-xl mx-auto
        text-gray-400
        leading-relaxed
        mt-2"
        >
          PartyPortal is a service that throw wild parties for you over the
          world of metaverse. Throw parties with us and grab a chance to win
          some ethers!
        </h2>

        <div
          className="flex
        w-full max-w-xl mx-auto
        space-x-4
        mt-12"
        >
          {partyForm()}
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <div className="flex flex-col items-center mt-36 space-y-12">
          <p className="text-center text-3xl font-bold tracking-tight">
            Current Leaderboard
          </p>

          <div className="flex justify-center space-x-16">
            <div
              className="text-center
            text-5xl
            font-bold"
            >
              <p
                className="uppercase
              text-sm 
              text-gray-400
              tracking-wider
              mb-4"
              >
                Total Parties
              </p>
              <p>{partyCount}</p>
            </div>

            {account && (
              <div
                className="text-center
            text-5xl
            font-bold"
              >
                <p
                  className="uppercase
              text-sm 
              text-gray-400
              tracking-wider
              mb-4"
                >
                  Your Parties
                </p>
                <p>{myPartyCount}</p>
              </div>
            )}
          </div>
        </div>

        <div
          className="text-center
              mt-12 mb-28
              font-bold
              col-span-2"
        >
          <p
            className="uppercase
              text-sm 
              text-gray-400
              tracking-wider
              
              mb-4"
          >
            The Party Animal
          </p>
          {best && Number.parseInt(best) ? (
            <p className="font-mono text-5xl">
              {`${best.slice(0, 4)}...${best.slice(best.length - 3)}`}
            </p>
          ) : (
            <p className="text-2xl">None yet. Be the first!</p>
          )}
        </div>
      </section>

      <footer className="text-gray-400 text-center py-8 space-y-2">
        <p>
          Made in 2022 by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400
            transition-colors
            hover:text-indigo-300
            active:text-indigo-300
            focus:text-indigo-300
            focus:outline-none"
            href="https://www.github.com/Namchee"
          >
            Namchee
          </a>{" "}
          following tutorial from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400
            transition-colors
            hover:text-indigo-300
            active:text-indigo-300
            focus:text-indigo-300
            focus:outline-none"
            href="https://buildspace.so/"
          >
            buildspace
          </a>
        </p>
        <p className="text-xs">
          View{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400
            transition-colors
            hover:text-indigo-300
            active:text-indigo-300
            focus:text-indigo-300
            focus:outline-none"
            href="https://rinkeby.etherscan.io/tx/0xed77e781bb1b284f65981a15a7763ce78637c50bfd5ab1da0c364908402ecd3c"
          >
            contract
          </a>{" "}
          on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400
            transition-colors
            hover:text-indigo-300
            active:text-indigo-300
            focus:text-indigo-300
            focus:outline-none"
            href="https://etherscan.io/"
          >
            Etherscan
          </a>
        </p>
      </footer>
    </div>
  );
}
