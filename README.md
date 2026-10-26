# Student Registry Smart Contract — Hardhat CI/CD

## Project Overview

This project demonstrates the development, automated testing, continuous integration, and deployment of a Solidity smart contract using Hardhat and GitHub Actions.

The smart contract allows users to:

* Register a student's last name and first name.
* Retrieve all registered students.
* Retrieve the total number of registered students.

The contract is automatically compiled and tested using GitHub Actions and deployed to the Ethereum Sepolia test network.

---

## Technologies Used

* Solidity
* Hardhat
* TypeScript
* Ethers.js
* Mocha
* Chai
* Git
* GitHub
* GitHub Actions
* Ethereum Sepolia Testnet
* Hardhat Ignition

---

## Smart Contract

The main smart contract is:

```text
contracts/Etudiants.sol
```

It contains a `struct` representing a student:

```solidity
struct Etudiant {
    string nom;
    string prenom;
}
```

Students are stored inside a dynamic array:

```solidity
Etudiant[] private listeEtudiants;
```

### Main Functions

#### ajouterEtudiant()

Adds a new student to the blockchain.

```solidity
function ajouterEtudiant(
    string memory _nom,
    string memory _prenom
) public
```

#### getEtudiants()

Returns the complete list of registered students.

```solidity
function getEtudiants()
    public
    view
    returns (Etudiant[] memory)
```

#### getNombreEtudiants()

Returns the total number of registered students.

```solidity
function getNombreEtudiants()
    public
    view
    returns (uint256)
```

---

## Automated Tests

The automated tests are located in:

```text
test/Etudiants.ts
```

The tests verify that:

* A student can be successfully added.
* The number of students is updated correctly.
* Stored student information can be retrieved correctly.

Run the tests locally with:

```bash
npx hardhat test
```

---

## Compile the Smart Contract

To compile the Solidity contracts:

```bash
npx hardhat compile
```

---

## Deployment

The Hardhat Ignition deployment module is located at:

```text
ignition/modules/Etudiants.ts
```

The contract can be deployed with:

```bash
npx hardhat ignition deploy ignition/modules/Etudiants.ts
```

For Sepolia:

```bash
npx hardhat ignition deploy ignition/modules/Etudiants.ts --network sepolia
```

---

## GitHub Actions CI/CD

The GitHub Actions workflow is located at:

```text
.github/workflows/ci.yml
```

Every push to the `main` branch automatically performs the following workflow:

```text
Push to GitHub
      ↓
Install dependencies
      ↓
Compile Solidity contracts
      ↓
Run automated tests
      ↓
Deploy to Sepolia
```

Sensitive information is stored using GitHub Repository Secrets.

The workflow uses:

```text
SEPOLIA_RPC_URL
SEPOLIA_PRIVATE_KEY
```

The private key is never stored directly in the source code.

---

## Sepolia Deployment

The smart contract was successfully deployed automatically to the Ethereum Sepolia test network using GitHub Actions.

### Contract Address

```text
0x7e952A9C2542508953e56A12ad2f889aAa308Cf8
```

The deployment can be verified using Sepolia Etherscan.

---

## Project Architecture

```text
Developer
   ↓
Solidity Smart Contract
   ↓
Git Repository
   ↓
GitHub
   ↓
GitHub Actions
   ↓
Hardhat Compile
   ↓
Automated Tests
   ↓
Hardhat Ignition
   ↓
Ethereum Sepolia
```

---

## Security

Sensitive blockchain credentials such as the wallet private key are not included in the repository.

They are stored securely using GitHub Actions Secrets.

The `.gitignore` file prevents unnecessary or sensitive local files from being committed to the repository.

---

## Project Objective

The objective of this practical project is to demonstrate how blockchain development and DevOps practices can be combined.

The project integrates:

* Smart contract development
* Automated testing
* Version control
* Continuous Integration
* Continuous Deployment
* Blockchain deployment infrastructure

This creates a complete modern development workflow from Solidity source code to automatic deployment on the Ethereum Sepolia test network.
