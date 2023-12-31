// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const name = "";
  const symbol = "";
  const tokenDecimals = 4; 
  // input your address here 
  const manager = ""
  const owner = ""

  const prince = await hre.ethers.deployContract ("Prince",[name, symbol, manager, owner, tokenDecimals]);
  const Prince = await prince.waitForDeployment();
  console.log(prince.target);
  console.log(Prince);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
