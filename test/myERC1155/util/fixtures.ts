import { ethers } from "hardhat";

async function deployMyERC1155() {
  const [owner, user1, user2] = await ethers.getSigners();

  const MyERC1155 = await ethers.getContractFactory("MyERC1155");
  const myERC1155 = await MyERC1155.connect(owner).deploy();

  return { myERC1155, owner, user1, user2 };
}

export { deployMyERC1155 };
