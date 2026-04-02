const cars = [
  { name: "Tata Nexon EV", range: "465 km", price: "₹14L" },
  { name: "MG ZS EV", range: "461 km", price: "₹23L" },
  { name: "XUV400", range: "456 km", price: "₹16L" },
  { name: "Punch EV", range: "421 km", price: "₹10L" },
  { name: "Tiago EV", range: "315 km", price: "₹8.5L" },
  { name: "Kia EV6", range: "708 km", price: "₹65L" }
];

let selected = [];

function loadCars() {
  const list = document.getElementById("carList");

  cars.forEach((car, i) => {
    list.innerHTML += `
      <div class="card">
        <img src="https://source.unsplash.com/400x200/?electric-car">
        <h3>${car.name}</h3>
        <p>⚡ ${car.range}</p>
        <p>💰 ${car.price}</p>
        <button onclick="selectCar(${i})">Select</button>
      </div>
    `;
  });
}

function selectCar(i) {
  if (selected.length < 2) {
    selected.push(cars[i]);
    alert("Selected: " + cars[i].name);
  } else {
    alert("Only 2 cars allowed");
  }
}

function compareCars() {
  if (selected.length < 2) {
    alert("Select 2 cars first");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h2>Comparison</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th>${selected[0].name}</th>
        <th>${selected[1].name}</th>
      </tr>
      <tr>
        <td>Range</td>
        <td>${selected[0].range}</td>
        <td>${selected[1].range}</td>
      </tr>
      <tr>
        <td>Price</td>
        <td>${selected[0].price}</td>
        <td>${selected[1].price}</td>
      </tr>
    </table>
  `;
  function showInfo(i) {
  alert(cars[i].info);
}
  function calculateSavings() {
  let km = document.getElementById("km").value;

  let petrolCost = km * 8;   // ₹8/km
  let evCost = km * 2;       // ₹2/km

  let savings = petrolCost - evCost;

  document.getElementById("savingResult").innerHTML =
    "You save approx ₹" + savings + " per month using EV 🚗⚡";
}
}

loadCars();
