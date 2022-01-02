import * as React from 'react';

export default function Index() {
  const checkWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log('Wallet is not connected!');
      return;
    }

    console.log('Wallet is connected!');
    console.log(ethereum);
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
        >
          Let's Party 🎉
        </button>
      </div>
    </div>
  );
}
