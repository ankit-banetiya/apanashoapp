import userService from '../Services/UserService'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { loginUser } from '../reduxdata/UserSlice'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const logStatus=useSelector(state=>state.user.value.loginStatus)
  
  var namebox = undefined
  var phonebox = undefined
  var emailbox = undefined
  var passbox = undefined
  var loginEmail = undefined
  var loginPassword = undefined

const [regMsg, setRegMsg] = useState("")
const [loginMsg, setloginMsg] = useState("")

const [isLoginStart, setIsLoginStart]= useState(false)
const [isRegStart, setIsRegStart]=useState(false)

  var saveuser = (event) => {
    setIsRegStart(true)

    var ob = {
      name: namebox.value,
      phone: phonebox.value,
      email: emailbox.value,
      password: passbox.value

    }
    console.log(ob)
    userService.registerUser(ob)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setIsRegStart(false)
        if (data.status){

          setRegMsg("Registeration Done !")
        }
        else
          setRegMsg("Registeration Failed !")
      })
      event.preventDefault()
  }



  var login = (event) => {
    setIsLoginStart(true)
    var obj = {
      email: loginEmail.value,
      password: loginPassword.value
    }
     console.log(obj)
    userService.loginUser(obj)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setIsLoginStart(false)
        if (data.status) {
          dispatch(loginUser({token:data.token,loginStatus:true,username:data.username}))
          
        } else {
          setloginMsg("login failed")

        }
      })
    event.preventDefault()
  }
  return logStatus?<Navigate to="/"/>:<>
     <br/>
    <div className="row">
      <div className='col-lg-6'>
        <h1 className='alert alert-info'>Registration</h1>
        <hr />
        <form onSubmit={saveuser}>
          <input className='form-control my-2' type="text" ref={c => namebox = c} placeholder='Enter Name'></input>
          <input className='form-control my-2' type="number" ref={c => phonebox = c} placeholder='Enter Number'></input>
          <input className='form-control my-2' type="email" ref={c => emailbox = c} placeholder='Enter Email'></input>
          <input className='form-control my-2' type="passward" ref={c => passbox = c} placeholder='Enter Passward'></input>
          <button className='btn btn-info'>Save</button>
          &nbsp;&nbsp;&nbsp;
          {isRegStart?<>
          <div className='spinner-grow spinner-grow-sm text-danger'></div>
          </>:<>
          <b className='text-danger'>{regMsg}</b>
          </>}
          
        </form>
      </div>


      <div className='col-lg-6'>
        <h1 className='alert alert-info'>Login</h1>
        <hr />
        <form onSubmit={login}>
          <input className='form-control my-2' ref={c => loginEmail = c} type="text" placeholder='Enter Email'></input>
          <input className='form-control my-2' ref={c => loginPassword = c} type="passward" placeholder='Enter Passward'></input>
          <button className='btn btn-info'>Login</button>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          
                  {isLoginStart?<>
                    <div class="spinner-grow spinner-grow-sm text-danger"></div>
                  </>:<>
                    <b className='text-danger'>{loginMsg}</b>
                  </>}
         
        </form>
      </div>



    </div>
  </>
}
