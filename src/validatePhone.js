function validatePhone(number) {
    let spaceIndex = 0
    if (number[0] === '+') {
        for(let i = 1; i < number.length; i++){
            if (number[i] === " ") spaceIndex = i
        }
        if(spaceIndex === 0 ) return "Please add a space between your country code and your phone number"
        else{
            if (number.length - spaceIndex - 1 !== 10) {
                return "Phone number should have 10 digits"
            }
            else if (number.charAt(spaceIndex + 1) !== '2' && number.charAt(spaceIndex + 1) !== '6') {
                return "First digit of the phone number should be 2 or 6"
            }
        }
    }
    else {
        if (number.length !== 10) {
            return "Phone number should have 10 digits"
        }
        else if (number.charAt(0) !== '2' && number.charAt(0) !== '6') {
            return "First digit of the phone number should be 2 or 6"
        }
        else return ""
    }

}

export default validatePhone