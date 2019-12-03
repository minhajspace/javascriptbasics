// if else
// let houre = 13;

// if (houre >= 6 && houre < 12) console.log("good morning");
// else if (houre >= 12 && houre < 18) console.log("good afternoon");
// else console.log("good evening");
//                                 swtich case

let weekend = "monday";

switch (weekend) {
  case "saturday":
    console.log("this is the 2nd last day of the week ");
    break;
  case "sunday":
    console.log("last day of the week");
    break;
  default:
    console.log("given day is not weekends day ");
} // we also do this on using if else statment

if (weekend === "saturday") console.log("this is the 2nd last day of the week");
else if (weekend === "sunday") console.log("this is the last day of the week ");
else console.log("this is not the weekends ");
