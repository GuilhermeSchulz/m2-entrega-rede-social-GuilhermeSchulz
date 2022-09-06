import { Api } from "./models/api.js"
import { Render } from "./renderCards.js"

let userId = localStorage.getItem("kenzie@social:id")
if(!localStorage.getItem("kenzie@social:token")){
    window.location.replace("/index.html")
}
Api.specificUser(userId)
Api.getUsers()
Api.listPosts()



class dashBoardFunctions {
    static async createPost(){
        const inputTitle = document.getElementsByName("TituloForm")[0].value
        const inputContent = document.getElementsByName("postForm")[0].value

        const dataPost = {
            "title": inputTitle,
            "description": inputContent
        }
        await Api.createPost(dataPost)
    }

}


const btnSair = document.querySelector(".header__divBtn--button")
btnSair.addEventListener("click", event =>{
    event.preventDefault()
    localStorage.clear()
    window.location.replace("../../index.html")
})

const btnPost = document.getElementsByName("btnPostForm")[0]

btnPost.addEventListener("click", event =>{
    event.preventDefault()

    dashBoardFunctions.createPost()
})
Render.btnPages
