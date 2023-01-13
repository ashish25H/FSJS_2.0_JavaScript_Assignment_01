// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let month =prompt("Enter the month name : ");
// month = month.toLocaleLowerCase();
month=month.toLowerCase();

switch (month) {
  case "september":
    alert("the season is Autumn");
    break;
  case "october":
    alert("the season is Autumn");
    break;
  case "november":
    alert("the season is Autumn");
    break;

  case "december":
    alert("the season is Winter");
    break;
  case "january":
    alert("the season is Winter");
    break;
  case "february":
    alert("the season is Winter");
    break;

  case "march":
    alert("the season is Spring");
    break;
  case "april":
    alert("the season is Spring");
    break;
  case "may":
    alert("the season is Spring");
    break;

  case "june":
    alert("the season is Summer");
    break;
  case "july":
    alert("the season is Summer");
    break;
  case "august":
    alert("the season is Summer");
    break;

  default:
    alert("Enter a valid choice");
    break;
}
