// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Etudiants {

    struct Etudiant {
        string nom;
        string prenom;
    }

    Etudiant[] private listeEtudiants;

    function ajouterEtudiant(
        string memory _nom,
        string memory _prenom
    ) public {
        listeEtudiants.push(
            Etudiant(_nom, _prenom)
        );
    }

    function getEtudiants()
        public
        view
        returns (Etudiant[] memory)
    {
        return listeEtudiants;
    }

    function getNombreEtudiants()
        public
        view
        returns (uint256)
    {
        return listeEtudiants.length;
    }
}