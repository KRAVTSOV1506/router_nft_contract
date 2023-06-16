import { task, types } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

task("TASK_DEPLOY_XERC721").setAction(async function (
  _taskArguments: TaskArguments,
  hre
) {
  const network = await hre.ethers.provider.getNetwork();
  const chainId = network.chainId;
  const chainName = network.name;
  const nftName = "RouterNft";
  const nftSymbol = "RN";
  const routerChainName = "RouterTestnet";
  const routerChainId = "router_9601-1";
  const routerContractAddress = "router100vfjy5k58qd7wdxhcytl8fgrrjqemjufe64zk0yxzfyk4yr25nsumtpyw";

  const deployments = require("../../deployment/deployments.json");

  const gatewayContract = deployments[chainId].gatewayContract;
  const feePayerAddress = deployments[chainId].feePayerAddress;

  const deployContract = "XERC721";

  console.log("Contract Deployment Started ");
  const Erc721 = await hre.ethers.getContractFactory("XERC721");
  const erc721 = await Erc721.deploy(
    nftName,
    nftSymbol,
    chainName,
    String(chainId),
    gatewayContract,
    feePayerAddress,
    routerChainName,
    routerChainId,
    routerContractAddress,
  );
  await erc721.deployed();

  console.log(deployContract + " Contract deployed to: ", erc721.address);
  console.log("Contract Deployment Ended");

  const WAIT_BLOCK_CONFIRMATIONS = 8;
  await erc721.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  await hre.run(`verify:verify`, {
    address: erc721.address,
    constructorArguments: [
      nftName,
      nftSymbol,
      chainName,
      String(chainId),
      gatewayContract,
      feePayerAddress,
      routerChainName,
      routerChainId,
      routerContractAddress,
    ],
  });

  await hre.run("TASK_STORE_DEPLOYMENTS", {
    contractName: deployContract,
    contractAddress: erc721.address,
    chainID: chainId.toString(),
  });
  
  return null;
});
