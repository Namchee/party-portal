import * as React from 'react';

import { ethers } from 'ethers';

import ABI from '~/constant/contract.json';
import { CONTRACT_ADDRESS } from '~/constant/eth';

export default function Index() {
  const [account, setAccount] = React.useState('');

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
    console.log(`Connected with: ${accounts[0]}`);
    setAccount(accounts[0]);
  };

  const party = async () => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);
      
      let parties = await contract.getPartyCount();
      console.log(parties.toNumber());

      const partyTrx = await contract.throwParty();
      console.log('Mining...', partyTrx.hash);

      await partyTrx.wait();
      console.log('Mined...', partyTrx.hash);

      parties = await contract.getPartyCount();
      console.log(parties.toNumber());
      return;
    }

    console.log('Ethereum wallet does not exist!');
  }

  React.useEffect(() => {
    checkWallet();
  }, []);

  return (
    <div className="antialiased w-full
      flex justify-center
      mt-16">

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

        <button
          className="inline mx-auto
            mt-8
            py-3 px-6
            rounded-md
            bg-blue-500 text-white"
          onClick={party}
        >
          Let's Party 🎉
        </button>

        {!account && <button
          className="inline mx-auto
            mt-8
            py-3 px-6
            rounded-md
            bg-blue-500 text-white"
          onClick={authorizeWallet}
        >
          Connect Wallet
        </button>}
      </div>
    </div>
  );
}
