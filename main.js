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

/**
 * legeneráljuk a táblázat fejlécét
 */
function fejlecGen(){ //létrehozom a fejlecgenerálás függvényt
    const fejlec = { //a fejlec objektuma
        ter: "Fizika területe",  //az objektum ter tulajdonsága
        ido: "Időszak" ,  //az objektum ido tulajdonsága
        kepv: "Képviselők"  //az objektum kepv tulajdonsága
    }
    const thead = document.createElement('thead') // thead letrehozasa
    tbl.appendChild(thead) //a thead hozzaadasa a tablehez

    const theadr = document.createElement('tr') //tr letrehozasa
    thead.appendChild(theadr) //a tr hozzaadasa a thead hez

    for(const i in fejlec){ //végigmegyünk a fejlec objektumon
        if(i === "kepv"){ //ha az i éréke "kepv" akkor megyunk be
            const th3 = document.createElement('th') //az elso th letrehozasa
            th3.colSpan = 2 //beallitjuk a colspant a cellara
            th3.innerHTML = fejlec[i] //az elso th szovege a fejlec i. tulajdonsága
            theadr.appendChild(th3) //a th-t hozzaadjuk a trhez
        }
        else{
            const th = document.createElement('th') //laz elso th letrehozasa
            th.innerHTML = fejlec[i] //az elso th szovege a fejlec i. tulajdonsága
            theadr.appendChild(th) //a th-t hozzaadjuk a trhez
        }
    }
}

/**
 * legeneráljuk a bekért tömb alapján a táblázatot
 * @param {Array} tomb a generálandó táblázat elemeit tartalmazó tömb
 */
function RenderTable(tomb){ //RenderTable fuggveny letrehozasa
    fejlecGen();

    const tbd = document.createElement('tbody'); // Törzs létrehozása
    tbl.appendChild(tbd); // Törzs hozzáadása a táblázathoz

    // tomb hozzáadása a táblázathoz for ciklussal
    for (let i = 0; i < tomb.length; i++) {
        const sor = tomb[i]; // Aktuális sor

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

RenderTable(sorok); // a renderTable meghívása

const form = document.getElementById('form'); // A form elem beszerzése

/**
 * legeneráljuk a form-ot
 */
function formGen(){ //letrehozzuk a formgeneralas fuggvenyt
    const formtomb = [ //letrehozzuk a formtombot, ami alapjan generalodik a form
        {
            id: "fizika", //a formtomb elso objektumanak id tulajdonsága "fizika"
            label: "Terület megnevezése:" //a formtomb elso objektumanak label tulajdonsága "Terület megnevezése"
        },
        {
            id: "ido", //a formtomb masodik objektumanak id tulajdonsága "ido"
            label: "Időszak:" //a formtomb masodik objektumanak label tulajdonsága "Időszak"
        },
        {
            id: "tudos1", //a formtomb haramdik objektumanak id tulajdonsága "tudos1"
            label: "Első tudós:" //a formtomb haramdik objektumanak label tulajdonsága "Első tudós"
        },
        {
            id: "tudos2", //a formtomb negyedik objektumanak id tulajdonsága "tudos2"
            label: "Második tudós:" //a formtomb negyedik objektumanak label tulajdonsága "Második tudós"
        }
    ]
    const form = document.createElement('form') //letrehozzuk a formot
    form.id = "form" //a form id ja form
    form.action = "#" //a form actionje #
    document.body.appendChild(form) //a formot hozzáadjuk a bodyhoz
    for(let i = 0; i < formtomb.length; i++){ //vegigmegyunk a formtomb-on 
        const div = document.createElement('div') //letrehoznk egy divet
        form.appendChild(div) //a divez hozzáadjuk a formhoz
        const label = document.createElement('label') //letrehozunk egy labelt
        label.innerHTML = formtomb[i].label //a label szovege a label tulajdonság az i. objektumbol
        div.appendChild(label) ///a divhez hozzáadjuk a labelt
        const br = document.createElement('br') //létrehozunk egy br-t 
        div.appendChild(br) //a brt hozzáadjuk a divhez
        const input = document.createElement('input') //létrehozunk egy input mezőt
        div.appendChild(input)  //a inputot hozzáadjuk a divhez
        input.type = "text" //az input type "text"
        input.id = formtomb[i].id //az input idja az id tulajdonság az i. objektumbol
        input.name = formtomb[i].id //az input nameje az id tulajdonság az i. objektumbol
        const br2 = document.createElement('br') //létrehpzunk megegy brt
        div.appendChild(br2) //a brt hozzáadjuk a divhez
        const span = document.createElement('span') //létrehozunk egy spant az errornak
        div.appendChild(span) //a divhez hozzáadjkuk a spant
        span.className = "error" //a span class = error
        
        const br3 = document.createElement('br') //létrehozunk mégegy br-t
        div.appendChild(br3) //a brt hozzáadjuk a divhez
    }
    const button = document.createElement('button')
    button.innerHTML = "Hozzáadás"
    form.appendChild(button)
}

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

/**
 * Megvizsgáljuk, hogy az elem valid-e
 * @param {HTMLElement} validelem 
 * @param {String} errorszovege 
 * @returns hogy valid-e az elem vagy sem
 */
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

/**
 * Megvizsgáljuk, hogy a két képviselő(HTMLElement) valid-e
 * @param {HTMLElement} kepv1 
 * @param {HTMLElement} kepv2 
 * @param {String} errorszovege 
 * @returns hogy valid-e az elem vagy sem
 */
function validateKepv(kepv1, kepv2, errorszovege){
    let valid = true;
    if (kepv1.value === "" && kepv2.value === "") { // Ha mindkét képviselő mező üres
        const parent = kepv1.parentElement; // A kepv1 parentjét kivesszük
        const error = parent.querySelector('.error'); // A parent error classos spanjét kivesszük
        error.innerHTML = errorszovege; // Az error szövege errorszovege

        const parent2 = kepv2.parentElement; // A kepv2 parentjét kivesszük
        const error2 = parent2.querySelector('.error'); // A parent2 error classos spanjét kivesszük
        error2.innerHTML = errorszovege; // Az error2 szövege errorszovege

        valid = false; // Mivel mindkét mező üres, érvénytelen a form
    } else {
        // Ha csak a kepv2 mező üres
        if (kepv2.value === "" && kepv1.value !== "") {
            const parent2 = kepv2.parentElement; // A kepv2 parentjét kivesszük
            const error2 = parent2.querySelector('.error'); // A parent2 error classos spanjét kivesszük
            error2.innerHTML = ""; // Az error2 szövege semmi
        }
        // Ha csak a kepv mező üres
        if (kepv1.value === "" && kepv2.value !== "") {
            const parent = kepv1.parentElement; // A kepv1 parentjét kivesszük
            const error = parent.querySelector('.error'); // A parent error classos spanjét kivesszük
            error.innerHTML = ""; // Az error szövege semmi
        }
    }
    return valid //a valid értékével térünk vissza
}