import React from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../reduxdata/UserSlice'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Menu() {
  const dispatch=useDispatch()
  const user = useSelector(state => state.cart.value)
  var length=Object(user).length
  // const card = useSelector(state => state.card.value.reduce((x,ob)=>ob. ?x+1:0))
  
  var logout = () => {
    dispatch(loginUser({
      token: undefined,
      loginstatus: false,
      username: undefined
    }))
  }

  return <>
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>
              Apnashop
            </span>
          </Link>
          <div className="navbar-collapse" id="">
            <div className="container">
              <div className=" mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav justify-content-between ">
                  <div className="d-none d-lg-flex">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Customer Number : 91875006001 </Link >
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        apnashop.as@gmail.com
                      </Link >
                    </li>
                  </div>
                  <div className=" d-none d-lg-flex">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    {user.loginStatus ?
                      <>
                        <li class="nav-item">
                          <b class="nav-link text-info">
                            {user.username}
                            <br />
                            <span onClick={logout}
                              style={{ cursor: 'pointer' }}>(Logout)</span>
                          </b>
                        </li>
                        <li class="nav-item">
                        <b class="nav-link text-info">Cart-{length}</b></li>
                        
                      </> : <>
                          <li class="nav-item">
                          <Link class="nav-link" to="/Login">
                            Login / Register
                          </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link text-info" to="/item"  >Cart-{length}</Link></li>
                      </>
                    }
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </>
}
