import Avatar from "../Avatar";

// title , author , date , type , firstParagraph

export function UserCard({ id, username }: { id: string, username: string }) {
    return (
        <div key={id} className="bg-transparent mt-4 rounded-lg p-4 w-full text-left p-2 ml-4 mr-4 hover:shadow-2xl hover:shadow-cyan-300 hover:border-2 transition duration-300 ease-in-out">

            <div className="grid grid-cols-12 justify-left">


                <div className="col-span-2">
                    <Avatar firstName={username} lastName={''} />
                </div>

                <div className="col-span-5">
                    <div className="text-2xl font-bold">{username}</div>
                </div>

            </div>

        </div>
    )
}


export function UserCardSkeleton({ loading }: { loading: boolean }) {

    return (

        <div role="status"
            className={
                loading ?
                    'block w-full p-4 rounded shadow animate-pulse p-2 ml-4 mr-4 mb-6 '
                    :
                    'hidden w-full p-4 rounded shadow animate-pulse p-2 ml-4 mr-4 mb-6 '
            }>

            <div className="flex mt-4 justify-left">
                <div className="w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-500"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-4 ml-20 "></div>
            </div>

            <span className="sr-only relative">Loading...</span>
        </div>
    )
}

export function UsersWrapperCard({ children, onScroll }: { children: React.ReactNode, onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void }) {
    return (

        <div className="h-[90vh] w-4/5 bg-white shadow-lg rounded-lg  overflow-y-auto flex flex-col items-center fixed top-20 pl-4 pr-4 overflow-x-hidden" onScroll={onScroll}>

            {children}
        </div>
    )
}


export function InputSearchQueryCard(props: { label: string, placeholder: string, name: string, type: string, value: string, setValue: React.SetStateAction<any> }): React.ReactNode {
    return (
        <div className="mb-4">

            <input
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value}
                required={true}
                minLength={3}
                onChange={(e) => props.setValue(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />

        </div>
    )
}
