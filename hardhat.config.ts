import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";

dotenv.config();

require("@nomicfoundation/hardhat-toolbox");

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    local: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x0e0e6ca08cc4b4cd0eb43c5b9934f51926b634d0387ecbf7c7c4dd456041db03",
      ],
    },
    sepolia: {
      // network: 11155111,
      url: "https://sepolia.infura.io/v3/05ba710ffbb74ff4b16d5574be63053c",
      accounts: process.env.DEPLOYER_KEY ? [process.env.DEPLOYER_KEY] : [],
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/b280b8aa6cda4dba845afb03d46c2396",
      accounts: process.env.DEPLOYER_KEY ? [process.env.DEPLOYER_KEY] : [],
    },
    mainnet: {
      // network: 1,
      url: process.env.RPC_URL || "",
      accounts: process.env.DEPLOYER_KEY ? [process.env.DEPLOYER_KEY] : [],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    coinmarketcap: "b5aa6c8e-e54a-4291-b372-6afac549d9fc",
    currency: "USD",
    enabled: true,
    token: "ETH",
  },
  etherscan: {
    apiKey: {
      sepolia: "6KHIW847REEQ2YNNP51WSTKMWRN3ZZADUQ",
    },
  },
};

export default config;
