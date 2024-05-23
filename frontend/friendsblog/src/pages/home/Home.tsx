import React from "react";



function Home(): React.ReactNode {
    return (
        <>
           

                <div className="flex items-center justify-center h-screen w-full bg-transparent">


                    <div className="animate-pulse text-white text-9xl font-bold text-center col-span-3  flex items-center justify-center bg-transparent shadow-lg">
                        Welcome to Friends Blog
                    </div>

                </div>


                <div className=" flex items-center justify-center h-screen w-full bg-transparent">


                    <div className="text-white text-4xl font-bold text-center col-span-3  flex items-center justify-center bg-transparent shadow-lg">


                        {/* 4-5 paragrah of text  */}


                        <div className="grid grid-cols-12">

                            <div className="col-span-6 ">
                                <p className="text-2xl p-4 m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc luctus tincidunt. Nulla facilisi. Nullam in neque nec sapien ultrices tincidunt. Nullam nec purus sit amet nunc luctus tincidunt. Nulla facilisi. Nullam in neque nec sapien ultrices tincidunt. </p>
                            </div>


                            <div className="col-span-6">
                                <p className="text-2xl p-4 m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc luctus tincidunt. Nulla facilisi. Nullam in neque nec sapien ultrices tincidunt. Nullam nec purus sit amet nunc luctus tincidunt. Nulla facilisi. Nullam in neque nec sapien ultrices tincidunt. </p>
                            </div>


                            <div className="col-span-6">
                                <p className="text-2xl p-4 m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc luctus tincidunt. Nulla facilisi. Nullam in neque nec sapien ultrices tincidunt. Nullam nec purus sit amet nunc luctus tincidunt. Nulla facilisi. Nullam in neque nec sapien ultrices tincidunt. </p>
                            </div>

                        </div>

                


                    </div>

                </div>
           
        </>
    )
}

export default Home;
