// import thư viện
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard,  faCloudUpload,  faUser, faGear, faCoins, faSignOut,  } from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css"
import { Link } from "react-router-dom";


// import module
import styles from "./Header.module.scss";
import images from "@/assets/images";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
import Image from "@/components/Image";
import Search from "../Search";
import config from "@/config";


const cx  = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    code: "en",
                    title: "English"
                },
                {
                    code: "vn",
                    title: "Viet Nam"
                }

            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: "Feedback and Help",
        to: "./feesback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: "Keyboard shortcuts"
    }
];

function Header() {
    const currentUser = true;

    // handle logic
    const handlMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: "View profile",
            to: "/"
            
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: "Get coins",
            to: "/coin"
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: "Setting",
            to: "/setting"
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: "Log out",
            to: "/logout",
            separate: true,
        }
    ];

    return ( 
        <header className={cx("wrapper")}>  
            <div className={cx("inner")}>

              <div className={cx('logo')}>
              <Link to={config.routes.Home} className={cx("logo-link")}> <img src={images.logo} alt="TikTok"></img> </Link>
                
              </div>
                <Search/>

              <div className={cx('actions')}>
                { currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload video" placement = "bottom">
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faCloudUpload}/>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text> Upload </Button>
                        <Button  primary > Log In </Button>
                        
                    </>
                )}

                <Menu
                    items={currentUser ? userMenu: MENU_ITEM}
                    onChange = {handlMenuChange}>
                    {currentUser ? (
                        <Image
                            className={cx("user-avate")} 
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/8a2b178e509877ffb73c6b4619e13034~c5_100x100.jpeg?x-expires=1703052000&x-signature=HysBh1TUkvnnuIR3Z%2FyxECig%2BYs%3D" 
                            alt= "Nguyen Van A"
                            // nếu src lỗi thì hiển thị ảnh này
                            fallback = "https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                        />
                    ) : (
                    <button className={cx("more-btn")} >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                    )}
                </Menu>
              </div>
            </div>
        </header>
    );
}

export default Header;