import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary=false,
    ouline=false,
    text=false,
    small=false,
    large = false,
    disabled = false,
    rounded = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Component = "button";
    const props = {
        onClick,
        ...passProps
    }

    // thủ thuật xóa sự kiện khi nó co disabled
    // if(disabled) {
    //     Object.keys(props).forEach((key) =>{ 
    //         // tất cả mọi sự kiện đều bắt đầu bằng từ on
    //         if(key.startWith("on") && typeof props[key] === 'function') {
    //             delete props[key];
    //         }})
    //     }
    // }

    if(disabled){
       
        delete props.onClick;
    }
    if(to) {
        props.to = to
        Component = Link
    }else if(href) {
        props.href = href
        Component = 'a'

    }
    // khi nào prop primary được truyền thì khi đó nó sẽ add thêm class primary vào trong classes
    const classes = cx("wrapper", {
        primary,
        ouline,
        text,
        small,
        large,
        rounded,
        [className]: className,
        disabled
    });

    return ( 

        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span> }
           <span className={cx('title')}>{children}</span> 
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span> }
        </Component>
    );
}

Button.protypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    ouline: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,

}

export default Button;