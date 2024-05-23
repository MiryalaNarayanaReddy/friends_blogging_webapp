import axios from 'axios';
import { EmailLoginType,UsernameLoginType } from '@friendsblog/common';

async function HandleLoginwithEmail( email: string, password: string) {
    
    const response = await axios.post('http://localhost:4000/api/v1/user/login/byemail', 
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
    
    const response = await axios.post('http://localhost:4000/api/v1/user/login/byusername', 
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