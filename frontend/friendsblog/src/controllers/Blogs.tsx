
import axios from 'axios';
import { MyBlogsCardType, PublicBlogCardType } from '@friendsblog/common';
// import { myblogs, publicblogs } from '../pages/blog/sampleblogs';

export async function HandleGetPublicBlogs(timestamp:PublicBlogCardType['lastUpdate']): Promise<PublicBlogCardType[]> {

    try {

        const base_url: string = import.meta.env.VITE_API_URL;
       
        let blog_url = `${base_url}/blog/public`

        if(timestamp !== ''){
            blog_url = `${blog_url}/${timestamp}`
        }


        const response = await axios.get(blog_url,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        

        if (response.data.success) {
            // alert('Blogs fetched successfully')
            return response.data
        }
        else{
            alert('Some error occured')
            return []
        }

        // // add a delay to simulate the api call
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // return publicblogs

    } catch (error: any) {
        console.error(error)
        alert(error.response.data.issues[0].message)
        return []
    }
}


export async function HandleGetMyBlogs(timestamp:MyBlogsCardType['updatedAt']): Promise<MyBlogsCardType[]> {

    try {

        const base_url: string = import.meta.env.VITE_API_URL;


        let my_blog_url = `${base_url}/blog/myblogs`

        if(timestamp !== ''){
            my_blog_url = `${my_blog_url}/${timestamp}`
        }

        const response = await axios.get(my_blog_url,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

        if (response.data.success) {
            // alert('Blogs fetched successfully')
            return response.data
        }
        else{
            alert('Some error occured')
            return []
        }

    // //   add a delay to simulate the api call 
        // await new Promise(resolve => setTimeout(resolve, 1000));
    
        //     return myblogs

    } catch (error: any) {
        console.error(error)
        alert(error.response.data.issues[0].message)
        return []
    }
}
