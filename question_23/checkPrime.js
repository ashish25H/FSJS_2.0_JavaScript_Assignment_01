// 23. Write a program to check that the number given by the user is a prime number or not.

const checkPrime = (num)=>{
    let i;
    if(num<2){
        return `Not prime`;
    }
    for( i=2; i<=Math.floor(num/2); i++){
        if(num%i===0){
            return `not prime`;
        }
    }
    if(i>=Math.floor(num/2)){
        return `Prime number`;
    }
}

console.log(checkPrime(12));