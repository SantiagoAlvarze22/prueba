import { cleanConsole, createAll } from './data';
const companies = createAll();

const copyCompanies = companies.map((company) => ({
  ...company,
  users: [...company.users],
}));

const hasCarCompany = (companiesAtt, hasCar) => {
  const companiesArr = companiesAtt.map((company) => {
    const users = company.users.filter((eachUser) => {
      return eachUser.car === hasCar;
    });
    return {
      ...company,
      usersLength: users.length,
      users,
    };
  });
  return companiesArr;
};

cleanConsole(2, companies);

console.log('---- SOLUTION EXAMPLE 2 --- ', hasCarCompany(copyCompanies, true));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter
