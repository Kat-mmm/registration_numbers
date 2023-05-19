document.addEventListener('DOMContentLoaded', ()=>{
    const addButton = document.querySelector('.add-btn2');
    const clearButton = document.querySelector('.clear-btn2');
    const filterButton = document.querySelector('.filter-btn2');

    let regInputEl = document.querySelector('.reg-input2');
    let errorElement = document.querySelector('.error2');
    let towns = document.getElementById('town2');
    let registrationContainer = document.querySelector('.plates2')

    let factoryFunction = new RegistrationNumbers();

    let registrationNumbersList = JSON.parse(localStorage.getItem('regNumbers2')) || [];

    let data = {
        regNumbers: registrationNumbersList
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

    function addRegNumber(){
        if(regInputEl.value !== '' && validateRegNo(regInputEl.value) && !registrationNumbersList.includes(regInputEl.value)){
            registrationNumbersList.push(regInputEl.value);

            localStorage.setItem('regNumbers2', JSON.stringify(registrationNumbersList));

            location.reload();
        }
        else{
            errorElement.innerHTML = factoryFunction.error();
            errorElement.style.display = 'block'; 
            setTimeout(() =>{
                errorElement.style.display = 'none';
            }, 1500)
        }
    }

    function filterRegistrationNumbers(){
        registrationContainer.innerHTML = '';
        let town = towns.value;

        if(town === 'Cape Town'){
            let capeTownRegs = allFromTown(registrationNumbersList, 'CA');
            console.log(capeTownRegs)

            data.regNumbers = capeTownRegs;
        }
        else if(town === 'Kuils River'){
            let KuilsRiverRegs = allFromTown(registrationNumbersList, 'CF');

            data.regNumbers = KuilsRiverRegs;
        }
        else if(town === 'Paarl'){
            let PaarlRegs = allFromTown(registrationNumbersList, 'CJ');

            data.regNumbers = PaarlRegs;

        }
        else if(town === 'Stellenbosch'){
            let StellenboschRegs = allFromTown(registrationNumbersList, 'CL');

            data.regNumbers = StellenboschRegs;
        }
        else{
            data.regNumbers = registrationNumbersList;
        }

        let templateSource = document.querySelector('.regTemplate').innerHTML;
        let template = Handlebars.compile(templateSource);
        let filledTemplate = template(data);
        registrationContainer.innerHTML = filledTemplate;
    }

    function clearRegNumber(){
        localStorage.removeItem('regNumbers2')
        location.reload();
    }

    let templateSource = document.querySelector('.regTemplate').innerHTML;
    let template = Handlebars.compile(templateSource);
    let filledTemplate = template(data);
    registrationContainer.innerHTML = filledTemplate;

    addButton.addEventListener('click', addRegNumber);
    clearButton.addEventListener('click', clearRegNumber);
    filterButton.addEventListener('click', filterRegistrationNumbers);
})