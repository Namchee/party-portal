import * as React from 'react';

import { ethers } from 'ethers';

import ABI from '~/constant/contract.json';
import { CONTRACT_ADDRESS } from '~/constant/eth';
import SpinnerIcon from '~/components/Icon/LoadingIcon';

export default function Index() {
  const [account, setAccount] = React.useState('');
  const [partyCount, setPartyCount] = React.useState(0);
  const [isMining, setIsMining] = React.useState(false);

  const checkWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log('Wallet is not connected!');
      return;
    }

    console.log('Wallet is connected!');
    console.log(ethereum);

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    console.log(accounts);

    if (accounts.length) {
      const account = accounts[0];
      console.log(`Found an authorized account: ${account}`);
      setAccount(account);
      return;
    } 

    console.log('No account found!');
  }

  const authorizeWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);

    const partyCount = await contract.getPartyCount();
    console.log(`Connected with: ${accounts[0]}`);
    setPartyCount(partyCount);
    setAccount(accounts[0]);
  };

  const party = async () => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);
      
      let parties = await contract.getPartyCount();
      setPartyCount(parties.toNumber());
      setIsMining(true);

      const partyTrx = await contract.throwParty();
      console.log('Mining...', partyTrx.hash);

      await partyTrx.wait();
      console.log('Mined...', partyTrx.hash);
      setIsMining(false);

      parties = await contract.getPartyCount();
      setPartyCount(parties.toNumber());
      return;
    }

    console.log('Ethereum wallet does not exist!');
  }

  const partyButtonClass = () => {
   return `mx-auto
    grid place-items-center
    mt-8
    w-36 h-12
    py-4 px-6
    rounded-md
    text-lg
    font-medium
    transition-all
    hover:bg-indigo-600
    focus:bg-indigo-600
    focus:ring-4
    focus:ring-indigo-400
    focus:ring-opacity-40
    focus:outline-none
    ${isMining ? 'bg-indigo-500' : 'bg-indigo-600'}
    ${isMining && 'cursor-not-allowed'}`;
  }

  const partyForm = () => {
    return account
      ? (
        <>
          <input
            type="text"
            className="mx-auto
              px-6 py-4
              bg-gray-700
              text-xl
              rounded-md
              flex-1
              transition-all
              focus:ring-4
            focus:ring-indigo-500
            focus:ring-opacity-70
            focus:outline-none"
            placeholder="Your party punchline" />
          <button className={partyButtonClass()}
            disabled={isMining}>
            {isMining ? <SpinnerIcon /> : 'Throw Party!'}
          </button>
        </>
      )
    : <button
      className="bg-indigo-500
        mx-auto
        text-lg
        font-medium
        py-4 px-6
        rounded-md
        transition-all
        hover:bg-indigo-600
        focus:bg-indigo-600
        focus:ring-4
        focus:ring-indigo-400
        focus:ring-opacity-40
        focus:outline-none"
      onClick={authorizeWallet}
    >
      Connect Ethereum Wallet
    </button>
  };

  React.useEffect(() => {
    checkWallet();
  }, []);

  return (
    <div className="w-full mx-auto max-w-5xl
      mt-32">
      
      <h1 className="text-center
        text-5xl tracking-tight font-bold
        leading-relaxed">
        Be the life of the party overnight
      </h1>

      <h2 className="text-center
        text-xl max-w-xl mx-auto
        text-gray-400
        leading-relaxed
        mt-2">
        PartyPopper is a service that throw wild parties for you
        over the world of metaverse
      </h2>

      <div className="flex
        w-full max-w-xl mx-auto
        space-x-4
        mt-8">
        {partyForm()}
      </div>

      <div className="flex flex-col items-center my-24 space-y-16">
        <p className="text-center text-3xl font-bold tracking-tight">
          Leaderboard
        </p>

        <div className="inline-grid grid-cols-2 grid-flow-row gap-12">
          <div className="text-center
            text-5xl
            font-bold">
            <p className="uppercase
              text-sm 
              text-gray-400
              tracking-wider
              mb-4">
              Parties thrown
            </p>
            <p>
              {partyCount}
            </p>
          </div>

          <div className="text-center
            text-5xl
            font-bold">
            <p className="uppercase
              text-sm 
              text-gray-400
              tracking-wider
              mb-4">
              Your Parties
            </p>
            <p>
              {partyCount}
            </p>
          </div>

          <div className="text-center
            text-5xl
            font-bold
            col-span-2">
            <p className="uppercase
              text-sm 
              text-gray-400
              tracking-wider
              mb-4">
              The Party Animal
            </p>
            <p className="font-mono">
              0xFABCASD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
