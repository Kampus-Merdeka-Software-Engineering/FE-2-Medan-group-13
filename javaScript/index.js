const API_BASE_URL = 'https://be-2-medan-13.up.railway.app';

async function fetchhotels() {
    const hotelList = document.getElementById('hotels-list');
    try {
        const response = await fetch(`${API_BASE_URL}/hotels`)
        const hotels = await response.json();
        const hotelListElement = hotels.map((hotel) => {
            //   return `
            //     <li>${hotel.title} by ${hotel.author}</li>
            //   `;
                return `
                    <li>${hotel.title}</li>`;
        });

        hotelList.innerHTML = hotelListElement
    } catch (err) {
        console.error(err);
    }
};

fetchhotels();

async function addhotel() {
    const title = document.getElementById('hotel-title').value;
    //   const author = document.getElementById('hotel-author').value;

    try {
        await fetch(`${API_BASE_URL}/hotels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //   body: JSON.stringify({ title, author })
            body: JSON.stringify({ title })
        });
    } catch (err) {
        console.error(err);
    } finally {
        fetchhotels();
    }
}