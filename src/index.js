function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  berlinDateElement = berlinElement.querySelector(".date");
  berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinTime.format("MMMM	Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}
updateTime();
setInterval(updateTime, 1000);
