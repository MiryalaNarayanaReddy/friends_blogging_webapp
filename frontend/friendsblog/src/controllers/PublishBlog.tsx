
import axios from 'axios';
import { BlogInputType } from '@friendsblog/common';

async function HandlePublishBlog(title: string, type: string, paragraphs: { [id: string]: string }): Promise<boolean> {

    try {

        let content: BlogInputType['content'] = [];

        for (const [key, value] of Object.entries(paragraphs)) {
            content.push({
                index: parseInt(key),
                content: value
            })
        }

        console.log('content', {
            title,
            type,
            content
        } as BlogInputType)

        const base_url: string = import.meta.env.VITE_API_URL;

        const response = await axios.post(`${base_url}/blog/publish`,
            {
                title,
                type,
                content
            } as BlogInputType,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

        if (response.data.success) {
            alert('Blog published successfully')
            return true
        }
        else{
            alert('Some error occured')
            return false
        }
    } catch (error: any) {
        console.error(error)
        alert(error.response.data.issues[0].message)
        return false
    }
}

export default HandlePublishBlog;
