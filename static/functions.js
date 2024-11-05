//scripts for the site
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    document.addEventListener('DOMContentLoaded', function() {
        fetch('/loadItems')
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

/*
function loadItemData(target){
    //console.log(target)
    fetch('http://127.0.0.1:5000/loadItems')
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
*/

function getQueryParam(param) {
    const queryString = window.location.search; // e.g., "?item=painting1"
    const urlParams = new URLSearchParams(queryString); // Creates a URLSearchParams object
    return urlParams.get(param); // Gets the value of the specified parameter
}

// Event listener that runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const itemName = getQueryParam('item'); // Get the item name from the URL
    if (itemName) { // If an item name was found
        loadItemData(itemName); // Call function to load item data
    }
});
