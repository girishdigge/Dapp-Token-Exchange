const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 'ether');
};

describe('Token', () => {
  let token;
  let accounts;
  let deployer;
  beforeEach(async () => {
    const Token = await ethers.getContractFactory('Token');
    accounts = await ethers.getSigners();
    deployer = accounts[0];

    token = await Token.deploy('Girish Token', 'Girish', 1000000);
  });

  describe('Deployment', () => {
    name1 = 'Girish Token';
    symbol = 'Girish';
    decimals = 18;
    totalSupply = 1000000;
    it('has correct name', async () => {
      expect(await token.name()).to.equal(name1);
    });
    it('has correct symbol', async () => {
      expect(await token.symbol()).to.equal(symbol);
    });
    it('has correct decimals', async () => {
      expect(await token.decimals()).to.equal(decimals);
    });
    it('has total supply', async () => {
      expect(await token.totalSupply()).to.equal(tokens(totalSupply));
    });
    it('assigns total supply to deployer', async () => {
      console.log(deployer);

      expect(await token.balanceOf(deployer.address)).to.equal(
        tokens(totalSupply)
      );
    });
  });
});
