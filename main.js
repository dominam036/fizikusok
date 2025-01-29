const fejlec = { // Fejléc objektuma
    ter: "Fizika területe",  // A fejléc "Fizika területe" oszlopot tartalmaz
    ido: "Időszak",  // A fejléc "Időszak" oszlopot tartalmaz
    kepv: "Képviselők"  // A fejléc "Képviselők" oszlopot tartalmaz
}

const elso = { // Első sor objektuma
    ter: "Optika", // Az első sor területe "Optika"
    ido: "XI. század",  // Az első sor időszaka "XI. század"
    kepv: "Alhazen"  // Az első sor képviselője "Alhazen"
}

const masodik = { // Második sor objektuma
    ter: "Asztronómia", // A második sor területe "Asztronómia"
    ido: "reneszánsz",  // A második sor időszaka "Reneszánsz"
    kepv: "Kepler", // A második sor első képviselője "Kepler"
    kepv2: "Galilei" // A második sor második képviselője "Galilei"
}

const harmadik = { // Harmadik sor objektuma
    ter: "Kvantumfizika", // A harmadik sor területe "Kvantumfizika"
    ido: "XIX-XX. század",  // A harmadik sor időszaka "XIX-XX. század"
    kepv: "Max Planck", // A harmadik sor első képviselője "Max Planck"
    kepv2: "Albert Einstein" // A harmadik sor második képviselője "Albert Einstein"
}

const negyedik = { // Negyedik sor objektuma
    ter: "Modern fizika", // A negyedik sor területe "Modern fizika"
    ido: "XX-XXI. század",  // A negyedik sor időszaka "XX-XXI. század"
    kepv: "Richard Feynman", // A negyedik sor első képviselője "Richard Feynman"
    kepv2: "Stephen Hawking" // A negyedik sor második képviselője "Stephen Hawking"
}
 
const tbl = document.createElement('table'); // Táblázat létrehozása
document.body.appendChild(tbl); // Táblázat hozzáadása a body-hoz

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

// Első sor létrehozása
const tr1 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr1); // Sor hozzáadása a törzshöz

const td1_1 = document.createElement('td'); // Első cella létrehozása
td1_1.innerHTML = elso.ter; // Cella szövegének beállítása
tr1.appendChild(td1_1); // Cella hozzáadása a sorhoz

const td1_2 = document.createElement('td'); // Második cella létrehozása
td1_2.innerHTML = elso.ido; // Cella szövegének beállítása
tr1.appendChild(td1_2); // Cella hozzáadása a sorhoz

const td1_3 = document.createElement('td'); // Harmadik cella létrehozása
td1_3.colSpan = 2; // Oszlopok egyesítése
td1_3.innerHTML = elso.kepv; // Cella szövegének beállítása
tr1.appendChild(td1_3); // Cella hozzáadása a sorhoz

// Második sor létrehozása
const tr2 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr2); // Sor hozzáadása a törzshöz

const td2_1 = document.createElement('td'); // Első cella létrehozása
td2_1.innerHTML = masodik.ter; // Cella szövegének beállítása
tr2.appendChild(td2_1); // Cella hozzáadása a sorhoz

const td2_2 = document.createElement('td'); // Második cella létrehozása
td2_2.innerHTML = masodik.ido; // Cella szövegének beállítása
tr2.appendChild(td2_2); // Cella hozzáadása a sorhoz

const td2_3 = document.createElement('td'); // Harmadik cella létrehozása
td2_3.innerHTML = masodik.kepv; // Cella szövegének beállítása
tr2.appendChild(td2_3); // Cella hozzáadása a sorhoz

const td2_4 = document.createElement('td'); // Negyedik cella létrehozása
td2_4.innerHTML = masodik.kepv2; // Cella szövegének beállítása
tr2.appendChild(td2_4); // Cella hozzáadása a sorhoz

// Harmadik sor létrehozása
const tr3 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr3); // Sor hozzáadása a törzshöz

const td3_1 = document.createElement('td'); // Első cella létrehozása
td3_1.innerHTML = harmadik.ter; // Cella szövegének beállítása
tr3.appendChild(td3_1); // Cella hozzáadása a sorhoz

const td3_2 = document.createElement('td'); // Második cella létrehozása
td3_2.innerHTML = harmadik.ido; // Cella szövegének beállítása
tr3.appendChild(td3_2); // Cella hozzáadása a sorhoz

const td3_3 = document.createElement('td'); // Harmadik cella létrehozása
td3_3.innerHTML = harmadik.kepv; // Cella szövegének beállítása
tr3.appendChild(td3_3); // Cella hozzáadása a sorhoz

const td3_4 = document.createElement('td'); // Negyedik cella létrehozása
td3_4.innerHTML = harmadik.kepv2; // Cella szövegének beállítása
tr3.appendChild(td3_4); // Cella hozzáadása a sorhoz

// Negyedik sor létrehozása
const tr4 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr4); // Sor hozzáadása a törzshöz

const td4_1 = document.createElement('td'); // Első cella létrehozása
td4_1.innerHTML = negyedik.ter; // Cella szövegének beállítása
tr4.appendChild(td4_1); // Cella hozzáadása a sorhoz

const td4_2 = document.createElement('td'); // Második cella létrehozása
td4_2.innerHTML = negyedik.ido; // Cella szövegének beállítása
tr4.appendChild(td4_2); // Cella hozzáadása a sorhoz

const td4_3 = document.createElement('td'); // Harmadik cella létrehozása
td4_3.innerHTML = negyedik.kepv; // Cella szövegének beállítása
tr4.appendChild(td4_3); // Cella hozzáadása a sorhoz

const td4_4 = document.createElement('td'); // Negyedik cella létrehozása
td4_4.innerHTML = negyedik.kepv2; // Cella szövegének beállítása
tr4.appendChild(td4_4); // Cella hozzáadása a sorhoz