import React from "react";
import mono from "./mono.module.css";
import MonoHead from "./monoHead";
import MonoItems from "./monoItems";


const Mono = () => {
    return (
        <div className={mono.content}>
            <MonoHead/>
            <MonoItems/>
        </div>
    )
};


export default Mono;