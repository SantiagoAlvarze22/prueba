import { createAll, cleanConsole } from './data';

const companies = createAll();

const copyCompanies = companies.map((company) => ({
  ...company,
  users: [...company.users],
}));

export const changeUndefined = (companiesAtt) => {
  const companiesArr = companiesAtt.map((company) => {
    const users = company.users.map((eachUser) => {
      eachUser.firstName = capitalize(eachUser.firstName || '');
      eachUser.lastName = capitalize(eachUser.lastName || '');

      return eachUser;
    });
    usersSortByFirstName(users);
    return {
      ...company,
      name: capitalize(company.name),
      users,
    };
  });
  companiesSortByUserLength(companiesArr);
  return companiesArr;
};

export const capitalize = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const companiesSortByUserLength = (arr) => {
  arr.sort((a, b) => {
    return b.usersLength - a.usersLength;
  });
};

const usersSortByFirstName = (arr) => {
  arr.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });
};

cleanConsole(1, companies);

// console.log(copyCompanies);
console.log('----SOLUTION EXAMPLE 1 --- ', changeUndefined(copyCompanies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order
