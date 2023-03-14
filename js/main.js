/* Milestone 1
    Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
    Milestone 2
    Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
    Milestone 3
    Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
    BONUS
    1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
    2- popolare le options della select della milestone 3 dinamicamente.
*/

const listIconDom = document.getElementById('list-icon');
const typeDom = document.getElementById('type');

// bonus 1
data.forEach(element => {
    element.color = generateRandomColor();
});


//bonus 2
const typeList = [];
data.forEach(element => {
    if (!typeList.includes(element.type)) {
        typeList.push(element.type);
    }
});
console.log(typeList);

typeDom.innerHTML = `<option value="">Tutti</option>`;



typeList.forEach(element => {

    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', element);
    optionElement.innerText = element;
    typeDom.append(optionElement);

});



printIcons(data, listIconDom);

function printIcons(icons, container) {

    container.innerHTML = ""; //reset del contenuto

    /*for (let i = 0; i < icons.length; i++) {
        let element = icons[i];

        container.innerHTML +=    `<div class="icon">
            <i style="color: ${element.color};" class="fa-solid ${element.prefix}${element.name}"></i>
            <div class="icon-name">${element.name}</div>
        </div>`;
    }*/

    icons.forEach(element => {
        container.innerHTML +=    `<div class="icon">
                                        <i style="color: ${element.color};" class="fa-solid ${element.prefix}${element.name}"></i>
                                        <div class="icon-name">${element.name}</div>
                                    </div>`;
    });

}


typeDom.addEventListener('change', function() {

    const selected = this.value;

    if (selected == "") {
        printIcons(data, listIconDom);
    } else {
        const filtered = data.filter(element => {
            if (selected == element.type) {
                return true;
            } else {
                return false;
            }
        });
        printIcons(filtered, listIconDom);
    }

});



function generateRandomColor() {

    let randomColor = "#";
    const listValue = "0123456789ABCDEF";

    for (let i = 0; i<6; i++) {
        const maxIndex = listValue.length - 1;
        const randomNumber = generateRandomNumber(0, maxIndex);
        randomColor += listValue[randomNumber];
    }

    return randomColor;

}


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}