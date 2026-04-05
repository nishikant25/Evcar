const cars = [
  { name: "Tata Nexon EV", range: 465, price: 14, rating: 4.5 },
  { name: "MG ZS EV", range: 461, price: 23, rating: 4.6 },
  { name: "Kia EV6", range: 708, price: 65, rating: 4.8 },
  { name: "Tiago EV", range: 315, price: 8.5, rating: 4.2 }
];

let selected = [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function loadCars() {
  const list = document.getElementById("carList");
  const search = document.getElementById("search")?.value.toLowerCase() || "";

  list.innerHTML = "";

  cars.forEach((car, i) => {
    if (!car.name.toLowerCase().includes(search)) return;

    let costPerKm = (car.price * 100000) / (car.range * 1000);

    list.innerHTML += `
      <div class="card">
        <h3>${car.name}</h3>
        <p>⚡ ${car.range} km</p>
        <p>💰 ₹${car.price}L</p>
        <p>⭐ ${car.rating}</p>
        <p>⚙ ₹${costPerKm.toFixed(2)}/km</p>

        <div style="background:#ddd;width:100%">
          <div style="background:green;width:${car.range/8}%"> </div>
        </div>

        <button onclick="showInfo(${i})">Info</button>
        <button onclick="selectCar(${i})">Select</button>
        <button onclick="addWishlist(${i})">❤️ Save</button>
      </div>
    `;
  });
}

function showInfo(i) {
  alert(cars[i].name + " ⭐ " + cars[i].rating);
}

function selectCar(i) {
  if (selected.length < 2) {
    selected.push(cars[i]);
    alert("Selected: " + cars[i].name);
  } else {
    alert("Only 2 cars allowed");
  }
}

function addWishlist(i) {
  wishlist.push(cars[i]);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Saved to Wishlist ❤️");
}

function compareCars() {
  if (selected.length < 2) {
    alert("Select 2 cars first");
    return;
  }

  let best = selected[0].range > selected[1].range ? selected[0] : selected[1];

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
        <td>₹${selected[0].price}L</td>
        <td>₹${selected[1].price}L</td>
      </tr>
    </table>
    <p>🏆 Best Range: ${best.name}</p>
  `;
}

// 🔋 Battery Tracker
function batteryTracker() {
  let percent = Number(document.getElementById("battery").value);
  let km = Number(document.getElementById("dailyKm").value);

  if (!selected[0]) {
    alert("Select a car first");
    return;
  }

  let days = (selected[0].range * percent / 100) / km;

  document.getElementById("batteryResult").innerHTML =
    🔋 Battery will last ${days.toFixed(1)} days;
}

// 🗺️ Trip Planner
function tripPlanner() {
  let distance = Number(document.getElementById("tripKm").value);

  let best = cars.sort((a, b) => b.range - a.range)[0];

  let stops = Math.ceil(distance / best.range) - 1;

  document.getElementById("tripResult").innerHTML =
    🚗 Best Car: ${best.name} <br> ⚡ Charging Stops: ${stops};
}

// 💰 Savings
function calculateSavings() {
  let
