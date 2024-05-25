import React from "react";

import NavItem from "../../components/NavItem";
import Avatar from "../../components/Avatar";

function NavBar(): React.ReactNode {

    const [hidden, setHidden] = React.useState(true);

    if (localStorage.getItem('token') === null) {
        return (
            <div className="grid grid-cols-3 bg  p-4 mb-4 justify-between fixed top-0 w-full z-20 bg-gray-900 opacity-80">
                <div className="col-span-1">
                    <div className="text-2xl">
                        <NavItem title="Friends Blog" link="/" />
                    </div>
                </div>
                <div className="col-span-2 flex justify-end">
                    <NavItem title="Login" link="/login" />
                    <NavItem title="Signup" link="/signup" />
                </div>
            </div>
        )
    }
    else {
        return (

            <div className="grid grid-cols-3 bg p-4 mb-4 justify-between fixed top-0 w-full z-20 bg-gray-900 opacity-80 ">
                <div className="col-span-1">
                    <div className="text-2xl">
                        <NavItem title="Friends Blog" link="/" />
                    </div>
                </div>


                <div className="col-span-1 flex justify-center gap-4">

                    <NavItem title="Blogs" link="/blog/public" />
                    <NavItem title="Friend's Blog" link="/blog/friendsblog" />
                    <NavItem title="My blogs" link="/blog/private" />
                    <NavItem title="Write blog" link="/blog/write" />

                </div>


                {/* drop down for profile  and logout and account settings */}

                <div className="col-span-1 flex justify-end" onClick={() => { setHidden(!hidden) }}>


                    <Avatar firstName={localStorage.getItem('firstName') || ''} lastName={localStorage.getItem('lastName') || ''} />


                    <div className={hidden ? 'hidden' : 'flex flex-col gap-2 absolute top-16 right-5 p-4 rounded bg-transparent border border-gray-300'}>
                        <NavItem title="Profile" link="/profile" />
                        <NavItem title="Account settings" link="/accountsettings" />
                        <NavItem title="Logout" link="/logout"  />

                    </div>

                </div>

            </div>
        )
    }

}


export default NavBar;