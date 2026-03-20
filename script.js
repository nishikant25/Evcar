function calculate() {
  let distance = document.getElementById("distance").value;
  let petrol = document.getElementById("petrol").value;

  if (distance === "" || petrol === "") {
    alert("Please enter all values");
    return;
  }

  // Petrol calculation
  let petrolCost = distance * 0.08 * petrol;

  // EV calculation
  let evCost = distance * 1.5;

  // Carbon saving
  let carbonSaved = distance * 0.12;

  let resultText = `
    🚗 Petrol Cost: ₹${petrolCost.toFixed(2)} <br>
    ⚡ EV Cost: ₹${evCost.toFixed(2)} <br>
    🌱 Carbon Saved: ${carbonSaved.toFixed(2)} kg
  `;

  document.getElementById("result").innerHTML = resultText;

  // Save data
  localStorage.setItem("lastResult", resultText);
}

// Load previous result
window.onload = function () {
  let saved = localStorage.getItem("lastResult");
  if (saved) {
    document.getElementById("result").innerHTML = saved;
  }
};
