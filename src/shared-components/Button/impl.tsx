import React from "react"
import "./styles.css"
import { ButtonProps } from "./types"

export const Button = ({ children }: ButtonProps) => {
    return (
        <button className="btn">{children}</button>
    )
}
