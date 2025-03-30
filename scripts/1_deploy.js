const { ethers } = require('hardhat');

async function main() {
  const Token = await ethers.getContractFactory('Token');
  const token = await Token.deploy('Girish Token', 'Girish', 1000000);

  // Wait for the deployment to be complete in ethers v6
  await token.waitForDeployment();

  console.log('Token deployed to:', token.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
