class Aumentador {
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

        counter.innerHTML = `${Math.round(cantidadMasita * 100) / 100}`;
        document.getElementById(this.indicador).innerHTML = this.cantidad;

        incremento += Math.round((this.suma / divisor) * 100) / 100;
    }

    agregarObjeto(){

        const etiquetaA = document.createElement('article');
        const etiquetaPAumentador = document.createElement('p');
        const etiquetaPValor = document.createElement('p');
        etiquetaA.id = this.id;
        etiquetaPAumentador.textContent = this.aumentador;
        etiquetaPValor.textContent = this.valor;

        automaticZone.appendChild(etiquetaA).appendChild(etiquetaPAumentador);
        automaticZone.appendChild(etiquetaA).appendChild(etiquetaPValor);

        thinghsZone.innerHTML += `<article class="container-things">
            <p>Cantidad de ${this.aumentador + 's'}:</p>
            <p id='${this.indicador}'>0</p>
        </article>`;

        this.objeto = document.getElementById(this.id);
    }
}

//Tienda

const automaticZone = document.getElementById('automatic-zone-id');
const thinghsZone = document.getElementById('thinghs-zone');

const click = new Aumentador('Click', 1, 25, 'cant-click', 'comprar-click');
const donha = new Aumentador('Doña', 5, 100, 'cant-donha', 'comprar-donha');
const fabrica = new Aumentador('Fabrica', 1000, 100, 'cant-fabricas', 'comprar-fabrica');
const autista = new Aumentador('Manue', 777, 24, 'cant-manue', 'comprar-manue');


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
let divisor = 10;

const intervalo = () => {
    cantidadMasita += incremento;
    counter.innerHTML = `${Math.round(cantidadMasita * 100) / 100}`;
}

setInterval( intervalo , 1000 / divisor);

let pitusa = document.getElementById('pitusas');
let counter = document.getElementById('total');

const sumarMasita = () => {
    cantidadMasita++;
    counter.innerHTML = `${Math.round(cantidadMasita * 100) / 100}`;
}

pitusas.addEventListener('click', sumarMasita);