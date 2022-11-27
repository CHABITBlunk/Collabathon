import './App.css';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';
import Signup from './components/Signup';
import Login from './components/Login';
import axios from 'axios';
import UserDashboard from './pages/UserDashboard';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage';

function App() {

  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);

  const [user, setUser] = useState('')

  const [showDashboard, setShowDashboard] = useState(false)

  const handleSignupOpen = () => {setSignupShow(true)};
  const handleSignupClose = () => {setSignupShow(false)};
  const handleLoginOpen = () => {setLoginShow(true)};
  const handleLoginClose = () => {setLoginShow(false)};


  useEffect(()=>{
    const fetchUser = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
       
      axios.get(`http://localhost:3001/users/verify`, {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        console.log(response)
        setUser(response.data.user)
      })
    }
  }
  fetchUser()
}, [user.id])



  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className='title'>Beauty Rank</Navbar.Brand>
        <div className='categories'>
          <p>MAKEUP </p>
          <p>SKINCARE </p>
          <p>HAIR </p>
          <p>RANKING </p>
          <p>BRANDS </p>
        </div>
      
        {!user.id?
            <div>
             <Button variant="primary" onClick={handleSignupOpen}>
                Sign Up
              </Button>
              <Button variant="primary" onClick={handleLoginOpen}>
                Log In
              </Button>
            </div>
         
          :
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto"> */}
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
   
            {/* the drop down to decide if the dashboard shows or not */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
            {user.id === 1 
             ?
             <div>
              <NavDropdown.Item>Account Settings</NavDropdown.Item>
              <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                <NavDropdown.Item>
              <Link to='/dashboard' onClick={()=>{setShowDashboard(!showDashboard)}}>
                <p>Dashboard</p>
              </Link>
                 </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/' onClick={()=>{
                localStorage.removeItem('userId')
                setUser({})}}>Logout</NavDropdown.Item>
              </div>
            //   {/* </NavDropdown> */}
              
            // {/* </Nav> */}
            :
            <div>yu      
            <NavDropdown.Item >Account Settings</NavDropdown.Item>
              <NavDropdown.Item>Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  href='/' onClick={()=>{
                localStorage.removeItem('userId')
                setUser({})}}>Logout</NavDropdown.Item>
            </div>
          }
          </Navbar.Collapse>
          </div>
            }
        </Container>
      </Navbar>
     

      <Signup show={signupShow} onHide={handleSignupClose} setUser={setUser}/>
      <Login show={loginShow} onHide={handleLoginClose} setUser={setUser}/>
      <Routes>
        {/* <Route path='/' element={<Homepage/>} /> */}
        <Route path='/dashboard' element={
          user.id === 1
          ?
          <UserDashboard /> 
          :
          null
        }/>
      </Routes>
      <Homepage />
    </div>
  );
}

export default App;
