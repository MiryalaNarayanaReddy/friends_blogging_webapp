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

        <div className="h-screen w-4/5 bg-white shadow-lg rounded-lg  overflow-y-auto flex flex-col items-center">

            {children}
        </div>
    )
}


export function TitleCard({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <div className="text-2xl bg-transparent mt-4 rounded-lg p-4 w-full text-center p-1  ">

            {children}

        </div>
    )
}



export function ParagraphWrapperCard({ children}: { children: React.ReactNode}): React.ReactNode {

    // detect to mouse press outside

    return (

        <div className=" w-full flex flex-col justify-center">

            {children}
        </div>
    )
}



export function ParagraphCard({ children, id, addParagraph ,text, editParagraph}: { children: React.ReactNode, id: string, addParagraph: (id: string, position: number) => void, text: string, editParagraph: (text: string, id: string) => void }): React.ReactNode {

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div  key={id}
        onMouseLeave={() => {
            // e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0)';
            setIsHovered(false);
        }}
            onMouseEnter={() => {
                // e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)';
                setIsHovered(true);
            }}  onDoubleClick={() => editParagraph(text, id)}>

            {/* hidden */}

            <div className={`${isHovered ? '' : 'invisible'} flex justify-center z-10`}>
                <button onClick={() => addParagraph(id, 0)}>
                    + add new para above
                </button>
            </div>
            <div className=" text-xl bg-transparent mt-4 rounded-lg p-4 w-full text-left p-1 ">

                {children}

            </div>

            <div className={`${isHovered ? '' : 'invisible'} flex justify-center z-10`} >
                <button className="shadow-lg" onClick={() => addParagraph(id, 1)}>
                    + add new para below
                </button>
            </div>
        </div >
    )
}

export function ParagraphEditCard({ children , id ,addParagraph}: { children: React.ReactNode, id: string, addParagraph: (id: string, position: number) => void }): React.ReactNode {

    return (
        <div>


            <div className="flex justify-center z-10">
                <button onClick={() => addParagraph(id, 0)}>
                    + add new para above
                </button>
            </div>
            <div className=" text-xl text-center  flex flex-col  justify-center bg-transparent mt-4 rounded-lg p-4 w-full shadow-2xl ">

                {children}

            </div>

            <div className="flex justify-center z-10">
                <button className="shadow-lg" onClick={() => addParagraph(id, 1)}>
                    + add new para below
                </button>
            </div>
        </div>
    )
}



export function InputTitleCard(props: { label: string, placeholder: string, name: string, type: string, value: string, setValue: React.SetStateAction<any> }): React.ReactNode {
    return (
        <div className="mb-4">


            <input
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value}
                required={true}
                onChange={(e) => props.setValue(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />

        </div>
    )
}
