import urls from './WebUrls'

class userService
{
    registerUser = (data)=>
    {
        return fetch(urls.USER_REGISTER,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
    }

    loginUser = (data)=> 
    {
        return fetch(urls.USER_LOGIN,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
    }
}

export default new userService()