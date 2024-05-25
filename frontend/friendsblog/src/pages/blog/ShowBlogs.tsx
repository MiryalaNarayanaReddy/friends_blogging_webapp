import React from 'react'


import { WindowCard, WrapperCard } from '../../components/Wrapper'
import { TitleCard } from '../../components/Wrapper'
import { BlogCard, BlogCardSkeleton } from '../../components/ShowBlog'


function ShowBlog({ type, blogs }: {type:string, blogs: { id: string, title: string, author: string, date: string, type: string, firstParagraph: string }[] }): React.ReactNode {

    return (

        <WindowCard>
            <WrapperCard>

                <TitleCard>
                    <div className="justify-center m-2  col-span-1">

                        <div className="grid grid-cols-3 gap-4">

                            <div className="text-4xl font-bold text-center">{type} Blogs</div>
                        </div>
                    </div>

                </TitleCard>


                {blogs.map((blog) => {
                    return <BlogCard id={blog.id} title={blog.title} author={blog.author} date={blog.date} type={blog.type} firstParagraph={blog.firstParagraph} />
                })}


                <BlogCardSkeleton />
                <BlogCardSkeleton />
                {/* <BlogCardSkeleton /> */}

            </WrapperCard>

        </WindowCard>

    )
}


export default ShowBlog