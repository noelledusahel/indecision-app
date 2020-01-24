var nameVar = 'Noelle'
var nameVar = 'Boelle'
console.log('nameVar', nameVar)

let nameLet = 'Joelle'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Zoelle'
console.log('nameConst', nameConst)

function getPetName() {
  return 'Jack'
}

const petName = getPetName();
console.log(petName)

let firstName = ''
const fullName = 'Noelle Barberian'
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log('firstName', firstName)
}
console.log('firstName', firstName)