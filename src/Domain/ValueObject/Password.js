export default class Password {
    constructor(password) {
        if (password.lenght === 0) {
            throw new Error('Password cannot be empty');
        }
        if (password.lenght < 8){
            throw new Error('Password must be at least 8 characters');
        }
        let regex = new RegExp(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?|\-=\/~]+$/)
    
        if (!regex.test(password)){
            throw new Error('Password must contain at least one number and one uppercase letter');
        }
    }
}

let p = new Password("qas$")