
export function PublishBlogButton({ publishBlog }: { publishBlog: () => void }) {
    return (
        
        <div className="mb-4">
            <button onClick={publishBlog} className="bg-blue-500 text-white p-2 pl-6 pr-6 rounded-md shadow-md hover:bg-blue-700 pointer-events-auto ">
                Publish
                </button>
        </div>
       
    )
}



export function SelectBlogType({ setType }: { setType: (type: string) => void }) {

    return (
        <div className="flex flex-row items-center justify-center mb-4">
            <label
                htmlFor="type"
                className=" text-xl font-medium p-2" >
                Type
            </label>

            <select
                name="type"
                id="type"
                required={true}
                className="text-xl p-2 w-40 border border-gray-300 rounded-md"
                onChange={(e) => setType(e.target.value)}
            >

               {/* private   */}
                <option value="private " defaultValue={"private"} > Private</option>

                {/* public */}
                <option value="public">Public</option>

                {/* that can seen by friends */}
                <option value="friendsblog">Friends blog</option>

            </select>

        </div>
    )
}


