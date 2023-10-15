const { expect } = require("chai");

describe("Moraland contract", function () {
  it("Check the name of the contract", async function () {

    const moraland = await ethers.deployContract("Moraland");
    const contractName = "Moraland";
    
    expect(await moraland.name()).to.equal(contractName);
  });
});