import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import LanguageIcon from '@material-ui/icons/Language';
import { Translate } from '@material-ui/icons';
import {Link} from 'react-router-dom'

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            
            <Menu>
                <Link to={'/'}>
                <a href ="#">Saksham Bejwani</a>
                </Link>
                
                <a href ="#">Software</a>
                <a href ="#">Mechatronics</a>
                
                
            </Menu>
            <RightMenu>
                <Link to={'/contact'}>
                    <a>Contact</a>
                </Link>
            </RightMenu>
                

                
            
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    justify-content: space-between;
    z-index:1;
`

const Menu = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    flex:1;


    a { 
        font-size:14px;
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
        letter-spacing:1px;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a { font-size:14px;
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`


 