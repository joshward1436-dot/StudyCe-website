const form= document.getElementById('form')
const Name_input= document.getElementById('Name-input')
const Email_input= document.getElementById('Email-input')
const Password_input= document.getElementById('Password-input')
const Repeat_Password_input= document.getElementById('Repeat-Password-input')
const error_message = document.getElementById(error-message)
form.addEventListener('submit', (e) => {

    let errors = []

    if(Name_input){
        // If we have name then we are in the signup
        errors = getsignupFormerrors(Name_input.value, Email_input.value, Password_input.value, Repeat_Password_input.value)
    }
    else{
        // if we dont have a Name then we are in the login
        errors = getloginFormerrors(Email_input.value, Password_input.value)
    }

    if(errors.length > 0){
        // if there are any errors
        e.preventDefault()
        error_message.innerText = error.join(". ")
    }
})

function getsignupFormerrors(Name, Email, Password, RepeatPassword){
    let errors = []

    if(Name ==='' || Name == null){
        errors.push('Name is Required')
        Name_input.parentElement.classList.add('incorrect')
    }
    if(Email ==='' || Email == null){
        errors.push('Email is Required')
        Email_input.parentElement.classList.add('incorrect')
    }
    if(Password ==='' || Password == null){
        errors.push('Password is Required')
        Password_input.parentElement.classList.add('incorrect')
    }
    if(Password.length < 8){
        errors.push('Password must have at least 8 characters')
        Password_input.parentElement.classList.add('incorrect')
    }
    if(Password !== RepeatPassword){
        errors.push('Password does not match repeated Password')
        Password_input.parentElement.classList.add('incorrect')
        Repeat_Password_input.parentElement.classList.add('incorrect')
    }

    return errors;    
}
const allinputs = [Name_input, Email_input, Password_input, Repeat_Password_input]
allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
          input.parentElement.classList.remove('incorrect')
          error_message.innerText = ''  
        }
    })
})