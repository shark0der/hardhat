// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";

const currentTimestampInSeconds = Math.round(Date.now() / 1000);
const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

const lockedAmount = hre.ethers.utils.parseEther("1");

const Lock = await hre.ethers.getContractFactory("Lock");
const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

await lock.deployed();

console.log(
  `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
);
