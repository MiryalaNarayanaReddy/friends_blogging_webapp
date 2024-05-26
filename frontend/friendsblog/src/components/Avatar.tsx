import React from 'react'

function Avatar(props: { firstName: string, lastName: string }): React.ReactNode {

    if (props.firstName === '' && props.lastName === '') {
        return (
            <div className="flex items-center">
                <div className="bg-gray-300 rounded-full flex items-center justify-center h-10 w-10">
                    G
                </div>
            </div>
        )
    }

    if (props.firstName !== '' || props.lastName === '') {
        return (
            <div className="flex items-center">
                <div className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    {props.firstName[0]}
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center">
            <div className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                {props.firstName[0]} {props.lastName[0]}
            </div>
        </div>
    )
}

export default Avatar;