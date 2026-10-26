import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("EtudiantsModule", (m) => {

  const etudiants = m.contract("Etudiants");

  return { etudiants };

});