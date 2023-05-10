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

    return {
        setRegNumber,
        getRegNumber,
        setTown,
        addRegNumber
    }
}