// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date();
let month = date.getMonth()+1;
month = month<=9?"0"+month:month;

let dt = date.getDate();
dt = dt<=9?"0"+dt:dt;

console.log(`YYYY-MM-DD HH:mm -- ${date.getFullYear()}-${month}-${dt}  ${date.getHours()}:${date.getMinutes()}`);

console.log(`DD-MM-YYYY HH:mm -- ${dt}-${month}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`);

console.log(`DD/MM/YYYY HH:mm -- ${dt}/${month}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`);


