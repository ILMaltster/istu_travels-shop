import axios, { AxiosResponse } from 'axios'
import useSWRMutation from 'swr/mutation'

export interface ILogin {
    login: string,
    password: string
}

export interface IResponseLogin {
    "id": string,
    "name":string,
    "login":string,
    "token": string,
    "roles": 
        {
        "id": string,
        "name": string
        }[]
    
      
}

const login = async (_url: string, { arg }: { arg: ILogin }) => {
    return axios.post<IResponseLogin>(`${process.env.REACT_APP_BACK_URL}/user/login`, JSON.stringify(arg), {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })
}

export const useLogin = () => {
    return useSWRMutation(`/user/login`, login)
}