const { office365 } = require("calendar-link")

const event = {
  start: "2022-02-14 08:00:00 +0700",
  end: "2022-02-14 15:30:00 +0700",
  title: "Kieran birthday",
  description: "Get ready for the party of your life!",
  location: "Microsoft Teams",
  busy: true,
}

const ADD_EVENT_BTN = document.querySelectorAll(".add-calendar")
ADD_EVENT_BTN.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(office365(event))
  })
})
