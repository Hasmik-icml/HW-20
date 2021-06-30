//1
const createTriangle = 5;

function  Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype.perimeter = function () {
  return this.a + this.b + this.c;
}
let rec = [];
for (let i = 1; i <= createTriangle; ++i){
    rec[i] = new Triangle((i+4),(i+5),(i+7));
    console.log(rec[i]); 
}
console.log(rec[2].perimeter());

//2
const numbers = {
  a: 5,
  b: 4
};

function Sum() {
  console.log("this is a sum function");
  console.log(this.a + this.b);
}

Sum.prototype = numbers;

const calculate = new Sum();
// console.log(calculate.a + calculate.b);

//3

const animal = {
  animalIs: "pet",
};
const dog = Object.create(animal);

dog.animalMethod = function () {
    console.log("gaf gaf");
  };


console.log(dog.animalIs);

//4

const car = {
  carName: "Subaru",
  model: "Forester",
};

const newCar = Object.create(car);

newCar.year = 2010;

console.log(newCar.carName);

//5

const rectangle = {
  sideA: 4,
  sideB: 5,
  sideC: 4,
  sideD: 5
};

const newRectangle = Object.create(rectangle);

newRectangle.perimeter = function () {
  return this.sideA + this.sideB + this.sideC + this.sideD;
};
console.log(newRectangle.perimeter());


//6
class Triangle {
  constructor(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  perimeter() {
    return this.side1 + this.side2 + this.side3;
  }

}

const newTriangle = new Triangle(3, 3 , 3);
const perimeterOfTriangle = newTriangle.perimeter();
console.log(perimeterOfTriangle);

//7
class Rectangle {
  constructor(height = this.defaultHeight, width = this.defaultWidth) {
    this.width = width;
    this.height = height;
  }
 
  defaultWidth() {
    this.width = 15;
    return this.width;
  }
  defaultHeight() {
    this.height = 2;
    return this.height;
  }
   area(){
    return this.width * this.height;
  }
}
const newRectangle = new Rectangle(30, 2);
const areaOfRectangle = newRectangle.area();
console.log(areaOfRectangle);

const newRectangle1 = new Rectangle();
const areaOfRectangle1 = newRectangle1.area();
console.log(areaOfRectangle1);