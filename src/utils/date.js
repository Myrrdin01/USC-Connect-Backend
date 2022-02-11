const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const nth = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

function datePresentation(date) {
  let month, day, year, day_nth, hour, min, sec, amOrpm;
  // Function returns any date data in a human readable format

  try {
    if (date == "Invalid Date") throw "Invalid Date";

    year = date.getFullYear().toString();
    month = monthNames[date.getMonth()];
    day = date.getDate().toString();
    amOrpm = date.getHours() >= 12 ? "pm" : "am";
    hour = ((date.getHours() + 24) % 12 || 12).toString();
    min = date.getMinutes().toString().padStart(2, "0");
    sec = date.getSeconds().toString();
    day_nth = date.getDate() + nth(date.getDate());
  } catch (error) {
    return {
      year: "0000",
      month: "00",
      day: "00",
      hour: "00",
      min: "00",
      sec: "00",
      day_nth: "00",
      amOrpm: "",
    };
  }

  return { month, day, year, day_nth, hour, min, sec, amOrpm };
}

module.exports = { datePresentation };
