import axios from 'axios'
// import {getUserInfo} from './auth.header'

// const TOKEN = getUserInfo();
// console.log("token",TOKEN)
const API_URL ="http://localhost:2345/";
let axiosConfig = {
    headers:{
        'Content-Type' : 'application/json',
        // 'Authorization' : TOKEN.result
    }
}
console.log("axiosConfig",axiosConfig)


export const signup = async(fullname,email,password,phone,address) => {
    return axios.post(
        API_URL + "user/usersignup",
        {
            fullname,
            email,
            password,
            phone,
            address,
        },
        axiosConfig
    )
};

// export const myinfo = async () => {
//     return await axios.get (API_URL + "user/myinfo?id=1",{
//             },{
//                 'Authorization' : TOKEN
//             })
// }

export const login = async (email,password) => {
    try{
    
    const response = await axios.post(
        API_URL + "user/login",
        {
            email,
            password,
        },
        axiosConfig
    )
    if(response.data.status === 200){
        localStorage.setItem('users',JSON.stringify(response.data))
        return response
    }else{
        return response
    }
    }catch(e){
        throw e
    }
}

// export const getToken = () => {
//     console.log(getUserInfo());
// }

export const getUserDetail = async () => {
    console.log(getUserDetail)
    return axios.get(API_URL + "user/userid", axiosConfig)
}


export const showlist = async() => {
    return axios.get(
        API_URL + "user/list",axiosConfig
    )
}


export const task = async (title,date,time,dateofcompletion) => {
    console.log(task);
    return axios.post(
        API_URL + "user/addtask",
        {
            title,
            date,
            time,
            dateofcompletion,
        },
        axiosConfig
    )
}


export const getTaskDetail = async (_id) => {

    return axios.get(API_URL + `user/id?_id=${_id}`, axiosConfig)
}

export const updateTask = async (title,date,time,dateofcompletion) => {
    console.log(title)
    return await axios.put(API_URL + "user/update", {title,date,time,dateofcompletion},axiosConfig)
}

export const deleteTask = async (_id) => {
    console.log(_id)
    return await axios.delete(API_URL + `user/delete/${_id}`, axiosConfig)
}