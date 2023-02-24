import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import '../css/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar-container">
            <a className='sidebar-route active'>
                <HomeIcon/>
                <p className='sidebar-route-name'>Inicio</p>
            </a>
            <a className='sidebar-route'>
                <AddIcon/>
                <p className='sidebar-route-name'>Crear Viaje</p>
            </a>
            <a className='sidebar-route'>
                <PersonIcon/>
                <p className='sidebar-route-name'>Perfil</p>
            </a>
            <a className='sidebar-route logout' >
                <LogoutIcon/>
                <p className='sidebar-route-name'>Salir</p>
            </a>
        </div>
    )
}

export default Sidebar;