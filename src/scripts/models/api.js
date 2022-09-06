import { instance, instanceWithToken } from "../axios.js"
import { Render } from "../renderCards.js";
import { Toast } from "../toast.js";

export class Api {
    
    static async signUp(data){
        const signUp = await instance
        .post("users/", data)
        .then(response => {
            Toast.create("Cadastro realizado!", "#4263EB")
            setTimeout(() => {
                const modalCadastro = document.querySelector("main__container--modal")
                modalCadastro.classList.add("hidden")
            }, 2000)
            console.log(response)
        })
        .catch(error =>{
            Toast.create(error.message, "#D7443E")
            console.log(error)
        })
        return signUp
    }

    static async login(data){
        const login = await instance
        .post("users/login/", data)
        .then(response => {
            console.log()
            localStorage.setItem("kenzie@social:token", response.data.token)
            localStorage.setItem("kenzie@social:id", response.data.user_uuid)
            Toast.create("Logado com sucesso!", "#4263EB")
                setTimeout(() => {
                    window.location.replace("/src/pages/dashboard.html")
                }, 2000)

            console.log(response)
        })
        .catch(error =>{
            Toast.create(error.message, "#D7443E")
            console.log(error)
        })
        return signUp
    }
    
    static async getUsers(){
        const getUser = await instanceWithToken
        .get(`users/?limit=10&offset=100&?page=${parseInt(Math.random() * 100)}/`,)
        .then(response => {
           
            Render.renderFollowList(response.data)


        })
        .catch(error =>{
            console.log(error)
        })
        return getUser
    }

    static async specificUser(userID){
        const getUser = await instanceWithToken
        .get(`users/${userID}/`)
        .then(response => {

             Render.renderProfile(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        return getUser
    }

    static async createPost(data){
        const createPost = await instanceWithToken
        .post(`posts/`, data)
        .then(response => {response

            Toast.create("Criado o post", "#4263EB")})
        .catch(error => {
            Toast.create(error.message, "#D7443E")
            console.log(error)
        })
        return createPost
    }

    //${Math.floor(Math.random() * 600) + 1}
    static async listPosts(){
        const listPosts = await instanceWithToken
        .get(`posts/?limit=10&offset=0`)
        .then(response => {
            Render.renderPosts(response.data, "?limit=10&offset=0")
            Render.btnPages(response.data)
        })
        .catch(error =>{
            Toast.create(error.message, "#D7443E")
            console.log(error)
        })
        return listPosts
    }
    static async listPostsPages(page){
        const listPosts = await instanceWithToken
        .get(`posts/${page}`)
        .then(response => {
            Render.renderPosts(response.data, page)
            Render.btnPages(response.data)
        })
        .catch(error =>{
            Toast.create(error.message, "#D7443E")
            console.log(error)
        })
        return listPosts
    }
    static async listLastPages(lastPage){
        const listPosts = await instanceWithToken
        .get(`posts/?limit=10&offset=${lastPage}`)
        .then(response => {
            Render.renderPosts(response.data)
            Render.btnPages(response.data)
            console.log(response)
        })
        .catch(error =>{
            Toast.create(error.message, "#D7443E")
            console.log(error)
        })
        return listPosts
    }


    static async usersFollow(followingUserID){
        const followUser = await instanceWithToken
        .post("users/follow/", followingUserID)
        .then(response => console.log(response))
        .catch(error =>{
            console.log(error)
        })
        return followUser
    }
    static async deleteFollow(userID){
        const deleteFollow = await instanceWithToken
        .delete(`users/unfollow/${userID}/`)
        .then(response => console.log(response))
        .catch(error =>{
            console.log(error)
        })
        return deleteFollow
    }
    
    static async likePosts(likeId){
        const likePost = await instanceWithToken
        .post("likes/", likeId)
        .then(response => console.log(response))
        .catch(error =>{
            console.log(error)
        })
        return likePost
    }
    static async deletePost(likeId){
        const deleteLike = await instanceWithToken
        .delete(`likes/${likeId}/`)
        .then(response => console.log(response))
        .catch(error =>{
            console.log(error)
        })
        return deleteLike
    }
}