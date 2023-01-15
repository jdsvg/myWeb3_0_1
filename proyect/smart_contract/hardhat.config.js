// https://eth-goerli.g.alchemy.com/v2/usDhfIX_-S69NH9sI7Mjj9WN2iIXbOBV
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks:{
    ropsten:{
      url: 'https://eth-goerli.g.alchemy.com/v2/usDhfIX_-S69NH9sI7Mjj9WN2iIXbOBV',
      accounts: [ 'your_private_key_account_metamask' ]
    }
  }
};
