import ShowBlog from "./ShowBlogs";
import { privateBlogs } from "./sampleblogs";



export default function ShowPrivateBlog() {


    return (
        <div>
            <ShowBlog type="Private" blogs={privateBlogs} />
            
        </div>
    )
}