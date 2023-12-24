// layout
import {HeaderOnly} from "@/components/Layout"

// pages
import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile"
import Upload from "@/pages/Upload"
import Search from "@/pages/Search"
// sử dụng cho những router không cần đăng nhập
const pulicRouter = [
    {
        path: '/', component: Home,
    },
    {
        path: '/@:nickname', component: Profile,
    },
    {
        path: '/Upload', component: Upload, 
        layout: HeaderOnly
    },
    {
        path: '/Search', component: Search, 
        layout: null
    },
    {
        path: '/Following', component: Following
    }
]

// sử dụng cho những router  cần đăng nhập nếu cố tình sử dụng sẽ đưa đến trang login 
const privateRoutes = [

]

export {pulicRouter, privateRoutes}