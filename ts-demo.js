var message = 'Hello';
console.log(message);
var booleanVar = true;
var numVar = 123;
var symbolVar = Symbol('sym1');
var nullVar = null;
var undefinedVar = undefined;
var bigIntVar = 90071991n;
var anyVar = "This is any type variable";
anyVar += 123; // allowed
var unknownVar = "This is unknown type variable";
// unknownVar += 123; // not allowed
var score = [90, 85, 88];
//tuples
var person = ['Alice', 30];
//union types
var unionVar;
unionVar = "Hello";
unionVar = 123;
// unionVar = true; // not allowed
//functions
function add(num1, num2) {
    return "Sum is ".concat(num1 + num2);
}
var result = add(10, 20);
console.log(result);
var greet = function (name) {
    if (name === void 0) { name = 'Guest'; }
    console.log("Hello, ".concat(name));
};
greet();
//objects defination
var userDetails = {
    name: 'John',
    age: 25,
    //isActive:true // not allowed
    //desc is optional
};
console.log(userDetails);
var Product1 = {
    id: 1,
    name: 'Laptop',
    price: 75000
};
console.log(Product1);
var emp1 = {
    empId: 101,
    empName: 'David',
    isPermanent: true,
    product: Product1,
};
console.log(emp1);
//generic
function identity(arg) {
    return arg;
}
var output1 = identity('Hello Generics');
console.log(output1);
var output2 = identity(12345);
console.log(output2);
//enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log(userRole);
console.log(Role[userRole]);
var role = '"User"';
console.log(role == 'admin');
console.log(Role.Admin === userRole);
var update = {
    id: 101
};
console.log(update);
update.id = 102;
var readonlyUser = {
    id: 201,
    name: 'Emma',
    role: Role.User
};
console.log(readonlyUser);
//tasks
var Car;
(function (Car) {
    Car[Car["Sedan"] = 0] = "Sedan";
    Car[Car["SUV"] = 1] = "SUV";
    Car[Car["Truck"] = 2] = "Truck";
    Car[Car["Coupe"] = 3] = "Coupe";
})(Car || (Car = {}));
//filter the cars whose year is greather than 2015 from the array of car objects
var cars = [
    {
        make: 'toyota',
        model: { name: "xtz", description: 'ddff' },
        year: 2004,
        type: Car.SUV,
    },
    {
        make: 'toyota',
        model: { name: "xtz", description: 'ddff' },
        year: 2010,
        type: Car.SUV,
    },
    {
        make: 'toyota',
        model: { name: "xtz", description: 'ddff' },
        year: 2018,
        type: Car.SUV,
    }, {
        make: 'toyota',
        model: { name: "xtz", description: 'ddff' },
        year: 2016,
        type: Car.SUV,
    }
];
var filteredCars = cars.filter(function (car) { return car.year > 2015; });
console.log(filteredCars);
