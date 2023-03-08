const pastE = document.getElementById("pastE");

//fecha a ser comparada con los demas
const DateBase = new Date(data.currentDate); 

 
//se crea un objeto que ingrese un nuevo dato que en este caso es la fecha principal para guiar si un evento es pasado o futuro.
let tarjetasCargadas = "";

let tarjetasPast = data.events.filter((eventos) => new Date(eventos.date) < DateBase);

      tarjetasPast.forEach((eventos) => (tarjetasCargadas +=
        `
  <div class="card event__card p-2 m-5 rounded ">
  <div class="row no-gutters">
    <div class="col-sm-5">
      <img class="card-img shadow-sm p-3 mb-5 bg-white rounded" src=" ${eventos.image} "alt=""/>
    </div>
    <div class="col-sm-7">
      <div class="card-body">
        <h5 class="card-title">${eventos.name} </h5>
        <p class="card-text">${eventos.description} </p>
      </div>
    </div>
  </div>
</div> `)
      )

//le asignamos el valor a template(html)

pastE.innerHTML = tarjetasCargadas;


/*
let cardGroup = document.getElementById("pastE")

const currentDate = data.currentDate;
const arrayEvents = data.events;

let template = "";

function createCardsPastEvents(arrayEvents, currentDate){
    for (const event of arrayEvents){
        if(event.date < currentDate){
            template += `
            <div class="row p-4 justify-content-center">
                <div class="card text-center" style="width: 18rem">
                  <div class="col-sm-5">
                    <img src=" ${event.image} "alt=""/>
                  </div>
                    <div class="card-body">
                            <h5 class="">${ event.date }</h5>
                            <p class="card-text">${ event.category }</p>
                        <div class="price d-flex justify-content-between">
                            <p class="card-text">${ event.price }</p>
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }
    cardGroup.innerHTML = template;
}

createCardsPastEvents(arrayEvents, currentDate)
*/