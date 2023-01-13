// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.


let currentAge = Number(prompt("Enter your age : "));
console.log(currentAge);

if(currentAge >=18){
    alert('You are old enough to drive');
}else{
    alert(`You are under 18 you should wait for ${18-currentAge} ${18-currentAge>1?"years":'year'}`)
}