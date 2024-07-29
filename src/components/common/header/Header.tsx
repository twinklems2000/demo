import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <p className="headerText">Good Morning!</p>
      <div className='desk'>
        <div className='deskContainer'>
            <p>Desk</p>
            <div className='arrowStyle' onClick={() => alert("You are on Desk")}>
                <KeyboardArrowDownIcon />
            </div>
        </div>
        <div className='floorContainer' onClick={() => alert("You are in Office")}>
            <p>Dublin Office</p>
            <div className='arrowStyle'>
                <KeyboardArrowDownIcon />
            </div>
        </div>
      </div>
      <div className="notificationContainer">
        <div className='ratingStyle'>
            <StarIcon />
            <p className='creditText'>5 Credits</p>
        </div>
        <div className='notificationStyle'>
            <NotificationsNoneIcon />
        </div>
        <img className='avtarStyle' src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png' />
      </div>
    </div>
  )
}

export default Header
