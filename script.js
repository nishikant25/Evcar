function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

function calculate() {
  let km = document.getElementById("km").value;
  let savings = km * 5;
  document.getElementById("result").innerText =
    "You save ₹" + savings + " per day 🚀";
}

function compareCars() {
  let car1 = document.getElementById("car1").value;
  let car2 = document.getElementById("car2").value;

  if (car1 < car2) {
    document.getElementById("compareResult").innerText =
      "Car 1 is cheaper 💰";
  } else if (car1 > car2) {
    document.getElementById("compareResult").innerText =
      "Car 2 is cheaper 💰";
  } else {
    document.getElementById("compareResult").innerText =
      "Both cost same 🤝";
  }
}
