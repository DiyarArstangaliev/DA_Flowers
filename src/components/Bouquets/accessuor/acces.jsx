import React from "react";
import acces from "./acces.module.css";
import AccesHead from "./accesHead";
import AccesItems from "./accesItems";


const Acces = () => {
    return (
        <div className={acces.content}>
            <AccesHead/>
            <AccesItems/>
        </div>
    )
};


export default Acces;