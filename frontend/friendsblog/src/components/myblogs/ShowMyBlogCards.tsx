import { MyBlogsCardType } from "@friendsblog/common";

// title , author , date , type , firstParagraph

export function MyBlogCard({ blog, type }: { blog: MyBlogsCardType, type: string }) {
    return (
        <div key={blog.id} className="bg-transparent mt-4 rounded-lg p-4 w-full text-left p-2 ml-4 mr-4 hover:shadow-2xl hover:shadow-cyan-300 hover:border-2 transition duration-300 ease-in-out">

            <div className="grid grid-cols-12 justify-between">

                <div className="col-span-8">
                    <div className="text-2xl font-bold">{blog.title}</div>
                </div>


                <div className="col-span-12">
                    <div className="text-sm text-gray-500"> {blog.type}</div>
                </div>

                <div className="col-span-12 flex justify-left">


                    <div className="text-sm pl-2 pr-2 text-gray-500 ">
                        created: {new Date(blog.createdAt).toLocaleDateString()} {new Date(blog.createdAt).toLocaleTimeString()}

                    </div>

                    <div className="text-sm pl-2 pr-2 text-gray-500 ">
                        updated: {new Date(blog.updatedAt).toLocaleDateString()} {new Date(blog.updatedAt).toLocaleTimeString()}
                    </div>

                    <div className="text-sm pl-2 pr-2 text-gray-500">{type}</div>

                </div>

                <div className="col-span-12">
                    <div className="text-md">{blog.firstParagraph}</div>
                </div>

            </div>

        </div>
    )
}


export function MyBlogCardSkeleton({ loading }: { loading: boolean }) {

    return (

        <div role="status"
            className={
                loading ?
                    'block w-full p-4 rounded shadow animate-pulse p-2 ml-4 mr-4 mb-6 '
                    :
                    'hidden w-full p-4 rounded shadow animate-pulse p-2 ml-4 mr-4 mb-6 '
            }>

            <div className="flex mt-4 justify-between">
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="grid grid-cols-2 justify-left">

                        <div className="col-span-1 h-1.5 bg-gray-200 rounded-full dark:bg-gray-400 w-12 mb-2"></div>
                        <div className="col-span-1 h-1.5 bg-gray-200 rounded-full dark:bg-gray-400 w-12 mb-2"></div>
                    </div>
                </div>
              
            </div>

            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <span className="sr-only relative">Loading...</span>
        </div>

    )

}

export function MyBlogsWrapperCard({ children, onScroll }: { children: React.ReactNode, onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void }) {
    return (

        <div className="h-[90vh] w-4/5 bg-white shadow-lg rounded-lg  overflow-y-auto flex flex-col items-center fixed top-20 pl-4 pr-4 overflow-x-hidden" onScroll={onScroll}>

            {children}
        </div>
    )
}