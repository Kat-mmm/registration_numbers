function RegistrationNumbers(){
    let regNumbers = [];
    let theRegNumber = '';
    let selectedTown = '';

    function setRegNumber(regNumber){
        theRegNumber = regNumber;
    }

    function getRegNumber(){
        return theRegNumber;
    }

    function addRegNumber(){
        if(theRegNumber !== '' && validateRegNo(theRegNumber)){
            regNumbers.push(theRegNumber);
        }
        else{
            return 'Please enter a valid registration number';
        }
    }

    function validateRegNo(regNo) {
        const regex = /^(CA|CF|CL|CJ)\s\d{3}(-?\d{1,3})$/i;
    
        return regex.test(regNo);
    }

    function setTown(selectedTown1){
        selectedTown = selectedTown1;
    }

    function allFromTown(city) {
        var newArr = [];
      
        for (var i = 0; i < regNumbers.length; i++) {
          let reg = regNumbers[i].toUpperCase();
          if(reg.startsWith(city.toUpperCase())){
              newArr.push(reg);
          }
        }
      
        return newArr;
    }

    function filterRegNumbers(regNumbers) {
        if(selectedTown === 'Cape Town') {
            let capeRegs = allFromTown('CA');
            
            return capeRegs;
        }
        else if(selectedTown === 'Paarl'){
            let paarlRegs = allFromTown('CJ');
            
            return paarlRegs;
        }
        else if(selectedTown === 'Kuils River'){
            let KuilsRegs = allFromTown('CF');
            
            return KuilsRegs;
        }
        else if(selectedTown === 'Stellenbosch'){
            let stellRegs = allFromTown('CL');
            
            return stellRegs;
        }
        else{
            return regNumbers
        }
    }

    return {
        setRegNumber,
        getRegNumber,
        setTown,
        addRegNumber,
        allFromTown,
        filterRegNumbers
    }
}