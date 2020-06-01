const number = (password) => {
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            return "0"
        }
    }
    return "Password should contain a number"
}

const lowerCase = (password) => {
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toLowerCase() && password[i] !== password[i].toUpperCase()) {
            return "1"
        }
    }
    return "Password should contain at least a lowercase letter"
}

const upperCase = (password) => {
    for (let i = 0; i < password.length; i++) {
        if (password[i] !== password[i].toLowerCase() && password[i] === password[i].toUpperCase()) {
            return "2"
        }
    }
    return "Password should contain at least an uppercase letter"
}

const specialChar = (password) => {
    // eslint-disable-next-line
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if (format.test(password)) {
        return "3"
    }
    else return "Password should contain at least one symbol"
}

function validatePassword(password) {
    let string = number(password)
    if (string === "0") {
        string = lowerCase(password)
    }
    if (string === "1" || string === "0") {
        string = upperCase(password)
    }
    if (string === "2" || string === "1" || string === "0")
        string = specialChar(password)

    if (string === "0" || string === "1" || string === "2" || string === "3") return ""
    else return string

}

export default validatePassword