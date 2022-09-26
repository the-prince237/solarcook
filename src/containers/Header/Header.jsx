import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillShop, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { RiAccountCircleFill, RiShoppingCart2Fill } from 'react-icons/ri'

import { Wrapper, Navigator, FloatingSubNavSet, AccountBtn, FloatingSubNav, SubNavSeparator } from './style'

import { Logo } from '../../components'
import { CartContext } from '../../utils/context'

const Header = () => {

  const { toggleCart, cart } = useContext(CartContext)

  return (
    <Wrapper>
      <Logo />
      <Navigator>
        <ul>
          <li>
            <Link className='nav-link' to="/">
              <AiFillHome className='nav-icon'/>
              <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link className='nav-link' to="/all">
              <AiFillShop className='nav-icon' />
              <span>Market</span>
            </Link>
          </li>
          <li className='nav-link' onClick={() => toggleCart()}>
            <RiShoppingCart2Fill className='nav-icon' />
            <div className='cartItems-count'>{cart.items.length}</div>
            <span>panier</span>
          </li>
          <FloatingSubNavSet>
            <AccountBtn className='nav-link' to="/Account">
              <RiAccountCircleFill className='nav-icon'/>
              <span>Durin</span>
            </AccountBtn>
            <FloatingSubNav className="orofile-nav">
              <SubNavSeparator />
              <div className='floating-subnav__links'>
                <Link to="/account"><AiOutlineSetting className='nav-icon' /><span>Compte</span></Link>
                <Link to="/auth"><AiOutlineLogout className='nav-icon' /><span>Déconnexion</span></Link>  
              </div>
            </FloatingSubNav>
          </FloatingSubNavSet>
        </ul>
      </Navigator>
    </Wrapper>
  )
}

export default Header