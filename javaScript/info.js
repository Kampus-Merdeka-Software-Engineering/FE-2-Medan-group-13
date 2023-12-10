const hotelListElement = document.getElementById("view");

fetch("https://be-2-medan-13.up.railway.app/hotel")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((hotel) => {
      if (hotel.id >= 6 && hotel.id <= 8) {
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
  if (hotelId === 6) {
    return "infofas2.html";
  } else {
    return "#";
  }
}