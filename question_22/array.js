// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
ages.sort((a, b) => a - b);
console.log(`Min age - ${ages[0]} Max age - ${ages[ages.length - 1]}`);

//Find the median age(one middle item or two middle items divided by two)
const median = () => {
  let mid = Math.floor(ages.length / 2);
  if (ages.length % 2 === 0) {
    console.log(`Median - ${(ages[mid] + ages[mid + 1]) / 2}`);
  } else {
    console.log(`Median - ${ages[mid]/2}`);
  }
};
median();

//Find the average age(all items divided by number of items)
const sum = ages.reduce((sum, current) => sum + current, 0);
let avg = Math.floor(sum / ages.length);
console.log(`Average - ${avg}`);

//Find the range of the ages(max minus min)
console.log(`Range - ${ages[ages.length - 1] - ages[0]}`);

//Compare the value of (min - average) and (max - average), use abs() method
const abs = () => {
  console.log(
    `${ages[0] - avg} = ${ages[ages.length - 1] - avg} ${
      ages[0] - avg === ages[ages.length - 1] - avg
    }`
  );
};
abs();
