function scrollToCalc() {
  document.getElementById("calc").scrollIntoView({ behavior: "smooth" });
}

function calculate() {
  let distance = parseFloat(document.getElementById("distance").value);
  let petrol = parseFloat(document.getElementById("petrol").value);

  if (!distance || !petrol) {
    alert("Enter valid values!");
    return;
  }

  let petrolCost = distance * 0.08 * petrol;
  let evCost = distance * 1.5;
  let carbonSaved = distance * 0.12;

  document.getElementById("result").innerHTML = `
    🚗 Petrol: ₹${petrolCost.toFixed(2)} <br>
    ⚡ EV: ₹${evCost.toFixed(2)} <br>
    🌱 Saved: ${carbonSaved.toFixed(2)} kg
  `;

  // SAVE HISTORY
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(carbonSaved);
  localStorage.setItem("history", JSON.stringify(history));

  updateUI();
}

function updateUI() {
  let history = JSON.parse(localStorage.getItem("history")) || [];

  // TOTAL
  let total = history.reduce((a, b) => a + b, 0);
  document.getElementById("total").innerText = total.toFixed(2) + " kg";

  // HISTORY LIST
  let list = document.getElementById("history");
  list.innerHTML = "";

  history.slice(-5).reverse().forEach(val => {
    let li = document.createElement("li");
    li.textContent = "Saved " + val.toFixed(2) + " kg CO₂";
    list.appendChild(li);
  });
}

window.onload = updateUI;
