import React from 'react'

export default function Hero({children, hero}) {
    return (
        <header id="msgBg" className={hero}>{children}</header>
    )
}
