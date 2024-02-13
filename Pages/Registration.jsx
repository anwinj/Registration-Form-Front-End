import React, { useState } from 'react'
import registrationImage from '../src/assets/Images/registration.png'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../src/Services/allAPI';

function Registration() {

    const [userData,setUserData] = useState({
        name:"",address:"",mobile:"",email:"",gender:"",dob:"",course:""
    })
    const navigate = useNavigate()

    const handleRegister = async (e)=>{
        e.preventDefault()
        // console.log(userData);
        const {name,address,mobile,email,gender,dob,course} = userData
        if(!name||!address||!mobile||!email||!gender||!dob||!course){
            toast.info("Please fill the form completely")
        }
        else{
            try{
                const result = await registerAPI(userData)
                // console.log(result);
                if(result.status===200){
                    toast.success(`${result.data.name} has registered successfully!!!`)
                    setUserData({name:"",address:"",mobile:"",email:"",gender:"",dob:"",course:""})
                    setTimeout(()=>{
                        navigate('/table')
                    },2000)
                }
                else{
                    toast.warning(result.response.data)
                }
            }catch(err){
                console.log(err);
            }
        }
    }

    const clearData = ()=>{
        setUserData({name:"",address:"",mobile:"",email:"",gender:"",dob:"",course:""})
    }

    

  return (
    <>
        <div style={{width:'100%',height:'100vh'}} className='row'>
            <div className="col-lg-4 ps-5 shadow bg-primary d-flex flex-column justify-content-center  align-items-center p-4">
                <h1 className='text-success fs-2 mb-4'>Higher Secondary Registration</h1>
                <p className='fs-5 text-secondary mb-5'>This is the registration form to apply higher secondary admission for students.</p>
                <img width={'400px'} src={registrationImage} alt="" />
            </div>

            <div className="col-lg-8 bg-light">
                <h3 className='mt-5 ms-3'>Registration form</h3>
                <div className='mt-5 p-3 d-flex justify-content-evenly flex-wrap  '>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={userData.name} onChange={e=>setUserData({...userData,name:e.target.value})} style={{width:'375px'}} type="text"  placeholder="Please Enter your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control value={userData.address} onChange={e=>setUserData({...userData,address:e.target.value})} as="textarea" rows={3}  placeholder='Please Enter your Address'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control value={userData.gender} onChange={e=>setUserData({...userData,gender:e.target.value})} style={{width:'375px'}} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Course</Form.Label>
                                <Form.Select value={userData.course} onChange={e=>setUserData({...userData,course:e.target.value})} aria-label="Default select example">
                                    <option disabled>Choose your course option</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Humanities">Humanities</option>
                                </Form.Select>
                            </Form.Group>
        
                        </Form>
                    </div>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} style={{width:'375px'}} type="email" placeholder="Please Enter your Email" />
                            </Form.Group>

                            <Form.Group  style={{marginBottom:'65px'}} controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control value={userData.mobile} onChange={e=>setUserData({...userData,mobile:e.target.value})} style={{width:'375px'}} type="phone" placeholder="Please Enter your Mobile no." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control value={userData.dob} onChange={e=>setUserData({...userData,dob:e.target.value})} style={{width:'375px'}} type="date" placeholder="Please Enter your Mobile no." />
                            </Form.Group>
        
                        </Form>
                    </div>
                </div>

                <div className='mt-4 d-flex justify-content-center align-items-center '>
                    <button onClick={handleRegister} className='btn btn-success me-5 px-3'>Register</button>
                    <button onClick={clearData} className='btn btn-secondary px-3'>Cancel</button>
                </div>
            </div>
        </div>

        <ToastContainer position="top-right" autoClose={5000} theme="colored"/>
    </>
  )
}

export default Registration