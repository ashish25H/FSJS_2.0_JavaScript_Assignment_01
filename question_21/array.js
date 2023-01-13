// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countriesNameArr = ['India','USA','China','UK','Canada','Bangladesh','Nepal','Bhutan'];



countriesNameArr.includes('Ethiopia')?console.log('ETHIOPIA'):countriesNameArr.push('Ethiopia');
console.log(countriesNameArr);