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
    py-3 px-4
    rounded-md
    ${isMining ? 'bg-blue-400' : 'bg-blue-500'}
    text-white
    ${isMining && 'cursor-not-allowed'}`;
  }

  React.useEffect(() => {
    checkWallet();
  }, []);

  return (
    <div className="antialiased w-full min-h-screen
      grid place-items-center">

      <div className="flex flex-col justify-center max-w-2xl">
        <div className="text-center text-4xl font-semibold leading-relaxed">
          👋 Hey there!
        </div>

        <div className="text-center 
          text-gray-500
          mt-4
          text-lg">
          I am Namchee and I'm a developer, that's pretty cool right? Connect your Ethereum wallet and party with me!
        </div>

        <div className="text-center 
          mt-4
          text-5xl
          font-serif">
          {account && partyCount}
        </div>

        {account ? 
          <button
            className={partyButtonClass()}
            onClick={party}
            disabled={isMining}
          >
            {isMining ? <SpinnerIcon /> : `Let's Party!`}
          </button> :
          <button
            className="inline mx-auto
              mt-8
              py-3 px-6
              rounded-md
              bg-blue-500 text-white"
            onClick={authorizeWallet}
          >
            Connect Wallet
          </button>
        }
      </div>
    </div>
  );
}
