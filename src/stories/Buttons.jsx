import React from "react";
import './Buttons.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buttons=({
    variant="primary",
    size="small",
    label,
    icon,
    onClick,
})=>{

    return(
    <button
    className={`btn btn-${variant} btn-${size}`}
    onClick={onClick}
    icon={icon}

    >
        <FontAwesomeIcon icon={icon}/>
        
       {label}
    </button>
    );
};

export default Buttons;