import { Link } from "react-router-dom"
import './Menu.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Menu = () => {
    return (
        <nav>
                <Link to='/'>Sobre</Link>
                <Link to='/projeto'>Projeto</Link>
                <Link to='/contato'>Contato</Link>

        <BottomNavigation
        showLabels
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>

        </nav>
    )
}