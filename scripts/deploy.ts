import { exec } from "child_process";
import { ethers, upgrades } from "hardhat";

require("dotenv").config();

async function main() {
  const myERC20 = await ethers.getContractFactory("MyERC20");

  const deployedERC20 = await myERC20.deploy();

  console.log(`Deployed MyERC1155 at: ${deployedERC20.address}`);

  // Wait for a block to be mined
  await deployedERC20.deployTransaction.wait();

  // Run the verification command
  const addressToVerify = deployedERC20.address;
  exec(
    `npx hardhat verify --network sepolia ${addressToVerify}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`Verification: ${stdout}`);
    }
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
