import { cleanConsole, createAll } from './data';
const companies = createAll();

const copyCompanies = companies.map((company) => ({
  ...company,
  users: [...company.users],
}));

const findAcompanyById = (companyId) =>
  copyCompanies.find((company) => company.id === companyId);

//parte 1
const companyNameByID = (companyId) => {
  const companies = findAcompanyById(companyId);
  return companies.name;
};

//parte 2
const removeCompanyByID = (companyId) => {
  const companies = copyCompanies.filter((company) => company.id !== companyId);
  return companies;
};

//part 3

//parte4
const createNewUserInACompanyById = (
  companyId,
  firstName,
  lastName,
  age,
  car
) => {
  const companies = findAcompanyById(companyId);
  companies.users.push({
    firstName: firstName,
    lastName: lastName,
    age: age,
    car: car,
    id: companies.users.length,
  });
  companies.users.length -= 1;
  return companies;
};

//part5

//part 6

const removeAUserByIdFromCompanyId = (companyId, userId) => {
  const companies = findAcompanyById(companyId);
  const users = companies.users.filter((user) => user.id !== userId);

  companies.users = users;
  companies.usersLength = companies.users.length;

  return companies;
};

//part7
//parte8

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.
//parte9
const transferUserToAnotherCompany = (companyId1, companyId2, userId) => {
  const company1 = findAcompanyById(companyId1);
  const company2 = findAcompanyById(companyId2);

  const userDeletedInCompany1 = company1.users.filter((user) => {
    return user.id === userId;
  });

  // company2.push(userDeletedInCompany1);
  // company1.usersLength = company1.users.length;
  // return users, company1;
  console.log(...userDeletedInCompany1);
};

cleanConsole(7, companies);

//console.log('---- SOLUTION EXAMPLE 7 part 1 --- ', companyNameByID(0));

//console.log('---- SOLUTION EXAMPLE 7 part 2 --- ', removeCompanyByID(0));

//console.log('---- SOLUTION EXAMPLE 7 part 3 --- ', companies);

//console.log(
//'---- SOLUTION EXAMPLE 7 part 4 --- ',
//createNewUserInACompanyById(4, 'Juan', 'Delgado', 35, true)
//);

//console.log('---- SOLUTION EXAMPLE 7 part 5 --- ', companies);

// console.log(
//   '---- SOLUTION EXAMPLE 7 part 6 --- ',
//   removeAUserByIdFromCompanyId(1, 3)
// );

//console.log('---- SOLUTION EXAMPLE 7 part 7 --- ', companies);

//console.log('---- SOLUTION EXAMPLE 7 part 8 --- ', companies);

console.log(
  '---- SOLUTION EXAMPLE 7 part 9 --- ',
  transferUserToAnotherCompany(1, 2, 1)
);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH/PUT (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated
