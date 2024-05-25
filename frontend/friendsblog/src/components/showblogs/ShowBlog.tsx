import React from 'react'

import { useState, useEffect } from 'react'

import { WindowCard } from '../Wrapper'
import { BlogsWrapperCard } from './ShowBlogCards'
import { TitleCard } from '../Wrapper'
import { BlogCard, BlogCardSkeleton } from './ShowBlogCards'
import { PublicBlogCardType } from '@friendsblog/common'

export default function ShowBlog({ type, loadMore }: { type: string, loadMore: (timestamp: PublicBlogCardType['lastUpdate']) => Promise<PublicBlogCardType[]> }) {

    const [blogs, setBlogs] = useState<PublicBlogCardType[]>([])
    const [timestamp, setTimestamp] = useState('')
    // const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const [loadedAll, setLoadedAll] = useState(false)

    // detect when the user has scrolled to the bottom of the page
    // and load more blogs

    // when user scrolls to the bottom of the element use scroll height 


    useEffect(() => {
        loadMore(timestamp).then((newBlogs) => {
            if (newBlogs.length !== 0) {
                setBlogs(newBlogs)
                setTimestamp(newBlogs[newBlogs.length - 1].lastUpdate)
            }
            else {
                setLoadedAll(true)
            }
            setLoading(false)
        })
    }, [])



    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {

        if (loadedAll) {
            return
        }

        // if the user has scrolled to the almost bottom of the page less than 100px

        // e.currentTarget.scrollHeight  = total height of the element
        // e.currentTarget.scrollTop = how much the user has scrolled
        // e.currentTarget.clientHeight = height of the element visible to the user

        // total height - how much the user has scrolled = height of the element visible to the user+ left over height
        
        const bottom = (e.currentTarget.scrollHeight - e.currentTarget.scrollTop) - e.currentTarget.clientHeight

        if (bottom < 100) {
            setLoading(true)
            loadMore(timestamp).then((newBlogs) => {
                if (newBlogs.length !== 0) {
                    setBlogs([...blogs, ...newBlogs])
                    setTimestamp(newBlogs[newBlogs.length - 1].lastUpdate)
                }
                else {
                    setLoadedAll(true)
                }
                setLoading(false)
            })
        }
    }


    return (

        <WindowCard>
        
        {/*  handle scroll only when loading is false and loadedAll is false */}
            <BlogsWrapperCard onScroll={ loading || loadedAll ? () => { } : handleScroll}>

                    <TitleCard>
                        <div className="justify-center m-2  col-span-1">

                            <div className="grid grid-cols-3 gap-4">

                                <div className="text-4xl font-bold text-center">{type} Blogs</div>
                            </div>
                        </div>

                    </TitleCard>


                    {blogs.map((blog) => {
                        return <BlogCard key={blog.id} blog={blog} type={type} />
                    })}

                    <BlogCardSkeleton key="1" loading={loading} />
                    <BlogCardSkeleton key="2" loading={loading} />

                
            </BlogsWrapperCard>

        </WindowCard>

    )
}


