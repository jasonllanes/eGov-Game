
import { Link } from 'react-router-dom'

function NavLink({to,text}:any) {
  return (
    <Link className=" hover:font-semibold transition-all duration-75" to={to} >{text}</Link>
  )
}

export default NavLink