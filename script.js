function scrollToCalc() {
  document.getElementById("calc").scrollIntoView({ behavior: "smooth" });
}

function calculate() {
  let distance = document.getElementById("distance").value;
  let petrol = document.getElementById("petrol").value;

  if (!distance || !petrol) {
    alert("Enter all values!");
    return;
  }

  let petrolCost = distance * 0.08 * petrol;
  let evCost = distance * 1.5;
  let carbonSaved = distance * 0.12;

  let result = `
    🚗 Petrol Cost: ₹${petrolCost.toFixed(2)} <br>
    ⚡ EV Cost: ₹${evCost.toFixed(2)} <br>
    🌱 Carbon Saved: ${carbonSaved.toFixed(2)} kg
  `;

  document.getElementById("result").innerHTML = result;

  localStorage.setItem("data", result);
}

window.onload = () => {
  let data = localStorage.getItem("data");
  if (data) {
    document.getElementById("result").innerHTML = data;
  }
};
