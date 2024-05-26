import React from 'react'
import { useState, useEffect } from 'react'
import { WindowCard } from '../Wrapper'
import { TitleCard } from '../Wrapper'

import { UsersWrapperCard, UserCardSkeleton, InputSearchQueryCard, UserCard } from './ShowUserCards'
import { UsersCardType } from '@friendsblog/common'

export default function ShowUser({ type, loadMore }: { type: string, loadMore: (filter: string, userstamp: string) => Promise<UsersCardType[]> }) {

    const [users, setUsers] = useState<UsersCardType[]>([])
    const [userstamp, setUserstamp] = useState('')
    const [filter, setFilter] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const [loading, setLoading] = useState(true)
    const [loadedAll, setLoadedAll] = useState(false)



    useEffect(() => {
        loadMore(filter, userstamp).then((newUsers) => {
            setUsers(newUsers)
            if (newUsers.length !== 0) {
                setUserstamp(newUsers[newUsers.length - 1].username)
            }
            else {
                setLoadedAll(true)
            }
            setLoading(false)
        })
    }, [filter]) // runs only when filter changes


    useEffect(() => {
        // searchQuery is has minimum 3 characters and use debounce to avoid multiple api calls

        const timeOutId = setTimeout(() => {
            if (searchQuery.length < 3) {
                return
            }
            setUserstamp('')
            setLoadedAll(false)
            setLoading(true)
            setUsers([])
            setFilter(searchQuery) // filter is set to searchQuery 
            // filter changed so useEffect with filter as dependency will run
        }, 1000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [searchQuery])  // runs only when searchQuery changes


    // handle scroll event and load more users

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
            loadMore(filter, userstamp).then((newUsers) => {
                if (newUsers.length !== 0) {

                    setUsers([...users, ...newUsers])
                    setUserstamp(newUsers[newUsers.length - 1].username)
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
            <UsersWrapperCard onScroll={loading || loadedAll ? () => { } : handleScroll}>

                <TitleCard>
                    <div className="justify-center m-2  col-span-1">

                        {/* <div className="grid grid-cols-3 gap-4"> */}

                            <div className="text-4xl font-bold text-center">{type === 'all' ? 'Friends Blog Users' : 'My Friends'} </div>
                        {/* </div> */}

                        {/* <div className="grid grid-cols-3 gap-4"> */}
                            <InputSearchQueryCard label="Search" placeholder="Search Users" name="searchQuery" type="text" value={searchQuery} setValue={setSearchQuery} />

                        {/* </div> */}

                    </div>



                </TitleCard>


                {users.map((user) => {
                    return <UserCard key={user.id} id={user.id} username={user.username} />
                })}

                <UserCardSkeleton key="1" loading={loading} />
                <UserCardSkeleton key="2" loading={loading} />


            </UsersWrapperCard>

        </WindowCard>

    )
}


