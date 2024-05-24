import axios from 'axios';
import { EmailLoginType,UsernameLoginType } from '@friendsblog/common';


async function HandleLoginwithEmail( email: string, password: string) {
    const apiUrl:string = import.meta.env.VITE_API_URL;
    
    const response = await axios.post(`${apiUrl}/auth/login/byemail`,
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
    
    const apiUrl:string = import.meta.env.VITE_API_URL;

    const response = await axios.post(`${apiUrl}/auth/login/byusername`,
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