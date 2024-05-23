import React from "react";

function NavItem(props: {title: string, link : string}): React.ReactNode{
    return (
      
        <a href={props.link} className="text-white hover:bg-gray-100 p-2 rounded transition duration-300 hover:text-black">
            {props.title}
        </a>
    
    )
   
}


export default NavItem;