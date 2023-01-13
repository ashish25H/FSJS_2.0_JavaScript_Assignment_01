//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let arr = ['you','tony','pw skills','energy','string','bool','pw skills'];
console.log(arr.lastIndexOf("pw skills"));
console.log(arr.lastIndexOf("pw skills",5));

let lastIndex = arr.lastIndexOf("pw skills");
let firstIndex = arr.lastIndexOf("pw skills",lastIndex-1);

console.log(`First index - ${firstIndex} Last index - ${lastIndex}`);


 