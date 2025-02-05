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

/**
 * legeneráljuk a form-ot
 * @returns a formot adja vissza
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
    return form
}

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