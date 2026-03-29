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
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Petrol Car', 'EV Car'],
    datasets: [{
      label: 'Monthly Cost ₹',
      data: [8000, 2000],
      borderWidth: 1
    }]
  }
});
function carbonCalc() {
  let km = document.getElementById("fuelKm").value;
  let co2 = km * 0.2;

  document.getElementById("carbonResult").innerText =
    "You produce " + co2 + " kg CO2/day 😬";
}
function recommend() {
  let budget = document.getElementById("budget").value;

  let result = "";

  if (budget <= 15) {
    result = "Best: Tata Nexon EV 🔥";
  } else if (budget <= 20) {
    result = "Best: MG ZS EV ⚡";
  } else {
    result = "Best: BYD Atto 3 🚀";
  }

  document.getElementById("aiResult").innerText = result;
}
