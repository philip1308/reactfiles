import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { add } from './profilelogics';
import { useDispatch } from 'react-redux';

function Addressmodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [address,SetAddress]=useState(
    {
        houseno:"",
        city:"",
        pincode:""
    })

const dispatch = useDispatch()

    function createAddress(e)
    {
    let a={}
    a[e.target.name]=e.target.value
    SetAddress({...address,...a})
    }


function added()
{
    dispatch(add({houseno:address.houseno,city:address.city,pincode:address.pincode}))
    handleClose()
}

  
  return (
    <>
      
      <span class="material-symbols-outlined" onClick={handleShow} >
add_circle
</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <p>House no</p>
            <input type= "text" name="houseno" onChange={createAddress}/>
            <p>city</p>
            <input type= "text" name="city" onChange={createAddress}/>
            <p>pincode</p>
            <input type= "text" name="pincode" onChange={createAddress}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={added}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addressmodal