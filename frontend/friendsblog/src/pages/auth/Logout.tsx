import React from "react";



function Logout(): React.ReactNode {

    if (localStorage.getItem('token') != null) {

        localStorage.clear();

        window.location.href = '/';

        return (
            <div>
                <h1>Logout</h1>
            </div>
        )
    }
    else {
        window.location.href = '/';

        return (
            <div>
                <h1>Logout</h1>
            </div>
        )
    }
}

export default Logout;