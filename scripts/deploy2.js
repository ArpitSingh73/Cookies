const { ethers} = require("hardhat");

async function main() {
    // const [pers1, pers2, pers3] = await ethers.getSigners();
    const cookie = await ethers.getContractFactory("cookies");
    const contract = await cookie.deploy();

    // await contract.waitForDeployment();
    await contract.waitForDeployment();
    console.log(await contract.getAddress());
}

main().then().catch(e => {
    console.log(e)
})