import { cleanConsole, createAll } from './data';

const companies = createAll();

const copyCompanies = companies.map((company) => ({
  ...company,
  users: [...company.users],
}));

export function flattenUsers(companiesAtt) {
  const companiesArr = companiesAtt
    .map((company1) => {
      const users = company1.users.map((eachUser) => {
        return { ...eachUser, company: company1.name };
      });
      return users;
    })
    .reduce(function (a, b) {
      return a.concat(b);
    }, [])
    .sort((a, b) => {
      return b.age - a.age;
    });
  return { ...companiesArr };
}

cleanConsole(4, companies);

console.log('---- SOLUTION EXAMPLE 4 --- ', flattenUsers(copyCompanies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)
