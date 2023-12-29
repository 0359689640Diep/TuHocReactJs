import classNames from "classnames";
import { useState, forwardRef } from "react";
import PropTypes from "prop-types";


import images from "@/assets/images";
import styles from "./Image.model.scss";

function Image({src, alt, className,fallback: customFallBack = images.noImage,...props}, ref) {

    const [fallback, setFallback] = useState("");

    const handleError = () =>{
        setFallback(customFallBack)
    }

    return ( 
        <img 
            className={classNames(styles.wrapper,className)} ref={ref} src={fallback || src} 
            alt={alt} {...props} 
            onError={handleError} 

            />
     );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default forwardRef(Image);
