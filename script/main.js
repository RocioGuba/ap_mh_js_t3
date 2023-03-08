
const tarjetasHome = document.getElementById("cards")

let tarjetasCargadas = ""


data.events.forEach(evento => tarjetasCargadas +=  
  `
      <div class="card event__card p-2 m-5 rounded ">
      <div class="row no-gutters">
        <div class="col-sm-5">
          <img class="card-img shadow-sm p-3 mb-5 bg-white rounded" src=" ${evento.image} "alt=""/>
        </div>
        <div class="col-sm-7">
          <div class="card-body">
            <h5 class="card-title">${evento.name} </h5>
            <p class="card-text">${evento.description} </p>
          </div>
        </div>
      </div>
    </div> ` );

    tarjetasHome.innerHTML = tarjetasCargadas;

    let llamarTarjetas = []

    data.events.forEach(evento => llamarCards.push(evento));
     let filtro = llamarTarjetas.filter(evento => evento.name.toLowerCase().includes(evento.toLowerCase()));

     console.log(filtro);

     let tarjetasFiltradas= "";

     filtro.forEach(evento => tarjetasFiltradas +=
      `
       <div class="card event__card p-2 m-5 rounded ">
      <div class="row no-gutters">
        <div class="col-sm-5">
          <img class="card-img shadow-sm p-3 mb-5 bg-white rounded" src=" ${evento.image} "alt=""/>
        </div>
        <div class="col-sm-7">
          <div class="card-body">
            <h5 class="card-title">${evento.name} </h5>
            <p class="card-text">${evento.description} </p>
          </div>
        </div>
      </div>
    </div> `
      );

     tarjetasHome.innerHTML = tarjetasFiltradas;