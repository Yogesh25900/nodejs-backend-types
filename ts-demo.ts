let message :string ='Hello';
console.log(message);


let booleanVar :boolean = true;
let numVar :number = 123;
let symbolVar :symbol = Symbol('sym1');
let nullVar :null = null;
let undefinedVar :undefined = undefined;
let bigIntVar :bigint = 90071991n;
let anyVar :any= "This is any type variable";
anyVar += 123; // allowed

let unknownVar :unknown = "This is unknown type variable";
// unknownVar += 123; // not allowed
 
let score :number[] = [90, 85, 88];
//tuples
let person :[string, number] = ['Alice', 30];

//union types
let unionVar :string | number;
unionVar = "Hello";
unionVar = 123;
// unionVar = true; // not allowed

//functions
function add(num1:number,num2:number):string{
    return `Sum is ${num1 + num2}`;
}

let result :string = add(10,20);
console.log(result);

const greet =(name:string='Guest'):void =>{
    console.log(`Hello, ${name}`);

}
greet();


//objects defination
let userDetails :{name:string, age:number,desc?:string} = {
    name:'John',
    age:25,
    //isActive:true // not allowed
    //desc is optional
}
console.log(userDetails);

//interface
interface Product{
    id:number,
    name:string |number,
    price:number | null,
    description?:string
}

let Product1 :Product = {
    id:1,
    name:'Laptop',
    price:75000
}
console.log(Product1);

//type alias
type Employee = {
    empId:number,
    empName:string,
    isPermanent:boolean,
    product:Product
}

let emp1 :Employee = {
    empId:101,
    empName:'David',
    isPermanent:true,
    product:Product1,
};

console.log(emp1);


//generic
function identity<T>(arg:T):T{
    return arg;
}

let output1 = identity<string>('Hello Generics');
console.log(output1);
let output2 = identity<number>(12345);
console.log(output2);

//enum
enum Role{
    Admin,
    User,
    Guest

}
let userRole :Role = Role.Admin;
console.log(userRole);
console.log(Role[userRole]);

let role:string ='"User"';
console.log(role == 'admin');
console.log(Role.Admin ===userRole);

interface User{
    id:number;
    name:string;
    role:Role;
}

let update :Partial<User> = {
    id:101
};

console.log(update);
update.id = 102;

let readonlyUser :Readonly<User> = {
    id:201,
    name:'Emma',
    role:Role.User
};
console.log(readonlyUser);

//tasks
enum Car{
    Sedan,
    SUV,
    Truck,
    Coupe
}
//create a type model for car class using interface or type alias
type carModel ={
    name:string,
    description:string

}

interface CarDetials{
   make:string,
   model:carModel,
   year:number,
   type:Car,
   isElectric?:boolean
}

//filter the cars whose year is greather than 2015 from the array of car objects
let cars:CarDetials[] =[
    {
        make:'toyota',
        model:{name:"xtz",description:'ddff'},
        year:2004,
        type:Car.SUV,

    },
     {
        make:'toyota',
        model:{name:"xtz",description:'ddff'},
        year:2010,
        type:Car.SUV,
        
    },
     {
        make:'toyota',
        model:{name:"xtz",description:'ddff'},
        year:2018,
        type:Car.SUV,
        
    }, {
        make:'toyota',
        model:{name:"xtz",description:'ddff'},
        year:2016,
        type:Car.SUV,
        
    }
]

let filteredCars = cars.filter(car => car.year > 2015);
console.log(filteredCars);