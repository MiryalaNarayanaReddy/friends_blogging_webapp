
import { UsersCardType } from "@friendsblog/common"
import axios from 'axios';
// import {users } from '../pages/user/sampleusers'

export async function HandleGetUsers(filter:String ,userstamp:UsersCardType['username']): Promise<UsersCardType[]> {

    try {

        const base_url: string = import.meta.env.VITE_API_URL;

        let user_url = `${base_url}/user/all`

        if(filter !== ''){
            user_url = `${user_url}/${filter}`
        }

        if(userstamp !== ''){
            user_url = `${user_url}/${userstamp}`
        }

        console.log(user_url)


        const response = await axios.get(user_url,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        

        if (response.data.success) {
            // alert('Users fetched successfully')
            return response.data.usersData
        }
        else{
            // alert('Some error occured')
            return []
        }

        // await new Promise(r => setTimeout(r, 2000))

        // return users
        

    } catch (error: any) {
        console.error(error)
        alert(error.response.data.issues[0].message)
        return []
    }      
    
}