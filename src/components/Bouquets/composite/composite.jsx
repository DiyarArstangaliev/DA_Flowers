import React from "react";
import composite from "./composite.module.css";
import CompositeHead from "./compositeHead";
import CompositeItems from "./compositeItems";


const Composite = () => {
    return (
        <div className={composite.content}>
            <CompositeHead/>
            <CompositeItems/>
        </div>
    )
};


export default Composite;