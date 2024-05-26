import ShowUser from "../../components/showusers/ShowUser"
import { HandleGetUsers } from "../../controllers/User"

function  ShowUsers() {   
    return (
        <div>
        <ShowUser loadMore={HandleGetUsers} type="all" />
    </div>
    )
}

export default ShowUsers;