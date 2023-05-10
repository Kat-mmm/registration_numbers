describe('Registration Numbers Tests', ()=>{
    describe('Adding Registration Numbers', ()=>{
        it('should create a new registration for the town Cape Town(CA)', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('CA 1234');

            assert.equal('CA 1234', regNumbers.getRegNumber());
        })
        it('should create a new registration for the town Paarl(CJ)', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('CJ 123-4');

            assert.equal('CJ 123-4', regNumbers.getRegNumber());
        })

        it('should create a new registration for the town Stellenbosch(CL)', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('CL 12345');

            assert.equal('CL 12345', regNumbers.getRegNumber());
        })
        it('should create a new registration for the town Kuils River(CF)', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('CF 123-456');

            assert.equal('CF 123-456', regNumbers.getRegNumber());
        })
    })
    describe('Should handle errors for invalid registration number inputs', ()=>{
        it('should return and error message if no registration number is inserted', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('');

            assert.equal('Please enter a valid registration number', regNumbers.addRegNumber());
        })
        it('should return and error message if only numbers are provided', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('123-456');

            assert.equal('Please enter a valid registration number', regNumbers.addRegNumber());
        })
        it('should return and error message if only letters are provided', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('CA ');

            assert.equal('Please enter a valid registration number', regNumbers.addRegNumber());
        })
        it('should return and error message if an invalid town is provded', ()=>{
            let regNumbers = new RegistrationNumbers();

            regNumbers.setRegNumber('CU 123-456');

            assert.equal('Please enter a valid registration number', regNumbers.addRegNumber());
        })
    })
})