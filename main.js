const fejlec = { // Fejléc objektuma
    ter: "Fizika területe",  // A fejléc "Fizika területe" oszlopot tartalmaz
    ido: "Időszak",  // A fejléc "Időszak" oszlopot tartalmaz
    kepv: "Képviselők"  // A fejléc "Képviselők" oszlopot tartalmaz
}

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

const tbl = document.createElement('table'); // Táblázat létrehozása
document.body.appendChild(tbl); // Táblázat hozzáadása a body-hoz

function RenderTable(){ //RenderTable fuggveny letrehozasa
    const thd = document.createElement('thead'); // Fejléc létrehozása
    tbl.appendChild(thd); // Fejléc hozzáadása a táblázathoz

    const thr = document.createElement('tr'); // Sor létrehozása a fejlécben
    thd.appendChild(thr); // Sor hozzáadása a fejléchez

    const th1 = document.createElement('th'); // Első fejléc cella létrehozása
    th1.innerHTML = fejlec.ter; // Cella szövegének beállítása
    thr.appendChild(th1); // Cella hozzáadása a fejlécsorhoz

    const th2 = document.createElement('th'); // Második fejléc cella létrehozása
    th2.innerHTML = fejlec.ido; // Cella szövegének beállítása
    thr.appendChild(th2); // Cella hozzáadása a fejlécsorhoz

    const th3 = document.createElement('th'); // Harmadik fejléc cella létrehozása
    th3.colSpan = 2; // Oszlopok egyesítése
    th3.innerHTML = fejlec.kepv; // Cella szövegének beállítása
    thr.appendChild(th3); // Cella hozzáadása a fejlécsorhoz

    const tbd = document.createElement('tbody'); // Törzs létrehozása
    tbl.appendChild(tbd); // Törzs hozzáadása a táblázathoz

    // Sorok hozzáadása a táblázathoz for ciklussal
    for (let i = 0; i < sorok.length; i++) {
        const sor = sorok[i]; // Aktuális sor

        const tr = document.createElement('tr'); // Sor létrehozása
        tbd.appendChild(tr); // Sor hozzáadása a törzshöz

        const td1 = document.createElement('td'); // Első cella létrehozása
        td1.innerHTML = sor.ter; // Cella szövegének beállítása
        tr.appendChild(td1); // Cella hozzáadása a sorhoz

        const td2 = document.createElement('td'); // Második cella létrehozása
        td2.innerHTML = sor.ido; // Cella szövegének beállítása
        tr.appendChild(td2); // Cella hozzáadása a sorhoz

        const td3 = document.createElement('td'); // Harmadik cella létrehozása
        td3.innerHTML = sor.kepv; // Cella szövegének beállítása
        tr.appendChild(td3); // Cella hozzáadása a sorhoz

        if(sor.kepv2){ // Ha van kepv2 akkor megyünk be
            const td4 = document.createElement('td'); // Negyedik cella létrehozása
            td4.innerHTML = sor.kepv2; // Cella szövegének beállítása
            tr.appendChild(td4); // Cella hozzáadása a sorhoz
        }else{
            td3.colSpan = 2 //beállítjuk a colspant a cellára
        }
    }
}

RenderTable(); // a renderTable meghívása

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
    if (kepvValue === "" && kepv2Value === "") { // Ha mindkét képviselő mező üres
        const parent = kepvElem.parentElement; // A kepvHTML parentjét kivesszük
        const error = parent.querySelector('.error'); // A parent error classos spanjét kivesszük
        error.innerHTML = errorkepv; // Az error szövege errorkepv

        const parent2 = kepv2Elem.parentElement; // A kepv2HTML parentjét kivesszük
        const error2 = parent2.querySelector('.error'); // A parent2 error classos spanjét kivesszük
        error2.innerHTML = errorkepv; // Az error2 szövege errorkepv

        valid = false; // Mivel mindkét mező üres, érvénytelen a form
    } else {
        // Ha csak a kepv2 mező üres
        if (kepv2Value === "" && kepvValue !== "") {
            const parent2 = kepv2Elem.parentElement; // A kepv2HTML parentjét kivesszük
            const error2 = parent2.querySelector('.error'); // A parent2 error classos spanjét kivesszük
            error2.innerHTML = ""; // Az error2 szövege semmi
        }
        // Ha csak a kepv mező üres
        if (kepvValue === "" && kepv2Value !== "") {
            const parent = kepvElem.parentElement; // A kepvHTML parentjét kivesszük
            const error = parent.querySelector('.error'); // A parent error classos spanjét kivesszük
            error.innerHTML = ""; // Az error szövege semmi
        }
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
    RenderTable(); // Meghívjuk a RenderTable függvényt a frissített táblázat megjelenítéséhez
});

function validate(validelem, errorszovege) { // Létrehozzuk a validate függvényt, amely egy mezőt és hibaüzenetet vár paraméterként
    let valid = true; // A valid alapértelmezett értéke igaz

    if (validelem.value === "") { // Ha a validelem értéke üres, akkor hiba van
        const parent = validelem.parentElement; // Kivesszük a validelem szülőelemét
        const error = parent.querySelector('.error'); // Az adott szülőhöz tartozó .error osztályú elemet keresünk
        if (error !== "") { // Ha az error elem nem üres (tehát létezik ilyen elem)
            error.innerHTML = errorszovege; // Az error elem tartalmát beállítjuk a hibaszövegre
        }
        valid = false; // Ha üres a mező, beállítjuk, hogy a valid hamis legyen
    }

    return valid; // A függvény visszaadja a valid értéket (igaz vagy hamis)
}
