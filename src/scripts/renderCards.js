import { Api } from "./models/api.js"

export class Render{
    static mainContainer = document.querySelector(".main__container")

    static userId = localStorage.getItem("kenzie@social:id")
    static renderLogin(){
        const sectionLogin = document.createElement("section")
        const divLogin = document.createElement("div")
        const formLogin = document.createElement("form")
        const labelLogin = document.createElement("label")
        const inputEmailLogin = document.createElement("input")
        const inputPasswordLogin = document.createElement("input")
        const buttonLogin = document.createElement("button")
        const divSignUp = document.createElement("div")
        const pSignUp = document.createElement("p")
        const buttonSignUp = document.createElement("button")

        sectionLogin.classList.add("main__container--login")
        divLogin.classList.add("main__div--form")
        formLogin.classList.add("main__container--form")
        labelLogin.classList.add("main__form--label")
        inputEmailLogin.classList.add("main__form--input")
        inputPasswordLogin.classList.add("main__form--input")
        buttonLogin.classList.add("main__form--button")
        divSignUp.classList.add("main__form--div")
        pSignUp.classList.add("main__container--text")
        buttonSignUp.classList.add("main__container--btn")
        
        buttonLogin.type = "submit"
        inputEmailLogin.type = "email"
        inputPasswordLogin.type = "password"
        inputEmailLogin.required = "true"
        inputPasswordLogin.required = "true"
        inputEmailLogin.name = "emailLogin"
        inputPasswordLogin.name = "passwordLogin"
        buttonLogin.id = "btnLogin"
        buttonSignUp.id = "buttonSignup"
        

        labelLogin.innerText = "Login"
        inputEmailLogin.placeholder = "Seu e-mail"
        inputPasswordLogin.placeholder = "Sua Senha"
        buttonLogin.innerText = "Logar"
        pSignUp.innerText = "Ainda não possui cadastro?"
        buttonSignUp.innerText = "Ir para a página do registro"

        this.mainContainer.append(sectionLogin)
        sectionLogin.appendChild(divLogin)
        divLogin.appendChild(formLogin)
        formLogin.append(labelLogin, inputEmailLogin, inputPasswordLogin, buttonLogin, divSignUp)
        divSignUp.append(pSignUp, buttonSignUp)
    }
    static renderSignup(){
        const sectionSignup = document.createElement("section")
        const divSignup = document.createElement("div")
        const formSignup = document.createElement("form")
        const divHeaderSignup = document.createElement("div")
        const labelHeaderSignup = document.createElement("label")
        const buttonHeaderSignup = document.createElement("button")
        const inputNameSignup = document.createElement("input")
        const inputEmailSignup = document.createElement("input")
        const inputPasswordSignup = document.createElement("input")
        const inputJobSignup = document.createElement("input")
        const inputImgSignup = document.createElement("input")
        const buttonSignup = document.createElement("button")
        const divLogin = document.createElement("div")
        const pLogin = document.createElement("p")
        const buttonLogin = document.createElement("button")

        sectionSignup.classList.add("main__container--modal")
        sectionSignup.classList.add("hidden")
        divSignup.classList.add("main__div--form")
        formSignup.classList.add("main__container--form")
        divHeaderSignup.classList.add("main__form--header")
        labelHeaderSignup.classList.add("main__form--label")
        buttonHeaderSignup.classList.add("main__form--btnVoltar")
        inputNameSignup.classList.add("main__form--input")
        inputEmailSignup.classList.add("main__form--input")
        inputPasswordSignup.classList.add("main__form--input")
        inputJobSignup.classList.add("main__form--input")
        inputImgSignup.classList.add("main__form--input")
        buttonSignup.classList.add("main__form--button")
        divLogin.classList.add("main__form--div")
        pLogin.classList.add("main__container--text")
        buttonLogin.classList.add("main__container--btn")

        inputNameSignup.type = "text"
        inputEmailSignup.type = "email"
        inputPasswordSignup.type = "password"
        inputJobSignup.type = "text"
        inputImgSignup.type = "text"
        buttonSignup.type = "submit"
        inputNameSignup.name = "nameSignup"
        inputEmailSignup.name = "emailSignup"
        inputPasswordSignup.name = "passwordSignup"
        inputJobSignup.name = "jobSignup"
        inputImgSignup.name = "imgSignup"
        buttonSignup.id = "btnSignUp"
        buttonLogin.id = "buttonLogin"
        buttonHeaderSignup.id = "btnBack"

        labelHeaderSignup.innerText = "Cadastro"
        buttonHeaderSignup.innerText = "Voltar"

        inputNameSignup.placeholder = "Seu Nome"
        inputEmailSignup.placeholder = "Seu e-mail"
        inputPasswordSignup.placeholder = "Sua Senha"
        inputJobSignup.placeholder = "Qual o seu trabalho?"
        inputImgSignup.placeholder = "URL da imagem de perfil"
        buttonSignup.innerText = "Registrar"

        pLogin.innerText = "Já possui login?"
        buttonLogin.innerText = "Ir para página de login"

        inputNameSignup.required = "true"
        inputEmailSignup.required = "true"
        inputPasswordSignup.required = "true"
        inputJobSignup.required = "true"
        inputImgSignup.required = "true"

        this.mainContainer.appendChild(sectionSignup)
        sectionSignup.appendChild(divSignup)
        divSignup.appendChild(formSignup)
        formSignup.append(divHeaderSignup, inputNameSignup, inputEmailSignup, inputPasswordSignup, inputJobSignup, inputImgSignup, buttonSignup, divLogin)
        divHeaderSignup.append(labelHeaderSignup, buttonHeaderSignup)
        divLogin.append(pLogin, buttonLogin)
    }
    static renderProfile(profile){
        const divProfile = document.querySelector(".main__div--profile")
        const imgProfile = document.createElement("img")
        const nameProfile = document.createElement("h2")
        const jobProfile = document.createElement("p")
        const followersProfile = document.createElement("span")

        imgProfile.classList.add("main__div--img")
        nameProfile.classList.add("main__div--name")
        jobProfile.classList.add("main__div--job")
        followersProfile.classList.add("main__div--followers")

        imgProfile.src = profile.image
        imgProfile.alt = profile.username
        nameProfile.innerText = profile.username
        jobProfile.innerText = profile.work_at
        followersProfile.innerText = profile.followers_amount

        divProfile.append(imgProfile, nameProfile, jobProfile, followersProfile)

    }
    static renderFollowList(list){
        const ulFollowList = document.querySelector(".main__follow--list")
        let random = list.results.sort(() => .5 - Math.random()).slice(0,3)
        random.forEach(element => {
            const liFollow = document.createElement("li")
            const divFollow = document.createElement("div")
            const imgFollow = document.createElement("img")
            const h2Follow = document.createElement("h2")
            const pFollow = document.createElement("p")
            const buttonFollow = document.createElement("button")
            
            liFollow.classList.add("main__follow--item")
            divFollow.classList.add("main__item--container")
            imgFollow.classList.add("main__item--img")
            h2Follow.classList.add("main__item--name")
            pFollow.classList.add("main__item--job")
            buttonFollow.classList.add("main__item--button")

            imgFollow.src = element.image
            imgFollow.alt = element.username
            h2Follow.innerText = element.username
            pFollow.innerText = element.work_at

            if(element.followers.some(element => element.followers_users_id.uuid == Render.userId) == true){
                buttonFollow.innerText = "Seguindo"
                buttonFollow.classList.add("main__item--follow")
            }else{
                buttonFollow.innerText = "Seguir"
            }
            buttonFollow.addEventListener("click", event =>{
                event.preventDefault()
                if(buttonFollow.innerText == "Seguir"){
                    buttonFollow.innerText = "Seguindo"
                    buttonFollow.classList.add("main__item--follow")
                    const data = {
                        "following_users_uuid": element.uuid
                    }
                    Api.usersFollow(data)
                }else{
                    buttonFollow.innerText = "Seguir"
                    buttonFollow.classList.remove("main__item--follow")
                    let object = element.followers.filter((obj)=> {
                        if(obj.followers_users_id.uuid == Render.userId)
                        return obj
                    })
                    const data = object[0].uuid
                    Api.deleteFollow(data)
                    
                }
            })

            ulFollowList.appendChild(liFollow)
            liFollow.append(divFollow, buttonFollow)
            divFollow.append(imgFollow, h2Follow, pFollow)

        });
        return ulFollowList
    }
    static renderPosts(list, page){
        const pages = page
        console.log(pages)
        const postsList = document.querySelector(".main__posts--list")
        postsList.innerText = ""
        const paginaAnterior = document.querySelector(".btnAnterior")
        const paginaProxima = document.querySelector(".btnProxima")
        if(list.previous == null){
            paginaAnterior.classList.add("hidden")}
        if(list.next == null){
            paginaProxima.classList.add("hidden")}


        list.results.forEach(element => {
            const liPostItem = document.createElement("li")
            const divPostItem = document.createElement("div")
            const imgPostItem = document.createElement("img")
            const namePostItem = document.createElement("h2")
            const jobPostItem = document.createElement("p")
            const titlePostItem = document.createElement("h2")
            const contentPostItem = document.createElement("p")
            const divBtnPostItem = document.createElement("div")
            const openPostItem = document.createElement("button")
            const divLikePostItem = document.createElement("div")
            const btnLikePostItem = document.createElement("button")
            const imgLikePostItem = document.createElement("img")
            const spanPostItem = document.createElement("span")

            liPostItem.classList.add("main__posts--item")
            divPostItem.classList.add("main__posts--header")
            imgPostItem.classList.add("main__header--img")
            namePostItem.classList.add("main__header--name")
            jobPostItem.classList.add("main__header--job")
            titlePostItem.classList.add("main__posts--title")
            contentPostItem.classList.add("main__posts--content")
            divBtnPostItem.classList.add("main__post--footer")
            openPostItem.classList.add("main__post--button")
            divLikePostItem.classList.add("main__post--container")
            btnLikePostItem.classList.add("main__post--like")
            spanPostItem.classList.add("main__post--count")
            imgLikePostItem.classList.add("post__like--btn")

            imgPostItem.src = element.author.image
            imgPostItem.alt = element.author.username
            namePostItem.innerText = element.author.username
            jobPostItem.innerText = element.author.work_at
            titlePostItem.innerText = element.title
            contentPostItem.innerText = element.description
            openPostItem.innerText = "Abrir Post"

           
            if(element.likes.some(element => {return element.user.uuid == Render.userId})  == true){
                imgLikePostItem.src = "../img/heartRed.png"
                imgLikePostItem.alt = "Red Heart"
                
            }else{
                imgLikePostItem.src = "../img/heartBlack.png"
                imgLikePostItem.alt = "Black Heart"

            }
            
            btnLikePostItem.addEventListener("click", event => {
                event.preventDefault()
                if(imgLikePostItem.alt == "Red Heart"){
                   imgLikePostItem.src = "../img/heartBlack.png"
                   imgLikePostItem.alt = "Black Heart"

                   let deleteLike = element.likes.filter((obj)=> {
                        if(obj.user.uuid == Render.userId){
                            return obj
                        }
                    })
                    
                    const dataId = deleteLike[0].uuid
                    console.log(deleteLike)
                    Api.deletePost(dataId)
                    Api.listPostsPages(page)


                    spanPostItem.innerText = element.likes.length
                    
                }else{
                    const data = {
                        "post_uuid":element.uuid
                    }

                    Api.likePosts(data)
                    Api.listPostsPages(page)
                    spanPostItem.innerText = element.likes.length
                    imgLikePostItem.alt = "Red Heart"
                    imgLikePostItem.src = "../img/heartRed.png"

                    
                }
            })
 


            
            spanPostItem.innerText = element.likes.length

            openPostItem.addEventListener("click", event => {
                event.preventDefault()
                this.renderModalPost(element)
            })
            postsList.appendChild(liPostItem)
            liPostItem.append(divPostItem, titlePostItem, contentPostItem, divBtnPostItem)
            divPostItem.append(imgPostItem, namePostItem, jobPostItem)
            divBtnPostItem.append(openPostItem, divLikePostItem)
            divLikePostItem.append(btnLikePostItem, spanPostItem)
            btnLikePostItem.appendChild(imgLikePostItem)

        })
        
    }
    static btnPages(list){
        const paginaInicial = document.querySelector(".btnInicial")
        const paginaAnterior = document.querySelector(".btnAnterior")
        const paginaProxima = document.querySelector(".btnProxima")
        const paginaFinal = document.querySelector(".btnFinal")


        const lastPage = list.count -10
        
        if(list.next == null){
            paginaProxima.classList.add("hidden")
        }else{
            const nextPage = list.next.split("/")
            paginaProxima.classList.remove("hidden")
            paginaProxima.addEventListener("click", event => {
                event.preventDefault()
                Api.listPostsPages(nextPage[nextPage.length-1])
            })
        }
        if(list.previous == null){
            paginaAnterior.classList.add("hidden")
        }else{
            const previousPage = list.previous.split("/")
            paginaAnterior.classList.remove("hidden")
            paginaAnterior.addEventListener("click", event => {
                event.preventDefault()
                Api.listPostsPages(previousPage[previousPage.length-1])

            })
        }
        paginaInicial.addEventListener("click", event => {
            event.preventDefault()
            Api.listPosts()
        })
        paginaFinal.addEventListener("click", event => {
            event.preventDefault()
            Api.listLastPages(lastPage)
        })
        // paginaFinal.addEventListener("click", event => {
        //     event.preventDefault()

        // })
    }
    static renderModalPost(obj){
        const main = document.querySelector(".main__container")
        const sectionPost = document.createElement("section")
        const divPost = document.createElement("div")
        const headerPost = document.createElement("div")
        const imgHeaderPost = document.createElement("img")
        const nameHeaderPost = document.createElement("h2")
        const jobHeaderPost = document.createElement("p")
        const closeBtnPost = document.createElement("button")
        const divContentPost = document.createElement("div")
        const titlePost = document.createElement("h2")
        const contentPost = document.createElement("p")

        
        sectionPost.classList.add("main__modal")
        divPost.classList.add("main__modal--div")
        headerPost.classList.add("main__modal--header")
        imgHeaderPost.classList.add("main__modal--img")
        nameHeaderPost.classList.add("main__modal--name")
        jobHeaderPost.classList.add("main__modal--job")
        closeBtnPost.classList.add("main__modal--button")
        divContentPost.classList.add("main__modal--post")
        titlePost.classList.add("main__modal--title")
        contentPost.classList.add("main__modal--content")


        imgHeaderPost.src = obj.author.image
        imgHeaderPost.alt = obj.author.username
        nameHeaderPost.innerText = obj.author.username
        jobHeaderPost.innerText = obj.author.work_at
        closeBtnPost.innerText = "X"
        titlePost.innerText = obj.title
        contentPost.innerText = obj.description

        closeBtnPost.addEventListener("click", event =>{
            event.preventDefault()
            sectionPost.parentNode.removeChild(sectionPost)
        })

        main.append(sectionPost)
        sectionPost.append(divPost)
        divPost.append(headerPost, closeBtnPost, divContentPost)
        headerPost.append(imgHeaderPost, nameHeaderPost, jobHeaderPost)
        divContentPost.append(titlePost, contentPost)

    }
}

