import { useContext } from "react";
import { ThemeContext } from "./ThemeContex";

function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme} >Content paragraph</p>
    )
}

export default Paragraph;