const ter = "Fizika területe"; // Létrehozunk egy változót a "Fizika területe"-nek
const ido = "Időszak"; // Létrehozunk egy változót az "Időszak"-nak
const kepv = "Képviselők"; // Létrehozunk egy változót a "Képviselők"-nek
const ter1 = "Optika"; // Létrehozunk egy változót az "Optika"-nak
const ido1 = "XI. század"; // Létrehozunk egy változót a "XI. század"-nak
const kepv1 = "Alhazen"; // Létrehozunk egy változót az "Alhazen"-nek
const ter2 = "Asztronómia"; // Létrehozunk egy változót az "Asztronómia"-nek
const ido2 = "Reneszánsz"; // Létrehozunk egy változót a "Reneszánsz"-nak
const kepv2 = "Kepler"; // Létrehozunk egy változót a "Kepler"-nek
const kepv3 = "Galilei"; // Létrehozunk egy változót a "Galilei"-nek
const ter3 = "Kvantumfizika"; // Létrehozunk egy változót a "Kvantumfizika"-nak
const ido3 = "XIX-XX. század"; // Létrehozunk egy változót a "XIX-XX. század"-nak
const kepv4 = "Max Planck"; // Létrehozunk egy változót a "Max Planck"-nek
const kepv5 = "Albert Einstein"; // Létrehozunk egy változót az "Albert Einstein"-nek
const ter4 = "Modern fizika"; // Létrehozunk egy változót a "Modern fizika"-nak
const ido4 = "XX-XXI. század"; // Létrehozunk egy változót a "XX-XXI. század"-nak
const kepv6 = "Richard Feynman"; // Létrehozunk egy változót a "Richard Feynman"-nek
const kepv7 = "Stephen Hawking"; // Létrehozunk egy változót a "Stephen Hawking"-nak

const tbl = document.createElement('table'); // Táblázat létrehozása
document.body.appendChild(tbl); // Táblázat hozzáadása a body-hoz

const thd = document.createElement('thead'); // Fejléc létrehozása
tbl.appendChild(thd); // Fejléc hozzáadása a táblázathoz

const thr = document.createElement('tr'); // Sor létrehozása a fejlécben
thd.appendChild(thr); // Sor hozzáadása a fejléchez

const th1 = document.createElement('th'); // Első fejléc cella létrehozása
th1.innerHTML = ter; // Cella szövegének beállítása
thr.appendChild(th1); // Cella hozzáadása a fejlécsorhoz

const th2 = document.createElement('th'); // Második fejléc cella létrehozása
th2.innerHTML = ido; // Cella szövegének beállítása
thr.appendChild(th2); // Cella hozzáadása a fejlécsorhoz

const th3 = document.createElement('th'); // Harmadik fejléc cella létrehozása
th3.colSpan = 2; // Oszlopok egyesítése
th3.innerHTML = kepv; // Cella szövegének beállítása
thr.appendChild(th3); // Cella hozzáadása a fejlécsorhoz

const tbd = document.createElement('tbody'); // Törzs létrehozása
tbl.appendChild(tbd); // Törzs hozzáadása a táblázathoz

// Első sor létrehozása
const tr1 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr1); // Sor hozzáadása a törzshöz

const td1_1 = document.createElement('td'); // Első cella létrehozása
td1_1.innerHTML = ter1; // Cella szövegének beállítása
tr1.appendChild(td1_1); // Cella hozzáadása a sorhoz

const td1_2 = document.createElement('td'); // Második cella létrehozása
td1_2.innerHTML = ido1; // Cella szövegének beállítása
tr1.appendChild(td1_2); // Cella hozzáadása a sorhoz

const td1_3 = document.createElement('td'); // Harmadik cella létrehozása
td1_3.colSpan = 2; // Oszlopok egyesítése
td1_3.innerHTML = kepv1; // Cella szövegének beállítása
tr1.appendChild(td1_3); // Cella hozzáadása a sorhoz

// Második sor létrehozása
const tr2 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr2); // Sor hozzáadása a törzshöz

const td2_1 = document.createElement('td'); // Első cella létrehozása
td2_1.innerHTML = ter2; // Cella szövegének beállítása
tr2.appendChild(td2_1); // Cella hozzáadása a sorhoz

const td2_2 = document.createElement('td'); // Második cella létrehozása
td2_2.innerHTML = ido2; // Cella szövegének beállítása
tr2.appendChild(td2_2); // Cella hozzáadása a sorhoz

const td2_3 = document.createElement('td'); // Harmadik cella létrehozása
td2_3.innerHTML = kepv2; // Cella szövegének beállítása
tr2.appendChild(td2_3); // Cella hozzáadása a sorhoz

const td2_4 = document.createElement('td'); // Negyedik cella létrehozása
td2_4.innerHTML = kepv3; // Cella szövegének beállítása
tr2.appendChild(td2_4); // Cella hozzáadása a sorhoz

// Harmadik sor létrehozása
const tr3 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr3); // Sor hozzáadása a törzshöz

const td3_1 = document.createElement('td'); // Első cella létrehozása
td3_1.innerHTML = ter3; // Cella szövegének beállítása
tr3.appendChild(td3_1); // Cella hozzáadása a sorhoz

const td3_2 = document.createElement('td'); // Második cella létrehozása
td3_2.innerHTML = ido3; // Cella szövegének beállítása
tr3.appendChild(td3_2); // Cella hozzáadása a sorhoz

const td3_3 = document.createElement('td'); // Harmadik cella létrehozása
td3_3.innerHTML = kepv4; // Cella szövegének beállítása
tr3.appendChild(td3_3); // Cella hozzáadása a sorhoz

const td3_4 = document.createElement('td'); // Negyedik cella létrehozása
td3_4.innerHTML = kepv5; // Cella szövegének beállítása
tr3.appendChild(td3_4); // Cella hozzáadása a sorhoz

// Negyedik sor létrehozása
const tr4 = document.createElement('tr'); // Sor létrehozása
tbd.appendChild(tr4); // Sor hozzáadása a törzshöz

const td4_1 = document.createElement('td'); // Első cella létrehozása
td4_1.innerHTML = ter4; // Cella szövegének beállítása
tr4.appendChild(td4_1); // Cella hozzáadása a sorhoz

const td4_2 = document.createElement('td'); // Második cella létrehozása
td4_2.innerHTML = ido4; // Cella szövegének beállítása
tr4.appendChild(td4_2); // Cella hozzáadása a sorhoz

const td4_3 = document.createElement('td'); // Harmadik cella létrehozása
td4_3.innerHTML = kepv6; // Cella szövegének beállítása
tr4.appendChild(td4_3); // Cella hozzáadása a sorhoz

const td4_4 = document.createElement('td'); // Negyedik cella létrehozása
td4_4.innerHTML = kepv7; // Cella szövegének beállítása
tr4.appendChild(td4_4); // Cella hozzáadása a sorhoz