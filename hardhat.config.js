require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
// const key = 
module.exports = {
    solidity: "0.8.19",
    networks :{
      sepolia: {
        url:process.env.URL,
        accounts:[process.env.KEY],
    }
  }
};
