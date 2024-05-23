
function AuthCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-transparent">
            <div className=" p-4 rounded-lg shadow-lg w-96 bg-white">
                {children}
            </div>
        </div>
    )
}


{/* <InputCard label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */ }

function InputCard(props: { label: string, name: string, type: string, value: string, setValue: React.SetStateAction<any> }): React.ReactNode {
    return (
        <div className="mb-4">
            <label
                htmlFor={props.name}
                className="block text-sm font-medium text-gray-700" >
                {props.label}
            </label>

            <input
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



function SubmitCard(props: { title: string, onClick: () => void }): React.ReactNode {

      {/* prevent default action */}
    function handleClick (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        props.onClick();
    }

    return (
        <div className="mb-4">
            <button onClick={(e) => handleClick(e) } className="bg-blue-500 text-white p-2 w-full rounded-md">{props.title}</button>
        </div>
    )
}


export {
    AuthCard,
    InputCard,
    SubmitCard
}
