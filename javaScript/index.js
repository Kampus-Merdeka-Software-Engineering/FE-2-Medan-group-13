const destinasiListElement = document.getElementById("list");

fetch("https://be-2-medan-13.up.railway.app/destinasi")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((destinasi) => {
      const destinasiElement = document.createElement("div");
      destinasiElement.innerHTML = `
        <div class="card">
          <a href="${getDestinasiInfoPage(destinasi.id)}"><img src="./assets${destinasi.image}" alt="${destinasi.name}"></a>
          <div class="card-content">
            <h3>${destinasi.name}, ${destinasi.location}</h3>
            <p>${destinasi.description}</p>
          </div>
        </div>
      `;
      destinasiListElement.appendChild(destinasiElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function getDestinasiInfoPage(destinasiId) {
  if (destinasiId === 1) {
    return "bst1.html";
  } else if (destinasiId === 2) {
    return "bst2.html";
  } else if (destinasiId === 3) {
    return "bst3.html";
  } else {
    return "#";
  }
}