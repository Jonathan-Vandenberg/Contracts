import { exec } from "child_process";
import { ethers, upgrades } from "hardhat";

require("dotenv").config();

async function main() {
  const MyERC1155 = await ethers.getContractFactory("MyERC1155");

  const myERC1155 = await MyERC1155.deploy();

  console.log(`Deployed MyERC1155 at: ${myERC1155.address}`);

  // Wait for a block to be mined
  await myERC1155.deployTransaction.wait();

  // Run the verification command
  const addressToVerify = myERC1155.address;
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
