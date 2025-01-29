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
const tr1 = document.createElement('tr');
tbd.appendChild(tr1);

const td1_1 = document.createElement('td');
td1_1.innerHTML = sorok[0].ter;
tr1.appendChild(td1_1);

const td1_2 = document.createElement('td');
td1_2.innerHTML = sorok[0].ido;
tr1.appendChild(td1_2);

const td1_3 = document.createElement('td');
td1_3.innerHTML = sorok[0].kepv;
tr1.appendChild(td1_3);

// Második sor létrehozása
const tr2 = document.createElement('tr');
tbd.appendChild(tr2);

const td2_1 = document.createElement('td');
td2_1.innerHTML = sorok[1].ter;
tr2.appendChild(td2_1);

const td2_2 = document.createElement('td');
td2_2.innerHTML = sorok[1].ido;
tr2.appendChild(td2_2);

const td2_3 = document.createElement('td');
td2_3.innerHTML = sorok[1].kepv;
tr2.appendChild(td2_3);

const td2_4 = document.createElement('td');
td2_4.innerHTML = sorok[1].kepv2;
tr2.appendChild(td2_4);

// Harmadik sor létrehozása
const tr3 = document.createElement('tr');
tbd.appendChild(tr3);

const td3_1 = document.createElement('td');
td3_1.innerHTML = sorok[2].ter;
tr3.appendChild(td3_1);

const td3_2 = document.createElement('td');
td3_2.innerHTML = sorok[2].ido;
tr3.appendChild(td3_2);

const td3_3 = document.createElement('td');
td3_3.innerHTML = sorok[2].kepv;
tr3.appendChild(td3_3);

const td3_4 = document.createElement('td');
td3_4.innerHTML = sorok[2].kepv2;
tr3.appendChild(td3_4);

// Negyedik sor létrehozása
const tr4 = document.createElement('tr');
tbd.appendChild(tr4);

const td4_1 = document.createElement('td');
td4_1.innerHTML = sorok[3].ter;
tr4.appendChild(td4_1);

const td4_2 = document.createElement('td');
td4_2.innerHTML = sorok[3].ido;
tr4.appendChild(td4_2);

const td4_3 = document.createElement('td');
td4_3.innerHTML = sorok[3].kepv;
tr4.appendChild(td4_3);

const td4_4 = document.createElement('td');
td4_4.innerHTML = sorok[3].kepv2;
tr4.appendChild(td4_4);
