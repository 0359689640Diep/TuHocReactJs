import config from "@/config";

// layout
import {HeaderOnly} from "@/layouts"

// pages
import  Home from "@/pages/Home";
import  Following from "@/pages/Following";
import  Profile from "@/pages/Profile"
import  Upload from "@/pages/Upload"
import  Search from "@/pages/Search"
// sử dụng cho những router không cần đăng nhập
const pulicRouter = [
    {
        path: config.routes.Home, component: Home,
    },
    {
        path: config.routes.Profile, component: Profile,
    },
    {
        path: config.routes.Upload, component: Upload, 
        layout: HeaderOnly
    },
    {
        path: config.routes.Search, component: Search, 
        layout: null
    },
    {
        path: config.routes.Following, component: Following
    }
]

// sử dụng cho những router  cần đăng nhập nếu cố tình sử dụng sẽ đưa đến trang login 
const privateRoutes = [

]

export {pulicRouter, privateRoutes}