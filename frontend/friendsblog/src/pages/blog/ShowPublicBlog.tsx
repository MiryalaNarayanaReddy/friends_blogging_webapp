import ShowBlog from "./ShowBlogs";
import { publicblogs } from "./sampleblogs";



export default function ShowPublicBlog() {


    return (
        <div>
            <ShowBlog type="Public" blogs={publicblogs} />
            
        </div>
    )
}