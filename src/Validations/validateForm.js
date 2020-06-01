import validatePassword from "./validatePassword"
import validatePhone from "./validatePhone"

function validate(formData) {
    let errors = {}

    // ***phone errors***

    if (!formData.phone) {
        errors.phone = "Phone number is required"
    }
    else {
        errors.phone = validatePhone(formData.phone)
    }

    // ***email errors***

    if (!formData.email) {
        errors.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Please give a valid email"
    }
    else {
        errors.email = ""
    }

    // ***password errors***

    if (!formData.password) {
        errors.password = "Password is required"
    }
    else if (formData.password.length < 9) {
        errors.password = "Password needs to be more than 8 characters"
    }
    else {
        errors.password = validatePassword(formData.password)
    }

    return errors
}

export default validate