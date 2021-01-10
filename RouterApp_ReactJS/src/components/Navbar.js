import React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'

const Navbar = (props)=>{
    // console.log(props)
    setTimeout(()=>{
        props.history.push('/about')

    },5000)
return(
    <nav className= 'nav-wrapper red darken-3'>

        <div className= 'container'>
          <a  href="a" className = 'brand-logo'>KOOL'Time </a>
            <ul className='right'>
                <li> <Link to ='/' >Home</Link></li>
                <li> <NavLink to='/about' >About</NavLink></li>
                <li> <NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </nav>

)

}
export default withRouter(Navbar)