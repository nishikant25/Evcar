const cars = [
  { name: "Tata Nexon EV", range: "465 km", price: "₹14 Lakh", img: "https://source.unsplash.com/400x200/?tata-car" },
  { name: "MG ZS EV", range: "461 km", price: "₹23 Lakh", img: "https://source.unsplash.com/400x200/?mg-car" },
  { name: "Mahindra XUV400", range: "456 km", price: "₹16 Lakh", img: "https://source.unsplash.com/400x200/?mahindra-car" },
  { name: "Tata Punch EV", range: "421 km", price: "₹10 Lakh", img: "https://source.unsplash.com/400x200/?compact-car" },
  { name: "Tata Tiago EV", range: "315 km", price: "₹8.5 Lakh", img: "https://source.unsplash.com/400x200/?hatchback-car" },
  { name: "MG Comet EV", range: "230 km", price: "₹8 Lakh", img: "https://source.unsplash.com/400x200/?small-car" },
  { name: "Hyundai Kona Electric", range: "452 km", price: "₹24 Lakh", img: "https://source.unsplash.com/400x200/?hyundai-car" },
  { name: "Hyundai Ioniq 5", range: "631 km", price: "₹46 Lakh", img: "https://source.unsplash.com/400x200/?hyundai-electric" },
  { name: "BYD Atto 3", range: "521 km", price: "₹26 Lakh", img: "https://source.unsplash.com/400x200/?byd-car" },
  { name: "BYD e6", range: "520 km", price: "₹29 Lakh", img: "https://source.unsplash.com/400x200/?electric-mpv" },
  { name: "Kia EV6", range: "708 km", price: "₹65 Lakh", img: "https://source.unsplash.com/400x200/?kia-car" },
  { name: "BMW i4", range: "590 km", price: "₹75 Lakh", img: "https://source.unsplash.com/400x200/?bmw-car" },
  { name: "Mercedes EQS", range: "857 km", price: "₹1.5 Cr", img: "https://source.unsplash.com/400x200/?mercedes-car" },
  { name: "Mahindra BE 6", range: "550 km", price: "₹20 Lakh", img: "https://source.unsplash.com/400x200/?suv-car" },
  { name: "Mahindra XEV 9e", range: "656 km", price: "₹22 Lakh", img: "https://source.unsplash.com/400x200/?future-car" },
  { name: "Tata Harrier EV", range: "500 km", price: "₹23 Lakh", img: "https://source.unsplash.com/400x200/?tata-suv" },
  { name: "Tata Curvv EV", range: "500 km", price: "₹20 Lakh", img: "https://source.unsplash.com/400x200/?concept-car" },
  { name: "Maruti e Vitara", range: "550 km", price: "₹16 Lakh", img: "https://source.unsplash.com/400x200/?maruti-car" },
  { name: "Hyundai Creta EV", range: "450 km", price: "₹19 Lakh", img: "https://source.unsplash.com/400x200/?hyundai-suv" },
  { name: "VinFast VF6", range: "468 km", price: "₹18 Lakh", img: "https://source.unsplash.com/400x200/?modern-car" },
  { name: "VinFast VF7", range: "532 km", price: "₹24 Lakh", img: "https://source.unsplash.com/400x200/?premium-suv" },
  { name: "Kia Carens EV", range: "400 km", price: "₹18 Lakh", img: "https://source.unsplash.com/400x200/?family-car" },
  { name: "Tata Safari EV", range: "500 km", price: "₹26 Lakh", img: "https://source.unsplash.com/400x200/?big-suv" },
  { name: "MG Windsor EV", range: "400 km", price: "₹15 Lakh", img: "https://source.unsplash.com/400x200/?luxury-car" },
  { name: "Vayve Eva Solar EV", range: "250 km", price: "₹5 Lakh", img: "https://source.unsplash.com/400x200/?mini-car" }
];

let selected = [];

function loadCars() {
  const container = document.getElementById("carContainer");
  container.innerHTML = "";

  cars.forEach((car, i) => {
    container.innerHTML += `
      <div class="card">
        <img src="${car.img}">
        <h2>${car.name}</h2>
        <p>⚡ ${car.range}</p>
        <p>💰 ${car.price}</p>
        <button class="select-btn" onclick="selectCar(${i})">Select</button>
      </div>
    `;
  });
}

function selectCar(i) {
  if (selected.length < 2) {
    selected.push(cars[i]);
    alert("✅ Selected: " + cars[i].name);
  } else {
    alert("❌ Only 2 cars allowed");
  }
}

function compareCars() {
  if (selected.length < 2) {
    alert("Select 2 cars first!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h2>⚡ Comparison</h2>
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

loadCars();
