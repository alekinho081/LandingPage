import { Link } from "react-router-dom"
import './Menu.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';


export const Menu = () => {
    return (
        <nav >

        <BottomNavigation>
            <Link to='/'><BottomNavigationAction  icon={<HomeIcon sx={{color: 'white', fontSize:'30px'}}/>} /></Link>
            <Link to='/sobre'><BottomNavigationAction  icon={<InfoIcon sx={{color: 'white', fontSize:'30px'}}/>} /></Link>
            <Link to='/contato'><BottomNavigationAction  icon={<ContactPageIcon sx={{color: 'white', fontSize:'30px'}} />} /></Link>
        </BottomNavigation>

        </nav>
    )
}