


import Onboard from 'bnc-onboard';




let onboard = Onboard({
      networkId: 1,
      walletSelect: {
        wallets: [
          { walletName: 'metamask' },
          { walletName: "coinbase" },
          // { walletName: "walletConnect",
          //   rpc: {
          //       ['1'] : 'https://rpc.ankr.com/eth/',
          //       ['56']: 'https://bsc-dataseed.binance.org/',
          //       ['137'] : 'https://rpc-mainnet.maticvigil.com'
          //   }
          //  }
        ]
      },
    });



// Uncoment to test just gnosis import

// ( async () => {

//   console.log('aaa');

//   console.log (import('@gnosis.pm/safe-apps-sdk'));

//   let gnosis = await import('@gnosis.pm/safe-apps-sdk');

//   console.log(gnosis);

//   console.log(gnosis.default);

//   console.log(new gnosis.default());

// })();

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
