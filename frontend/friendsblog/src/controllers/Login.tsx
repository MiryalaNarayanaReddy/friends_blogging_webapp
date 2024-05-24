import axios from 'axios';
import { EmailLoginType,UsernameLoginType } from '@friendsblog/common';
import  dotenv from 'dotenv';

dotenv.config();


async function HandleLoginwithEmail( email: string, password: string) {
    
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login/byemail`, 
    {
        email: email,
        password: password
    } as EmailLoginType

    )
    // console.log(response.data)
    if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
       
        window.location.href = '/';
    }

}


async function HandleLoginwithUsername( username: string, password: string) {
    
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login/byusername`,
    {
        username: username,
        password: password
    } as UsernameLoginType

    )
    // console.log(response.data)
    if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        
        window.location.href = '/';
    }

}

export {
    HandleLoginwithEmail,
    HandleLoginwithUsername
}