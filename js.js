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

/************Day 2: Conditional Statements: Switch*************************/



 // Write your code here
     switch(true) {
    case 'aeiou'.includes(s[0]) : 
    letter = "A"; 
    break;
    case 'bcdfg'.includes(s[0]) :
    letter = "B";
    break;
    case 'hjklm'.includes(s[0]) :
    letter = "C";
    break;
    case 'npqrstvwxyz'.includes(s[0]) :
    letter = "D";
    break;
}
    
    return letter;
}
/*********** day1 functions**********/
function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}
