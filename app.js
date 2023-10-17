class Masita {
    constructor(click, cantidadTotal){
        this.click = click;
        this.cantidadTotal = cantidadTotal;
    }


}

class Tienda {
    constructor(aumentador, suma, valor, indicador, id){
        this.aumentador = aumentador;
        this.suma = suma;
        this.valor = valor;
        this.objeto = null;
        this.cantidad = 0;
        this.indicador = indicador;
        this.id = id;
    }

    incrementar() {
        this.cantidad++;
        cantidadMasita -= this.valor;

        counter.innerHTML = `${cantidadMasita}`;
        document.getElementById(this.indicador).innerHTML = this.cantidad;

        incremento += this.suma;
    }

    agregarObjeto(){

        const etiquetaA = document.createElement('article');
        etiquetaA.classList.add('container-things');
        const etiquetaP = document.createElement('p');
        etiquetaP.id = this.id;
        etiquetaP.textContent = this.aumentador;

        automaticZone.appendChild(etiquetaA).appendChild(etiquetaP);

        thinghsZone.innerHTML += `<article class="container-things">
            <p>Cantidad de ${this.aumentador + 's'}</p>
            <p id='${this.indicador}'>0</p>
        </article>`;

        this.objeto = document.getElementById(this.id);
    }
}


//La masita

const masita = new Masita();

//Tienda

const automaticZone = document.getElementById('automatic-zone-id');
const thinghsZone = document.getElementById('thinghs-zone');

const click = new Tienda('Click', 1, 25, 'cant-click', 'comprar-click');
const donha = new Tienda('Doña', 5, 100, 'cant-donha', 'comprar-donha');
const fabrica = new Tienda('Fabrica', 1000, 100, 'cant-fabricas', 'comprar-fabrica');
const autista = new Tienda('Manue', 777, 24, 'cant-manue', 'comprar-manue');


click.agregarObjeto();

click.objeto.addEventListener('click', () => {
    click.incrementar()
});

donha.agregarObjeto();

donha.objeto.addEventListener('click', () => {
    donha.incrementar()
});

fabrica.agregarObjeto();

fabrica.objeto.addEventListener('click', () => {
    fabrica.incrementar()
})

autista.agregarObjeto();

autista.objeto.addEventListener('click', () => {
    autista.incrementar()
})


//Logica

//Sumar masitas

let cantidadMasita = 0;
let incremento = 0;

const intervalo = () => {
    cantidadMasita += incremento;
    counter.innerHTML = `${cantidadMasita}`;
}

setInterval( intervalo , 1000);

let pitusa = document.getElementById('pitusas');
let counter = document.getElementById('total');

const sumarMasita = () => {
    cantidadMasita++;
    counter.innerHTML = `${cantidadMasita}`;
    //console.log()
}

pitusas.addEventListener('click', sumarMasita);

// Compras



