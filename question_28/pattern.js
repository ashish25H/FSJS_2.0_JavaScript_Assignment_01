// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

//triangle pattern
const triangle = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
};

triangle(3);

//square pattern
const square = (num) => {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
};

square(3);


//pyramid pattern
const pyramid = (n)=>{
    let str ='';
    for(let i=1; i<=n; i++){
        for(let j=1; j<=5; j++){
            if(j>=(4-i) && j<=(2+i)){
                str += '*';
            }else{
                str += ' ';
            }
        }
        str += '\n';
    }
    console.log(str);
}
pyramid(3);

