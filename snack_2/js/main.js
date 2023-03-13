// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    }
];

let arrayNomeFalliSquadre = [];

teams.forEach((team) => {

    // NUMERI CASUALI PER OGNI SQUADRA:
    team.punti = Math.floor(Math.random() * 70 + 1);
    team.falli = Math.floor(Math.random() * 50 + 1);

    console.log(team);

    const risultatoFinale = teams.map((team) => {
        const { nome, falli } = team;
        return { nome, falli };
    });
    console.log(risultatoFinale, 'totale');
}
);

