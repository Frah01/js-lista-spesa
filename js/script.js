const lista= [
    'Latte',
    'Zucchero',
    'Cioccolato',
    'Coca-cola',
    'Sale',
    'Olio',
    'Pane',
    'Salumi',
    'Biscotti'
]
const content= document.getElementById('content')
let i = 0
let = element= ""

while(i<lista.length){
    let items = lista[i]
    
    element += `<li class="list-item">${items}</li>`;
    content.innerHTML= element;

    i++
}
