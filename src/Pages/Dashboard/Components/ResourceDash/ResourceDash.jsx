import React, { useEffect, useState } from 'react'
import './ResourceDash.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ResourceDash() {
  const [resource, setResource] = useState([]);
  const [openEdit, setOpenEdit] = useState({
    toggle: false,
    id: null,
  });
  const [openDelete, setOpenDelete] = useState({
    toggle: false,
    id: null,
  });
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [openAdd, setOpenAdd] = useState({
    toggle: false,
  });

  const handleUpdateCard = async () => {
    const form = new FormData();
    form.append('cardImage', cardImage);
    form.append('cardTitle', cardTitle);
    form.append('cardDescription', cardDescription);
    try {
      const response = await axios.put(`https://dravet-syndrome.onrender.com/api/resource/${openEdit.id}`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      Request();
      setOpenEdit(!openEdit.toggle)
      toast.success('Updated successfully!');

    } catch (err) {
      console.log(err)
      toast.error('Error while updating!');

    }
  }

  const handleAddCard = async () => {
    const form = new FormData();
    form.append('cardImage', cardImage);
    form.append('cardTitle', cardTitle);
    form.append('cardDescription', cardDescription);
    try {
      const response = await axios.post(`https://dravet-syndrome.onrender.com/api/resource`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      Request();
      setOpenAdd(!openAdd.toggle)
      toast.success('Card added successfully!');

    } catch (err) {
      console.log(err)
      toast.error('Invalid data!');

    }
  }

  const DeleteCard = async (id) => {
    try {
      const res = await axios.delete(`https://dravet-syndrome.onrender.com/api/resource/${openDelete.id}`,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      const response = await res.data;
      console.log(response);
      Request();
      setOpenDelete(!openDelete.toggle)
      toast.success('Deleted successfully!');

    } catch (err) {
      console.log(err);
      toast.error('Error while deleting!');

    }
  }

  const Request = async () => {
    try {
      const response = await fetch('https://dravet-syndrome.onrender.com/api/resource');
      const res = await response.json();
      setResource(res)
      console.log(res)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    Request();
    Aos.init();
  }, [])

  return (
    <div className="homeresource-container-dash">
      <ToastContainer position="bottom-right" />

      <h1 className='resources-title-dash' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">Resources</h1>
      <button
        className="add-button-resource"
        onClick={() => {
          setOpenAdd({ toggle: true });

        }}
      >
        Add
        < AddIcon />
      </button>
      <div className="cards-dash">
        {resource.map((obj) => {
          return (
            <div key={obj._id} className='resource-card-dash' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <div className="resource-card-image-dash">
                <img src={`${obj.cardImage.url}`} alt='resource' />
              </div>
              <div className="resource-card-title-dash">
                <h4 id='fontsize-dash'>{obj.cardTitle}</h4>
              </div>
              <div className="resource-card-description-dash">
                <h4 id='fontsize-dash'>{obj.cardDescription}</h4>
              </div>
              <button
                className="delete-button-resource"
                onClick={() => {
                  setOpenDelete({ toggle: true, id: obj._id });
                }}
              >
                <DeleteForeverIcon />
              </button>

              <button
                className="edit-button-resource"
                onClick={() => {
                  setOpenEdit({ toggle: true, id: obj._id });
                  setCardTitle(obj.cardTitle);
                  setCardDescription(obj.cardDescription);
                  setCardImage(obj.cardImage);
                }}
              >
                <EditIcon />
              </button>
            </div>
          );
        })}
          {openDelete.toggle && (
              <Dialog open={openDelete.toggle} onClose={() => setOpenDelete(!openDelete.toggle)}>
                <div className="dialog-content">
                  <p className="dialog-message">Are you sure you want to delete?</p>
                  <button className="dialog-button" onClick={DeleteCard}>Delete</button>
                  <button className="dialog-button" onClick={() => setOpenDelete(!openDelete.toggle)}>Cancel</button>
                </div>
              </Dialog>
            )}
        {openEdit.toggle && (
          <Dialog open={openEdit.toggle} onClose={() => setOpenEdit(!openEdit.toggle)}>
            <div className="popup-form">
              <form className="card-form">
                <button className="Exit-about" onClick={() => { setOpenEdit(!openEdit.toggle) }}>
                  ❌
                </button>
                <div className="form-group">
                  <label className="form-label">
                    Card Title:
                    <input
                      className="form-input"
                      type="text"
                      value={cardTitle}
                      onChange={(e) => setCardTitle(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Card Description:
                    <textarea
                      className="form-textarea"
                      value={cardDescription}
                      onChange={(e) => setCardDescription(e.target.value)}
                    ></textarea>
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Card Image:
                    <input
                      className="form-input"
                      type="file"
                      onChange={(e) => setCardImage(e.target.files[0])}
                    />
                  </label>
                </div>
                <button className="form-button" type="button" onClick={handleUpdateCard}>
                  Update
                </button>
              </form>
            </div>
          </Dialog>
        )}

        {openAdd.toggle && (
          <Dialog open={openAdd.toggle} onClose={() => setOpenAdd(!openAdd.toggle)}>

            <div className="popup-form">
              <form className="card-form">
                <button className="Exit-about" onClick={() => { setOpenAdd(!openAdd.toggle) }}>
                  ❌
                </button>
                <div className="form-group">
                  <label className="form-label">
                    Card Title:
                    <input
                      className="form-input"
                      type="text"
                      value={cardTitle}
                      onChange={(e) => setCardTitle(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Card Description:
                    <textarea
                      className="form-textarea"
                      value={cardDescription}
                      onChange={(e) => setCardDescription(e.target.value)}
                    ></textarea>
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Card Image:
                    <input
                      className="form-input"
                      type="file"
                      onChange={(e) => setCardImage(e.target.files[0])}
                    />
                  </label>
                </div>
                <button className="form-button" type="button" onClick={handleAddCard}>
                  Add Card
                </button>
              </form>
            </div>
          </Dialog>

        )}



        <div className='resource-div-button'>
          <NavLink to='/dashboard/resource'>
            <button className='resource-button'>
              <div className='resource-button__line'></div>
              <div className='resource-button__line'></div>
              <span className='resource-button__text'>SHOW MORE</span>
              <div className='resource-button__drow1'></div>
              <div className='resource-button__drow2'></div>
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default ResourceDash