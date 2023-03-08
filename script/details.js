let queryString = location.search

let params = new URLSearchParams(queryString)

let id = params.get("_id");

let eventos = (data.events).find(events => events._id == id);

const details = document.querySelector("contenedor__tarjetas");
details.innerHTML = `
<div class="card" style="width: 18rem;">
        <img src="${details[0].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${details[0].name}</h5>
          <p class="card-text">${details.[0].description}</p>
          <p class="card-text">${details.[0].category}</p>
          
        </div>
      </div>`