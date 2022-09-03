import { Api } from "./models/api.js";
import { Render } from "./renderCards.js";

Render.renderLogin()
Render.renderSignup()


class Forms {
    static async signUp(){
        const nameSignup = document.getElementsByName("nameSignup")[0].value
        const emailSignup = document.getElementsByName("emailSignup")[0].value
        const passwordSignup = document.getElementsByName("passwordSignup")[0].value
        const jobSignup = document.getElementsByName("jobSignup")[0].value
        const imgSignup = document.getElementsByName("imgSignup")[0].value
        let signUpData = {
            "username": nameSignup,
            "email": emailSignup,
            "password": passwordSignup,
            "work_at": jobSignup,
            "image": imgSignup
        }
        await Api.signUp(signUpData)
    }
    static async login(){
        const emailLogin = document.getElementsByName("emailLogin")[0].value
        const senhaLogin = document.getElementsByName("passwordLogin")[0].value
        let loginData = {
            "email": emailLogin,
            "password": senhaLogin,
        }
        await Api.login(loginData)
    }
}

const modalSignup = document.querySelector(".main__container--modal")
const btnSignUp = document.getElementById("btnSignUp")
btnSignUp.addEventListener("click", event => {
    event.preventDefault()
    Forms.signUp()
})
const buttonReturnLogin = document.getElementById("buttonLogin")
buttonReturnLogin.addEventListener("click", event =>{
    event.preventDefault()
    modalSignup.classList.add("hidden")
    changeBtn()
})
const backBtn = document.getElementById("btnBack")
backBtn.addEventListener("click", event =>{
    event.preventDefault()
    modalSignup.classList.add("hidden")
    changeBtn()
})


const btnLogin = document.getElementById("btnLogin")
btnLogin.addEventListener("click", event =>{
    event.preventDefault()
    Forms.login()
})
const btnSignupNow = document.getElementById("buttonSignup")
btnSignupNow.addEventListener("click", event => {
    event.preventDefault()
    modalSignup.classList.remove("hidden")
    changeBtn()
})

const headerLogin = document.getElementById("headerLogin")
const headerSignup = document.getElementById("headerSignup")

headerLogin.addEventListener("click", event =>{
    event.preventDefault()
    modalSignup.classList.add("hidden")
    changeBtn()
})

headerSignup.addEventListener("click", event =>{
    event.preventDefault()
    modalSignup.classList.remove("hidden")
    changeBtn()
})



function changeBtn(){
    if(modalSignup.classList.contains("hidden") == false){
        headerLogin.classList.remove("header__button--active")
        headerSignup.classList.remove("header__divBtn--button")
        headerLogin.classList.add("header__divBtn--button")
        headerSignup.classList.add("header__button--active")
    }
    else{
        headerLogin.classList.add("header__button--active")
        headerSignup.classList.add("header__divBtn--button")
        headerLogin.classList.remove("header__divBtn--button")
        headerSignup.classList.remove("header__button--active")
    }
    return (headerLogin, headerSignup)
}
