'use strict'

let contener = document.getElementById('contener');

let foodForm = document.getElementById('myForm');

let imgFood = ['burger.jpg','pizza.jpg','shawarma.jpg']
let loveFood = [];
function Food(custmerName, type, price, photo) {

    this.custmerName = custmerName;
    this.type = type;
    this.price = price;
    this.photo = 'img/'+photo;
    loveFood.push(this);
    sittingItem


}


let tableEl = document.createElement('table');
contener.appendChild(tableEl);
let thead = document.createElement('thead');
tableEl.appendChild(thead);
let trTable = document.createElement('tr');
thead.appendChild(trTable);
let thEl = document.createElement('th');
trTable.appendChild(thEl);
thEl.textContent = 'Order Imge';

let thEl1 = document.createElement('th');
trTable.appendChild(thEl1);
thEl1.textContent = 'Order Detalis'

let tbody = document.createElement('tbody');
tableEl.appendChild(tbody)


function render() {
    tbody.textContent = '';
    for (let index = 0; index < loveFood.length; index++) {

        
        let trEl = document.createElement('tr');
        tbody.appendChild(trEl);

        let tdEl = document.createElement('td') ;
        trEl.appendChild(tdEl);

        let tdElP = document.createElement('img');
        tdEl.appendChild(tdElP);
        tdElP.setAttribute('src', loveFood[index].img);


        let tdEl2 = document.createElement('td') ;
        trEl.appendChild(tdEl2);

        let pEl = document.createElement('p');
        tdEl2.appendChild(pEl);
        pEl.textContent = `User Name is : ${loveFood[index].custmerName}`;

        let pEl1 = document.createElement('p');
        tdEl2.appendChild(pEl1);
        pEl1.textContent = `Food type  : ${loveFood[index].type}`;

        let pEl2 = document.createElement('p');
        tdEl2.appendChild(pEl2);
        pEl2.textContent = `Food price  : ${loveFood[index].price}` ;

       

        


    }



}

function handelSubmit(event) {

    event.preventDefault();
    let custmer = event.target.custmerName.value;
    let type = event.target.foodTybe.value;
    let price = priceRandome(1, 50);
    let img = imgRandom(type);


    new Food(custmer, type, price, img);
    render();
    // console.log(price);
    console.log(loveFood)


}

function sittingItem () {
    let foodData = JSON.stringify(loveFood) ;
    localStorage.setItem ('data' ,foodData)
}

function gittingItem (){
 
    let stringFood = localStorage.getItem('data') ;
    let normalObj = JSON.parse(stringFood) ;

    if (stringFood!=null){

        loveFood= normalObj
    }
    render();
}
function imgRandom(value) {

    if (value === 'shawerma') {
        return 'shawarma.jpg'
    } else if (value === 'burger') {
        return 'burger.jpg'
    } else if (value === 'pitza') {
        return 'pizza.jpg'
    }

}
function priceRandome(min, max) {
    return Math.random() * (max - min) + min;
}
gittingItem ();
foodForm.addEventListener('submit',handelSubmit)