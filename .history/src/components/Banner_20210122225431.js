import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
             <div class="row">
                <div class="col-sm-6">.col-sm-4</div>
                <div class="col-sm-6">.col-sm-8</div>
            </div> 
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
