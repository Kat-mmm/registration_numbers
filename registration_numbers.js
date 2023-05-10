let regNumberEl = document.querySelector('.reg-input');
const addBtn = document.querySelector('.add-btn');
const filterBtn = document.querySelector('.filter-btn');
const clearBtn = document.querySelector('.clear-btn');
let regContainer = document.querySelector('.plates');
let town = document.getElementById('town');
let errorEl = document.querySelector('.error');

let allRegNumbers1 = JSON.parse(localStorage.getItem('allRegNumbers')) || [];

filter(allRegNumbers1);

function filter(arr){
    arr.forEach(reg => {
        let regEl = document.createElement('div');
        regEl.className = 'item';
        regEl.innerHTML = reg.toString().toUpperCase();
        regContainer.appendChild(regEl);
    });
}

function validateRegNo(regNo) {
    const regex = /^(CA|CF|CL|CJ)\s\d{3}(-?\d{1,3})$/i;

    return regex.test(regNo);
}
  

function allFromTown(allRegNumbers, city) {
    var newArr = [];
  
    for (var i = 0; i < allRegNumbers.length; i++) {
      let reg = allRegNumbers[i].toUpperCase();
      if(reg.startsWith(city.toUpperCase())){
          newArr.push(reg);
      }
    }
  
    return newArr;
}
  

function regNumber(){
    let regEl = document.createElement('div');
    regEl.className = 'item';

    if(regNumberEl.value !== '' && validateRegNo(regNumberEl.value) && !allRegNumbers1.includes(regNumberEl.value)){
        allRegNumbers1.push(regNumberEl.value);

        localStorage.setItem('allRegNumbers', JSON.stringify(allRegNumbers1));
        
        allRegNumbers1.forEach(reg =>{
            regEl.innerHTML = reg.toString().toUpperCase();
            regContainer.appendChild(regEl);
        })
    }
    else{
        errorEl.innerHTML = 'Please enter a valid unique registration number';
        errorEl.style.display = 'block';
        setTimeout(() =>{
            errorEl.style.display = 'none';
        }, 1500)
    }

    regNumberEl.value = '';
}

function filterRegNumbers() {
    regContainer.innerHTML = '';
    let selectedTown = town.value;

    if(selectedTown === 'Cape Town') {
      let capeRegs = allFromTown(allRegNumbers1, 'CA');

      filter(capeRegs);
    }
    else if(selectedTown === 'Paarl'){
        let paarlRegs = allFromTown(allRegNumbers1, 'CJ');

        filter(paarlRegs);
    }
    else if(selectedTown === 'Kuils River'){
        let georgeRegs = allFromTown(allRegNumbers1, 'CF');

        filter(georgeRegs);
    }
    else if(selectedTown === 'Stellenbosch'){
        let stellRegs = allFromTown(allRegNumbers1, 'CL');

        filter(stellRegs);
    }
    else{
        filter(allRegNumbers1)
    }
}

function clear(){
    localStorage.clear();
    location.reload();
}
  

addBtn.addEventListener('click', regNumber);
filterBtn.addEventListener('click', filterRegNumbers);
clearBtn.addEventListener('click', clear);