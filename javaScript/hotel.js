const hotelListElement = document.getElementById("view");

fetch("https://be-2-medan-13.up.railway.app/hotel")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((hotel) => {
      if (hotel.id >= 1 && hotel.id <= 5) {
        const hotelElement = document.createElement("div");
        hotelElement.innerHTML = `
          <div class="card">
            <a href="${getHotelInfoPage(hotel.id)}"><img src="./assets${hotel.image}" alt="${hotel.name}"></a>
            <div class="card-content">
              <h3>${hotel.name}</h3>
              <h4>IDR ${hotel.price}</h4>
            </div>
          </div>
        `;
        hotelListElement.appendChild(hotelElement);
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function getHotelInfoPage(hotelId) {
  if (hotelId === 1) {
    return "infofas1.html";
  } else {
    return "#";
  }
}