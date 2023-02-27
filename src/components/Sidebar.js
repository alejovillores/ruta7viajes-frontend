import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import '../css/Sidebar.css'
import { Outlet, Link } from "react-router-dom";


function Sidebar() {
    return (
        <div className="sidebar-container">
            <Link to="/" className='sidebar-route active'>
                <HomeIcon/>
                <p className='sidebar-route-name'>Inicio</p>
            </Link>
            <Link  className='sidebar-route'>
                <AddIcon/>
                <p className='sidebar-route-name'>Crear Viaje</p>
            </Link>
            <Link to="perfil" className='sidebar-route'>
                <PersonIcon/>
                <p className='sidebar-route-name'>Perfil</p>
            </Link>
            <Link className='sidebar-route logout' >
                <LogoutIcon/>
                <p className='sidebar-route-name'>Salir</p>
            </Link>
            <Outlet />
        </div>
    )
}

export default Sidebar;