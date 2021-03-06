import { cleanConsole, createAll } from './data';

const companies = createAll();

const copyCompanies = companies.map((company) => ({
  ...company,
  users: [...company.users],
}));

cleanConsole(6, companies);

const newObjectsFromCompany = (companiesAtt) => {
  const companiesArr = companiesAtt
    .map((company1) => {
      const users = company1.users
        .map((eachUser) => {
          if (eachUser.firstName && eachUser.lastName) {
            return `${eachUser.firstName}${eachUser.lastName}${eachUser.age}: ${eachUser.car}`;
          }
        })
        .filter((el) => {
          return el != undefined;
        });
      return users;
    })
    .reduce(function (a, b) {
      return a.concat(b);
    }, []);
  return companiesArr;
};

console.log(
  '---- SOLUTION EXAMPLE 6 --- ',
  newObjectsFromCompany(copyCompanies)
);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below

// const example = {
//   johnDoe32: true,
//   BernardoMinet45: false,
//   alinaChef23: true,
// };

// console.log(example);
