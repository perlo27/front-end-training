import React from "react";

export default ({selector, onClick, active}) => {
    return <p className={"search-by " + active} onClick={onClick}>{selector}</p>;  
}

