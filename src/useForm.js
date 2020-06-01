import {useState, useEffect} from "react"
import validate from './Validations/validateForm'

function useForm(){
    const [formData, setFormData] = useState({phone:"", email:"",password:""})
    const [errorData, setErrorData] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    
    function handleChange(event){
        const {name,value} = event.target
        setFormData(prevFormData=>({...prevFormData,[name]:value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        setErrorData(validate(formData))
        setIsSubmit(true)
    }


    useEffect(()=>{
        if(isSubmit && errorData.phone === "" && errorData.email === "" && errorData.password === "") alert("submitted succesfully")
    },[errorData,isSubmit])


    return {formData,errorData,handleChange,handleSubmit}
}

export default useForm