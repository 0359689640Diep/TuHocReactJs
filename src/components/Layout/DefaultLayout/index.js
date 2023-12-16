import SideBar from "./SideBar";
import Header from "@/components/Layout/components/Header";

function DefaultLayout({children}) {
    return (
         <div>
            <Header/>
            <div className="container">{children}</div>
            <SideBar/>
         </div> 
    );
}

export default DefaultLayout;