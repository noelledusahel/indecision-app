const user = {
  name: 'Noelle',
  cities: ['DC', 'Atlanta', 'New Mexico'],
  printPlacesLived() {

    return this.cities.map((city) => this.name + ' has lived in' + city);
    
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city)
    // })
  } 
}

const multiplyer = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy)
  }
}
console.log(multiplyer.multiply())
console.log(user.printPlacesLived())