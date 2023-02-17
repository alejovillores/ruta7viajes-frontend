import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import '../css/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar-container">
            <button className='sidebar-route active'>
                <HomeIcon/>
                <p className='sidebar-route-name'>Inicio</p>
            </button>
            <button className='sidebar-route'>
                <PersonIcon/>
                <p className='sidebar-route-name'>Perfil</p>
            </button>
            <button className='sidebar-route logout' >
                <LogoutIcon/>
                <p className='sidebar-route-name'>Salir</p>
            </button>
        </div>
    )
}

export default Sidebar;