import React, { useEffect, useState } from 'react'
import { getAllUsersAPI } from '../src/Services/allAPI'
import { Link, useNavigate } from 'react-router-dom'

function ViewTable() {

    const [allUsers,setAllUsers] = useState([])
    const navigate = useNavigate()

    const getAllUsers = async()=>{
        const result = await getAllUsersAPI()
        if(result.status===200){
            setAllUsers(result.data)
        }
        else{
            console.log(result);
        }
    }
    
    // console.log(allUsers);

    useEffect(()=>{
        getAllUsers()
    },[])

  return (
    <>
        <div style={{width:'100%',height:'100vh'}} className='bg-primary p-4'>
            <div className='d-flex justify-content-between  align-items-center '>
                <h1 className='mt-4 fs-2 text-success'>Student Details</h1>
                <Link to={'/'} className='btn btn-info'><i class="fa-solid fa-arrow-left fa-lg"></i>Registration</Link>
            </div>
           

            <table className='table table-dark mt-4' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Course</th>
                    </tr>
                </thead>
                {
                    allUsers?.length>0?allUsers.map((user,index)=>(
                        <tbody key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.dob}</td>
                                <td>{user.course}</td>
                            </tr>
                        </tbody>
    
                    )):null
                }
            </table>

        </div>
    </>
  )
}

export default ViewTable