import { ethers, upgrades } from "hardhat";

require("dotenv").config();

async function main() {
  const MyERC1155 = await ethers.getContractFactory("MyERC1155");

  await MyERC1155.deploy();
  await MyERC1155.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
