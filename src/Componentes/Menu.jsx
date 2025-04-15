import { Link } from "react-router-dom"
import './Menu.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';


export const Menu = () => {
    return (
        <nav >

        <BottomNavigation
        showLabels={true}
        >

            <Link to='/'><BottomNavigationAction label="Recents" icon={<InfoIcon sx={{color: 'white', fontSize:'30px'}}/>} /></Link>
            <Link to='/projeto'><BottomNavigationAction label="Favorites" icon={<AssignmentIcon sx={{color: 'white', fontSize:'30px'}} />} /></Link>
            <Link to='/contato'><BottomNavigationAction label="Nearby" icon={<ContactPageIcon sx={{color: 'white', fontSize:'30px'}} />} /></Link>
            
            
            
        </BottomNavigation>

        </nav>
    )
}