const sorok = [
    {
        ter: "Optika", // Az első sor területe "Optika"
        ido: "XI. század",  // Az első sor időszaka "XI. század"
        kepv: "Alhazen"  // Az első sor képviselője "Alhazen"
    },
    {
        ter: "Asztronómia", // A második sor területe "Asztronómia"
        ido: "reneszánsz",  // A második sor időszaka "Reneszánsz"
        kepv: "Kepler", // A második sor első képviselője "Kepler"
        kepv2: "Galilei" // A második sor második képviselője "Galilei"
    },
    {
        ter: "Kvantumfizika", // A harmadik sor területe "Kvantumfizika"
        ido: "XIX-XX. század",  // A harmadik sor időszaka "XIX-XX. század"
        kepv: "Max Planck", // A harmadik sor első képviselője "Max Planck"
        kepv2: "Albert Einstein" // A harmadik sor második képviselője "Albert Einstein"
    },
    {
        ter: "Modern fizika", // A negyedik sor területe "Modern fizika"
        ido: "XX-XXI. század",  // A negyedik sor időszaka "XX-XXI. század"
        kepv: "Richard Feynman", // A negyedik sor első képviselője "Richard Feynman"
        kepv2: "Stephen Hawking" // A negyedik sor második képviselője "Stephen Hawking"
    }
];

formGen();

const tbl = document.createElement('table'); // Táblázat létrehozása
document.body.appendChild(tbl); // Táblázat hozzáadása a body-hoz

RenderTable(sorok); // a renderTable meghívása

const form = document.getElementById('form'); // A form elem beszerzése

form.addEventListener('submit', function(e) { // A form submit eseményére eseménykezelőt adok
    e.preventDefault(); // Megakadályozom az alapértelmezett műveletet
    const terElem = document.getElementById('fizika'); // Elérem a HTML-ból a fizika mezőt
    const idoElem = document.getElementById('ido'); // Elérem a HTML-ból az idő mezőt
    const kepvElem = document.getElementById('tudos1'); // Elérem a HTML-ból az első tudós mezőt
    const kepv2Elem = document.getElementById('tudos2'); // Elérem a HTML-ból a második tudós mezőt
    const terValue = terElem.value; // A terElem értékét eltárolom a terV változóba
    const idoValue = idoElem.value; // Az idoElem értékét eltárolom az idoV változóba
    const kepvValue = kepvElem.value; // A kepvElem értékét eltárolom a kepvV változóba
    const kepv2Value = kepv2Elem.value; // A kepv2Elem értékét eltárolom a kepv2V változóba

    const errorszoveg = "A mező kitöltése kötelező!"; // Az error üzenetet egy változóba helyezzük
    const errorkepv = "Legalább egy tudóst meg kell adni!" //az error szöveget a kepviselőkhöz berakjuk egy változóba
    const current = e.currentTarget; // Az 'e' esemény célját (aktuális elem) tároljuk a current változóban
    const errorok = current.querySelectorAll('.error'); // Az összes error elemet kivesszük a current-ből
    let valid = true; // A valid változó alapértelmezett értéke igaz

    for (const i of errorok) { // Végigiterálunk az összes hibaüzeneten
        i.innerHTML = ""; // Az összes hibaüzenetet töröljük
    }

    if(!validate(terElem, errorszoveg)){ //ha a validate falseal ter vissza akkor megyunk be
        valid = false; // Beállítjuk, hogy a valid értéke hamis, mivel a terValue üres
    }

    if(!validate(idoElem, errorszoveg)){ //ha a validate falseal ter vissza akkor megyunk be
        valid = false; // Beállítjuk, hogy a valid értéke hamis, mivel az idoValue üres
    }
    // Képviselők mezők validálása (kepv és kepv2)
    if(!validateKepv(kepvElem, kepv2Elem, errorkepv)){ //ha a validate2 falseal tér vissza akkor megyunk be
        valid = false //a valid értékét falsera állítjuk
    }

    if (valid) { // Ha a form valid
        // Ha a kepv mező üres, akkor a kepv2 mezőt fogjuk használni helyette
        if (kepvValue === "") {  
            uj = { 
                ter: terValue, // A ter tulajdonság értéke terValue
                ido: idoValue, // Az ido tulajdonság értéke idoValue
                kepv: kepv2Value, // A kepv tulajdonság értéke kepv2Value
            };
        } else {
            uj = { 
                ter: terValue, // A ter tulajdonság értéke terValue
                ido: idoValue, // Az ido tulajdonság értéke idoValue
                kepv: kepvValue, // A kepv tulajdonság értéke kepvValue
                kepv2: kepv2Value, // A kepv2 tulajdonság értéke kepv2Value
            };
        }

        sorok.push(uj); // Az új objektumot hozzáadjuk a sorok tömbhöz
    }
    tbl.innerHTML = ""; // A táblázat tartalmát töröljük
    RenderTable(sorok); // Meghívjuk a RenderTable függvényt a frissített táblázat megjelenítéséhez
});