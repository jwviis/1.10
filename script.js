const tablica = [];
const obiekt = {};
const ciagZnakow = "hfgjdf";
const numeryczny1 = 1;
const numeryczny2 = 1.2;
const logiczny = true;
const nic = null;
let niezdefiniowany;
const nodeElement = document.createElement('div');
const nodeText = document.createTextNode('Hello, World!');
nodeElement.appendChild(nodeText);
document.body.appendChild(nodeElement);



const variables = [
    { name: "tablica", value: tablica, type: Array.isArray(tablica) ? "Array" : typeof tablica },
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
    const row = document.createElement("tr");

    const cellName = document.createElement("td");
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
