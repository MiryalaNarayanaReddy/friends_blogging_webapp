import { HandleGetMyBlogs } from "../../controllers/Blogs";

import ShowMyBlog from "../../components/myblogs/ShowMyBlog";


export default function ShowMyBlogs() {

    return (
        <div>
            <ShowMyBlog loadMore={HandleGetMyBlogs} />
        </div>
    )
}