function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log("Hello " + other.name + ", I am " + this.name + "!");
};

var sonny = new Person("Sonny", "sonny@email.com", "555-555-5555");
console.log(sonny);
var jordan = new Person("Jordan", "jordan@email.com", "333-333-3333");
console.log(jordan);

// console.log(sonny.greet(jordan));
// console.log(jordan.greet(sonny));
//
// console.log("sonny's email: " + sonny.email + "\nsonny's phone: " + sonny.phone);
// console.log("jordan's email: " + jordan.email + "\njordan's phone: " + jordan.phone);
