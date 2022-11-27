import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserDashboard = () => {

    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false)


    useEffect(()=>{
        const getAllUsers = () => {
           
          axios.get(`http://localhost:3001/users/all`)                
          .then((response) => {
            console.log(response)
            setUsers(response.data.users)
          })
        }
      getAllUsers()
    }, [])

    const toggleDash = () => {
        setShow(!show)
    }
    

    return (
        <div className='dashboardContainer'>
        <button onClick={()=>{toggleDash()}}>Display</button>
            {show?
            
            <div> 
            {users.map((item, i)=>{
                return (
                    <div >
                        <div className="dashboardUserInfo">
                            <p> {item.firstName}</p>
                            <p> {item.lastName}</p>
                            <p> {item.createdAt}</p>
                        </div>
                    </div>
                )
            })}
            </div>
            :
            null
            }
        </div>
    )
}

export default UserDashboard
