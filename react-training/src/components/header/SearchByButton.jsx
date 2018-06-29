import React from "react";

export default ({selector, onClick, active}) => {
    return <button className={"search-by " + active} onClick={onClick}>{selector}</button>;  
}

