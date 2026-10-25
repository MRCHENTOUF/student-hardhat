import { expect } from "chai";
import { network } from "hardhat";

describe("Etudiants", function () {

  it("should add a student and return the correct number", async function () {

    const { ethers } = await network.create();

    const etudiants = await ethers.deployContract("Etudiants");

    await etudiants.ajouterEtudiant(
      "CHENTOUF",
      "MOHAMED REDA"
    );

    const nombre = await etudiants.getNombreEtudiants();

    expect(nombre).to.equal(1n);
  });


  it("should return the registered student", async function () {

    const { ethers } = await network.create();

    const etudiants = await ethers.deployContract("Etudiants");

    await etudiants.ajouterEtudiant(
      "CHENTOUF",
      "MOHAMED REDA"
    );

    const liste = await etudiants.getEtudiants();

    expect(liste[0].nom).to.equal("CHENTOUF");
    expect(liste[0].prenom).to.equal("MOHAMED REDA");
  });

});