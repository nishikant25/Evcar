const cars = [
  {
    name: "Tata Nexon EV",
    range: "465 km",
    price: "₹14L",
    info: "Best selling EV in India with balanced performance."
  },
  {
    name: "MG ZS EV",
    range: "461 km",
    price: "₹23L",
    info: "Premium EV with advanced features."
  },
  {
    name: "Kia EV6",
    range: "708 km",
    price: "₹65L",
    info: "Luxury EV with ultra fast charging."
  },
  {
    name: "Tiago EV",
    range: "315 km",
    price: "₹8.5L",
    info: "Affordable EV for city use."
  }
];

let selected = [];

function loadCars() {
  const list = document.getElementById("carList");
  list.innerHTML = "";

  cars.forEach((car, i) => {
    list.innerHTML += `
      <div class="card">
        <h3>${car.name}</h3>
        <p>⚡ ${car.range}</p>
        <p>💰 ${car.price}</p>
        <button onclick="showInfo(${i})">Info</button>
        <button onclick="selectCar(${i})">Select</button>
      </div>
    `;
  });
}

function showInfo(i) {
  alert(cars[i].info);
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
}

function calculateSavings() {
  let km = document.getElementById("km").value;

  let petrol = km * 8;
  let ev = km * 2;

  let save = petrol - ev;

  document.getElementById("savingResult").innerHTML =
    "You save ₹" + save + " per month using EV 🚗⚡";
}

loadCars();
