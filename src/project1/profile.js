import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Addressmodal from '../addressmodal';
import './profile.css'
import {useSelector,useDispatch}from "react-redux"
import { user,remove } from '../profilelogics';
import Updateaddress from '../updateaddressmodal';
import { Link } from 'react-router-dom';
function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const item = useSelector(user)

const dispatch=useDispatch()
  return (
    <>
      <div className='profile-btn'>
      <span class="material-symbols-outlined" onClick={handleShow}>
person
</span>
      </div>
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>
           <div>
            <img src='https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000' height='10%' width='50%'/>
            </div>
            <div>
                <h1>Philip</h1>
                <h3>pinagasphilip@gmail.com</h3>
            </div>
            <div className='profile-address'>
                <p>Address </p>
        <Addressmodal/>
            </div>
            {
                item.map((val)=>{
                    return(
                        <div className='profile-add'>
                <p>{val.houseno}</p>
                <p>{val.city}</p>
                <p>{val.pincode}</p>
                <div className='profile-crudbtn'>
                    <Updateaddress />
                    <button className='btn btn-primary' onClick={()=>dispatch(remove(val.houseno))}>delete</button>
                    </div>
            </div>
        

                    )
                })
            }
            <div className='profile-btn'>
            <button className='btn btn-primary'><Link to="/">logout</Link></button>
            </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Profile