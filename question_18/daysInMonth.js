// 18. Write a program which tells the number of days in a month, now consider leap year.


const numberOfDays = (month) => {
  month = month.toLowerCase();

  switch (month) {
    case "january":
      console.log(`number of days : 31`);
      break;
    case "february":
      console.log(`number of days : 29`);
      break;
    case "march":
      console.log(`number of days : 31`);
      break;
    case "april":
      console.log(`number of days : 30`);
      break;
    case "may":
      console.log(`number of days : 31`);
      break;
    case "june":
      console.log(`number of days : 30`);
      break;
    case "july":
      console.log(`number of days : 31`);
      break;
    case "august":
      console.log(`number of days : 31`);
      break;
    case "september":
      console.log(`number of days : 30`);
      break;
    case "october":
      console.log(`number of days : 31`);
      break;
    case "november":
      console.log(`number of days : 30`);
      break;
    case "december":
      console.log(`number of days : 30`);
      break;
    default:
      console.log(`enter a valid choice`);
  }
};
numberOfDays('february');
