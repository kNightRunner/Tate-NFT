async function main() {
    const TateNFT = await ethers.getContractFactory("Tatengue");
    const tateNFT = await TateNFT.deploy();
    const txHash = tateNFT.deployTransaction.hash;
    const txReceipt = await ethers.provider.waitForTransaction(txHash);

    console.log("Contract deployed address:",txReceipt.contractAddress);
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
     process.exit(1);
  });
