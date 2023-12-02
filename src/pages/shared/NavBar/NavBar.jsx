import { Link } from 'react-router-dom';
import logo from '../../../assets/ForkFableLogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCartArrowDown } from "react-icons/fa6";


const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .thne(() => {

      })
      .catch(e => console.error(e))
  }

  const navOptoins = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/orderfood/salad'>Order Food</Link></li>
    <li>
      <Link>
        <button className="btn btn-xs">
          <FaCartArrowDown></FaCartArrowDown>
          <div className="badge badge-secondary">+1</div>
        </button>
      </Link>
    </li>
  </>

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptoins}
            </ul>
          </div>
          <Link to='/'><img className='h-[50px]' src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptoins}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                  </div>
                </div>
                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      {user?.displayName}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
              :
              <>
                <Link to='/signup'>
                  <button className="btn me-5">Signup</button>
                </Link>
                <Link to='/login'>
                  <button className="btn">Login</button>
                </Link>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;