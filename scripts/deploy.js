// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");
// import { ethers } from "hardhat";

async function getBalance(address) {
  const balance = await ethers.provider.getBalance(address);
  return ethers.formatEther(balance);
}

async function printBalance(addresses) {
  let num = 0;
  for (const c of addresses) {
    console.log(
      `For address ${num} available balance is :`,
      await getBalance(c)
    );
    num++;
  }
}

async function printMemos(memos) {
  for (const memo of memos) {
    const name = memo.name;
    const message = memo.message;
    const address = memo.from;
    const time = memo.timestamp;

    console.log(`from ${name} to ${address} at ${time} with message${message}`);
  }``
}

async function main() {
  const [from1, from2, from3, from4] = await ethers.getSigners();
  // console.log(from1);
  // console.log(from1.address);

  const cookie = await ethers.getContractFactory("cookies");
  const contract = await cookie.deploy();
    // const contract = await ethers.deployContract("cookie");

  await contract.waitForDeployment();
  // console.log("address of contract :", contract);

  const addresses = [from1.address, from2.address, from3.address];
  console.log("Balance before txn ->");
  await printBalance(addresses);

  const amount = { value: ethers.parseEther("2") };
  await contract.connect(from2).buyCookies("from2", "Soft drinks", amount);
  await contract.connect(from3).buyCookies("from3", "Candy", amount);

  console.log("Balance after txn ->");
  printBalance(addresses);


  const memo = await contract.get();
  printMemos(memo);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
