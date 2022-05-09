import UserBox from "./UserBox"
import Sugestions from "./Sugestions"
import FootBar from "./FootBar"
export default function SideBar(){
    return(
        <div class="sidebar">
            <UserBox username="catanacomics" name="Catana"/>
            <Sugestions/>
            <FootBar/>
        </div>
    )
}