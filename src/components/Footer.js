import * as React from 'react'
import '../css/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

    return(
        <div className='footer-container'>
            <p>Diseñado por Alejo Villores - 2023</p>
            <div className='social-container'>
                <a style={{color: '#fb3958'}}><InstagramIcon/></a>
                <a style={{color: '#00a0dc'}}><LinkedInIcon/></a>
                <a style={{color: 'black'}}><GitHubIcon/></a>
            </div>
        </div>
    )
}