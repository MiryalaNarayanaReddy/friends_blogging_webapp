import React from 'react'

import { useState, useEffect } from 'react'
import { WindowCard } from '../../components/Wrapper'
import { TitleCard } from '../../components/Wrapper'

import { MyBlogsWrapperCard } from './ShowMyBlogCards'
import { MyBlogCard, MyBlogCardSkeleton } from './ShowMyBlogCards'

import { MyBlogsCardType } from '@friendsblog/common'

export default function ShowMyBlogs({ loadMore }: { loadMore: (timestamp: MyBlogsCardType['updatedAt']) => Promise<MyBlogsCardType[]> }) {

    const [blogs, setBlogs] = useState<MyBlogsCardType[]>([])
    const [timestamp, setTimestamp] = useState('')

    const [loading, setLoading] = useState(true)
    const [loadedAll, setLoadedAll] = useState(false)


    useEffect(() => {
        loadMore(timestamp).then((newBlogs) => {
            if (newBlogs.length !== 0) {
                setBlogs(newBlogs)
                setTimestamp(newBlogs[newBlogs.length - 1].updatedAt)
            }
            else {
                setLoadedAll(true)
            }
            setLoading(false)
        })
    }, [])


    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {

        if(loadedAll){
            return
        }
        // if the user has scrolled to the almost bottom of the page less than 100px

        const bottom = (e.currentTarget.scrollHeight - e.currentTarget.scrollTop) - e.currentTarget.clientHeight

        if (bottom < 100) {
            setLoading(true)
            loadMore(timestamp).then((newBlogs) => {
                if (newBlogs.length !== 0) {
                    setBlogs([...blogs, ...newBlogs])
                    setTimestamp(newBlogs[newBlogs.length - 1].updatedAt)
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
            <MyBlogsWrapperCard onScroll={loading ? () => { } : handleScroll}>
                <TitleCard>
                    <div className="justify-center m-2  col-span-1">

                        <div className="grid grid-cols-3 gap-4">

                            <div className="text-4xl font-bold text-center">My Blogs</div>
                        </div>
                    </div>

                </TitleCard>


                {blogs.map((blog) => {
                    return <MyBlogCard key={blog.id} blog={blog} type={blog.type} />
                })}

                <MyBlogCardSkeleton key="1" loading={loading} />
                <MyBlogCardSkeleton key="2" loading={loading} />


            </MyBlogsWrapperCard>

        </WindowCard>

    )
}
