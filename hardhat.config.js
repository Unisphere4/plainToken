require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require("ethereum-waffle")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/withoutguides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  gas: "auto",
  abiExporter: {
    path: './data/abi',
    clear: true,
    flat: false,
    //only: [':ERC20$'],
    spacing: 2
  },
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: "100000000000000000000000",
      }
    }
  }  
};