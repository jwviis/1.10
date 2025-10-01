const tablica = [];   //tworzy zmienna o nazwie tablica i przypisuje pusta liniw
const obiekt = {}; // tworzy zmienna obiekt 
const ciagZnakow = "hfgjdf"; //tworzy zmienna tekstowa i zapisuje ten tekst 
const numeryczny1 = 1; //tworzy zmienna i zapisuje liczbe calkowita 1
const numeryczny2 = 1.2; //tworzy zmienan i zapisuje liczbe 1.2.
const logiczny = true; // zmienna z wartoscia prawda 
const nic = null; // zmienna ktora instnieje ale jest pusta 
let niezdefiniowany; // istniee zmienna do ktorej nic sie nie wlozylo 
const nodeElement = document.createElement('div');
const nodeText = document.createTextNode('Hello, World!');
nodeElement.appendChild(nodeText);
document.body.appendChild(nodeElement);



const variables = [ // duza lista w ktorej zapisuje informacje o kazdym pudelku jak sie nazywa co w nim jest jakiego typu jest 
    { name: "tablica", value: tablica, type: Array.isArray(tablica) ? "Array" : typeof tablica }, //  jest pudelko o nazwie tablica w srodku [] a jego typ to array 
    { name: "obiekt", value: obiekt, type: typeof obiekt }, 
    { name: "ciagZnakow", value: ciagZnakow, type: typeof ciagZnakow },
    { name: "numeryczny1", value: numeryczny1, type: typeof numeryczny1 },
    { name: "numeryczny2", value: numeryczny2, type: typeof numeryczny2 },
    { name: "logiczny", value: logiczny, type: typeof logiczny },
    { name: "nic", value: nic, type: "null" },
    { name: "niezdefiniowany", value: niezdefiniowany, type: typeof niezdefiniowany },
    { name: "nodeElement", value: "<div>Hello, World!</div>", type: "HTMLElement" }
];




const table = document.getElementById("variablesTable");

variables.forEach(v => {
    const row = document.createElement("tr"); //tworzy nowy wiersz

    const cellName = document.createElement("td"); // dodaje kolumny nazwa zmiennej wartosc typ
    cellName.textContent = v.name;
    row.appendChild(cellName);

    const cellValue = document.createElement("td");
    cellValue.textContent = v.value;
    row.appendChild(cellValue);

    const cellType = document.createElement("td");
    cellType.textContent = v.type;
    row.appendChild(cellType);

    table.appendChild(row);
});
