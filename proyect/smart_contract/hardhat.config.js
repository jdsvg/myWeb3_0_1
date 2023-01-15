// https://eth-goerli.g.alchemy.com/v2/usDhfIX_-S69NH9sI7Mjj9WN2iIXbOBV
require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks:{
    ropsten:{
      url: 'https://eth-goerli.g.alchemy.com/v2/usDhfIX_-S69NH9sI7Mjj9WN2iIXbOBV',
      accounts: [ 'f86c6c46f708e6e4ceab3adf785643c2129487a414bf1fa1a8eb2687f776721f' ]
    }
  }
};
