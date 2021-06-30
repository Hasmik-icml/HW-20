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