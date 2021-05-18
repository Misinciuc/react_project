import './Userinfo.css';
import User_birth from './Userinfo/User_birth';
import User_det from './Userinfo/User_birth';
const User_info = () => {
    return(
      <div className="user_info">
            <h3>Iurcik M</h3>
            <User_birth mesage='12april'/>
            <User_birth mesage='15 june'/>
            <User_birth mesage='24 may'/>
            <User_birth mesage='23 mart'/>
      </div>
    )
  }
  export default User_info  