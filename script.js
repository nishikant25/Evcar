const cars = [
  {
    name: "Tata Nexon EV",
    range: "312 km",
    price: "₹14 Lakh"
  },
  {
    name: "MG ZS EV",
    range: "461 km",
    price: "₹23 Lakh"
  },
  {
    name: "Mahindra XUV400",
    range: "456 km",
    price: "₹16 Lakh"
  }
];

const selected = [];

function loadCars() {
  const container = document.getElementById("carContainer");

  cars.forEach((car, index) => {
   const container = document.getElementById("carContainer");

cars.forEach((car, index) => {
  const card = `
    <div class="glass p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
      
      <img src="https://source.unsplash.com/400x200/?electric-car"
        class="rounded-xl mb-4">

      <h2 class="text-2xl font-bold">${car.name}</h2>
      
      <p class="text-gray-300 mt-2">⚡ Range: ${car.range}</p>
      <p class="text-gray-300">💰 Price: ${car.price}</p>

      <button onclick="selectCar(${index})"
        class="mt-4 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition">
        Select
      </button>
    </div>
  `;
  container.innerHTML += card;
});
}

function selectCar(index) {
  if (selected.length < 2) {
    selected.push(cars[index]);
    alert(cars[index].name + " selected!");
  } else {
    alert("Only select 2 cars");
  }
}

function compareCars() {
  if (selected.length < 2) {
    alert("Select 2 cars first!");
    return;
  }

  const result = document.getElementById("result");

  result.innerHTML = `
    <div class="bg-gray-800 p-5 rounded-xl">
      <h2 class="text-2xl font-bold mb-4">Comparison</h2>
      <table class="w-full text-left">
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
    </div>
  `;
}

loadCars();
