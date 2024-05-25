import ShowBlog from "../../components/showblogs/ShowBlog";
import { HandleGetPublicBlogs } from "../../controllers/Blogs";


export default function ShowPublicBlogs() {

    return (
        <div>
            <ShowBlog type="Public"  loadMore={HandleGetPublicBlogs} />
            
        </div>
    )
}