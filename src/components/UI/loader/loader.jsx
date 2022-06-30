import React from "react";
import cl from './loader.modules.css'

const Loader = () => {
    return(
        <div className={cl.loader}>
            <div className="loader">
                <b>L</b><b>O</b><b>A</b><b>D</b><b>I</b><b>N</b><b>G</b>
            </div>
        </div>
    )
}

export default Loader;