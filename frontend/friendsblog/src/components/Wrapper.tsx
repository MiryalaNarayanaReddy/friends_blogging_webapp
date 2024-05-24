import React from "react";

export function WindowCard({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <div className="h-screen w-full bg-transparent  mt-20 mb-40 items-center justify-center flex ">
          
          {children}

        </div>
    )
}


export function WrapperCard({ children }: { children: React.ReactNode }): React.ReactNode {
    return (

        <div className="items-center justify-center h-screen w-4/5 bg-white shadow-lg rounded-lg  overflow-y-auto grid grid-cols-1 p-10">

            {children}
        </div>
    )
}


export function TitleCard({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <div className="text-2xl bg-transparent mt-4 rounded-lg p-4 w-full text-center p-1 col-span-1">

            {children}
    
        </div>
    )
}



export function ParagraphWrapperCard({ children }: { children: React.ReactNode }): React.ReactNode {
    return (

        <div className="cols-span-1">

            {children}
        </div>
    )
}



export function ParagraphCard({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <div className=" text-xl bg-transparent mt-4 rounded-lg p-4 w-full text-left p-1">

            {children}
    
        </div>
    )
}

export function ParagraphEditCard({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <div className=" text-xl text-center  flex flex-col  justify-center bg-transparent mt-4 rounded-lg p-4 w-full shadow-2xl ">

            {children}
    
        </div>
    )
}



export function InputTitleCard(props: { label: string,placeholder:string, name: string, type: string, value: string, setValue: React.SetStateAction<any> }): React.ReactNode {
    return (
        <div className="mb-4">


            <input
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />

        </div>
    )
}
