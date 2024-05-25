import React from "react";
import Avatar from "./Avatar";



// title , author , date , type , firstParagraph


export function BlogCard({ id, title, author, date, type, firstParagraph }: { id: string, title: string, author: string, date: string, type: string, firstParagraph: string }): React.ReactNode {
    return (
        <div key={id} className="bg-transparent mt-4 rounded-lg p-4 w-full text-left p-2 ml-4 mr-4 hover:shadow-2xl hover:shadow-cyan-300 hover:border-2 transition duration-300 ease-in-out">

            <div className="grid grid-cols-12 justify-between">

                <div className="col-span-8">
                    <div className="text-2xl font-bold">{title}</div>
                </div>

                <div className="col-span-4 flex justify-end">

                    <Avatar firstName={author} lastName={""} />
                </div>

                <div className="col-span-12">
                    <div className="text-sm text-gray-500"> {author}</div>
                </div>

                <div className="col-span-12 flex justify-left">


                    <div className="text-sm pl-2 pr-2 text-gray-500 ">{date}</div>
                    <div className="text-sm pl-2 pr-2 text-gray-500">{type}</div>
                </div>
                <div className="col-span-12">
                    <div className="text-md">{firstParagraph}</div>
                </div>
            </div>

        </div>
    )

}


export function BlogCardSkeleton() {
    return (

        <div role="status" className="w-full p-4 rounded shadow animate-pulse p-2 ml-4 mr-4 mb-6">

            <div className="flex mt-4 justify-between">
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-400 w-12 mb-2"></div>
                    <div className="grid grid-cols-2 justify-left">

                        <div className="col-span-1 h-1.5 bg-gray-200 rounded-full dark:bg-gray-400 w-12 mb-2"></div>
                        <div className="col-span-1 h-1.5 bg-gray-200 rounded-full dark:bg-gray-400 w-12 mb-2"></div>
                    </div>
                </div>
                <div className="ml-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full dark:bg-gray-500"></div>
                </div>
            </div>

            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <span className="sr-only relative">Loading...</span>
        </div>
    )
}

