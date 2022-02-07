import { cleanConsole, createAll } from './data';
import { capitalize } from './example-1';
const companies = createAll();

const copyCompanies = companies.map((company) => ({
  ...company,
  users: [...company.users],
}));

const validationCapitalize = (companiesAtt) => {
  const companiesArr = companiesAtt.map((company) => {
    const users = company.users.map((eachUser) => {
      if (capitalize(eachUser.firstName)) {
        return eachUser;
      }
    });
    return {
      ...company,
      users,
      isValidating: false,
    };
  });
  return companiesArr;
};

cleanConsole(3, companies);

console.log(
  '---- SOLUTION EXAMPLE 3 --- ',
  validationCapitalize(copyCompanies)
);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter, and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
