// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let objBici = [
    {
        'nome': 'bici_1',
        'peso': 80
    },
    {
        'nome': 'bici_2',
        'peso': 91
    },
    {
        'nome': 'bici_3',
        'peso': 65
    },
    {
        'nome': 'bici_4',
        'peso': 70
    },
]

let biciPiuLeggera = objBici[0].peso;

objBici.forEach((element) => {
    let { peso } = element;
    if (peso < biciPiuLeggera) {
        biciPiuLeggera = element;
    }
}
);

console.log(biciPiuLeggera);

//DESTRUCTURING
let { nome, peso } = biciPiuLeggera;


//TEMPLATE
document.getElementById('container').innerHTML = `<h1>La bici ${nome} è la bici più leggera con ${peso}!</h1>`;
                                                    
                                                 




