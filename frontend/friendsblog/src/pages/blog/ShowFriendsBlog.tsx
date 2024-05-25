import ShowBlog from "./ShowBlogs";
import { friendsBlog } from "./sampleblogs";



export default function ShowFriendsBlog() {


    return (
        <div>
            <ShowBlog type="Friends" blogs={friendsBlog} />
            
        </div>
    )
}