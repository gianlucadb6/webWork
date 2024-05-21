//scripts for the site
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    document.addEventListener('DOMContentLoaded', function() {
        fetch('http://127.0.0.1:5000/')
            .then(response => response.json())
            .then(data => {
                const itemContainer = document.getElementById('item-container');
                data.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('item');
                    itemElement.innerHTML = `
                        <a href="/itemPage.html?item=${item.name}" class="item">
                            <img src="${item.imgPTH}" alt="${item.name}">
                            <h3>${item.name}</h3>
                            <p>$${item.price}</p>
                        </a>
                    `;
                    itemContainer.appendChild(itemElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });
}


function loadItemData(target){
    //console.log(target)
    fetch('http://127.0.0.1:5000/loadItem')
            .then(response => response.json())
            .then(data => {
                const itemContainer = document.getElementById('itemDetails');
                data.forEach(item => {
                    if(item.name == target){
                        const itemElement = document.createElement('div');
                        itemElement.classList.add('item');
                        itemElement.innerHTML = `
                            <img src="${item.imgPTH}" alt="${item.name}">
                            <h2>${item.description}</h2>
                            <h3>${item.name}</h3>
                            <p>$${item.price}</p>
                        `;
                        itemContainer.appendChild(itemElement);
                    }
                });
            })
            .catch(error => console.error('Error fetching data:', error));
}