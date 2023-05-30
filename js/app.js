const restaurant = document.getElementById("Restaurant-container");


function fetchRestaurantApi() {
  fetch("https://localhost:7088/api/foodOrderingSys/restaurant")
    .then((res) => res.json())
    .then((data) => {
       
    
      for (let i = 0; i < data.length; i++) {
        let column = document.createElement("div"); 
        column.classList.add("col-md-3");  
        column.innerHTML = 
        `<div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
        <div class="list-card-image">
            <a href="restaurant.html">
                <img alt="#" src="img/images8.jpg" class="img-fluid item-img w-100">
            </a>
        </div>
        <div class="p-3 position-relative">
            <div class="list-card-body">
                <h6 class="mb-1"><a href="restaurant.html" class="text-black" id="zenithLandRes">${data[i].name}</a></h6>
                <p></p>
            </div>
        </div>
    </div>`;
    restaurant.appendChild(column);
      } 
       
   
   
    });
}

fetchRestaurantApi();