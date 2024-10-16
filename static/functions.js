//scripts for the site
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    document.addEventListener('DOMContentLoaded', function() {
        fetch('/loadItem')
            .then(response => response.json())
            .then(data => {
                const itemContainer = document.getElementById('item-container');
                data.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('item');
                    itemElement.innerHTML = `
                    <a href="/item/${item.name}" class="item">
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


function toggleDropdown() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}

function hideDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('active');
}
