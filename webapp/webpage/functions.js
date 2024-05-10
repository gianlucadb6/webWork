//scripts for the site

document.addEventListener('DOMContentLoaded', function() {
    fetch('/')
        .then(response => response.json())
        .then(data => {
            const itemContainer = document.getElementById('item-container');
            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerHTML = `
                    <img src="${item.imgPTH}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                `;
                itemContainer.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
