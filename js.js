/************** Day 1: Arithmetic Operators **************/

function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (length + width);
  return perimeter;
}
/*****************Day 3: Intro to Conditional Statements*****************/

function main() {
    const N = parseInt(readLine().trim(), 10);
     if (N % 2 ==1){
         console.log("Weird");
     }
     if (N % 2 ==0 && N >= 2 && N <= 5){
         console.log("Not Weird");
     }
     if (N % 2 ==0 && N >= 6 && N <= 20){
         console.log("Weird");
     }
     if (N % 2 ==0 && N > 20){
         console.log("Not Weird");
     }
}
