import React, { useEffect, useState } from 'react'
import './ActivityDash.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import axios from "axios";


function ActivityDash() {

  const [youngerCards, setYoungerCards] = useState([]);
  const [olderCards, setOlderCards] = useState([]);
  const [familyCards, setFamilyCards] = useState([]);
  const [visibleYounger, setVisibleYounger] = useState(3);
  const [showYounger, setShowYounger] = useState(false);
  const [visibleOlder, setVisibleOlder] = useState(3);
  const [showOlder, setShowOlder] = useState(false);
  const [visibleFamily, setVisibleFamily] = useState(3);
  const [showFamily, setShowFamily] = useState(false);

  // Younger dashboard states
  const [openAddYounger, setOpenAddYounger] = useState({
    toggle: false,
  });
  const [openEditYounger, setOpenEditYounger] = useState({
    toggle: false,
    id: null,
  });
  const [openDeleteYounger, setOpenDeleteYounger] = useState({
    toggle: false,
    id: null,
  });
  const [cardTitleYounger, setCardTitleYounger] = useState("");
  const [cardDescriptionYounger, setCardDescriptionYounger] = useState("");
  const [cardImageYounger, setCardImageYounger] = useState("");

  const handleUpdateYounger = async () => {
    const form = new FormData();
    form.append('cardImage', cardImageYounger);
    form.append('cardTitle', cardTitleYounger);
    form.append('cardDescription', cardDescriptionYounger);
    try {
      const response = await axios.put(`https://dravet-syndrome.onrender.com/api/younger/${openEditYounger.id}`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      setCardDescriptionYounger('')
      setCardTitleYounger('')
      setCardImageYounger('')
      youngerRequest();
      setOpenEditYounger(!openEditYounger.toggle)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddYounger = async () => {
    const form = new FormData();
    form.append('cardImage', cardImageYounger);
    form.append('cardTitle', cardTitleYounger);
    form.append('cardDescription', cardDescriptionYounger);
    try {
      const response = await axios.post(`https://dravet-syndrome.onrender.com/api/younger`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      youngerRequest();
      setOpenAddYounger(!openAddYounger.toggle)
    } catch (err) {
      console.log(err)
    }
  }

  const DeleteYounger = async (id) => {
    try {
      const res = await axios.delete(`https://dravet-syndrome.onrender.com/api/younger/${openDeleteYounger.id}`,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      const response = await res.data;
      console.log(response);
      youngerRequest();
      setOpenDeleteYounger(!openDeleteYounger.toggle)

    } catch (err) {
      console.log(err);
    }
  }

  // Older dashboard states
  const [openAddOlder, setOpenAddOlder] = useState({
    toggle: false,
  });
  const [openEditOlder, setOpenEditOlder] = useState({
    toggle: false,
    id: null,
  });
  const [openDeleteOlder, setOpenDeleteOlder] = useState({
    toggle: false,
    id: null,
  });
  const [cardTitleOlder, setCardTitleOlder] = useState("");
  const [cardDescriptionOlder, setCardDescriptionOlder] = useState("");
  const [cardImageOlder, setCardImageOlder] = useState("");

  const handleUpdateOlder = async () => {
    const form = new FormData();
    form.append('cardImage', cardImageOlder);
    form.append('cardTitle', cardTitleOlder);
    form.append('cardDescription', cardDescriptionOlder);
    try {
      const response = await axios.put(`https://dravet-syndrome.onrender.com/api/older/${openEditOlder.id}`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      setCardDescriptionOlder('')
      setCardTitleOlder('')
      setCardImageOlder('')
      olderRequest();
      setOpenEditOlder(!openEditOlder.toggle)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddOlder = async () => {
    const form = new FormData();
    form.append('cardImage', cardImageOlder);
    form.append('cardTitle', cardTitleOlder);
    form.append('cardDescription', cardDescriptionOlder);
    try {
      const response = await axios.post(`https://dravet-syndrome.onrender.com/api/older`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      olderRequest();
      setOpenAddOlder(!openAddOlder.toggle)
    } catch (err) {
      console.log(err)
    }
  }

  const DeleteOlder = async (id) => {
    try {
      const res = await axios.delete(`https://dravet-syndrome.onrender.com/api/older/${openDeleteOlder.id}`,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      const response = await res.data;
      console.log(response);
      olderRequest();
      setOpenDeleteOlder(!openDeleteOlder.toggle)

    } catch (err) {
      console.log(err);
    }
  }

  // Family dashboard states
  const [openAddFamily, setOpenAddFamily] = useState({
    toggle: false,
  });
  const [openEditFamily, setOpenEditFamily] = useState({
    toggle: false,
    id: null,
  });
  const [openDeleteFamily, setOpenDeleteFamily] = useState({
    toggle: false,
    id: null,
  });
  const [cardTitleFamily, setCardTitleFamily] = useState("");
  const [cardDescriptionFamily, setCardDescriptionFamily] = useState("");
  const [cardImageFamily, setCardImageFamily] = useState("");

  const handleUpdateFamily = async () => {
    const form = new FormData();
    form.append('cardImage', cardImageFamily);
    form.append('cardTitle', cardTitleFamily);
    form.append('cardDescription', cardDescriptionFamily);
    try {
      const response = await axios.put(`https://dravet-syndrome.onrender.com/api/family/${openEditFamily.id}`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      setCardDescriptionFamily('')
      setCardTitleFamily('')
      setCardImageFamily('')
      familyRequest();
      setOpenEditFamily(!openEditFamily.toggle)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddFamily = async () => {
    const form = new FormData();
    form.append('cardImage', cardImageFamily);
    form.append('cardTitle', cardTitleFamily);
    form.append('cardDescription', cardDescriptionFamily);
    try {
      const response = await axios.post(`https://dravet-syndrome.onrender.com/api/family`, form,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        })
      const res = await response.data;
      console.log(res)
      familyRequest();
      setOpenAddFamily(!openAddFamily.toggle)
    } catch (err) {
      console.log(err)
    }
  }

  const DeleteFamily = async (id) => {
    try {
      const res = await axios.delete(`https://dravet-syndrome.onrender.com/api/family/${openDeleteFamily.id}`,
        {
          content: "application/json",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      const response = await res.data;
      console.log(response);
      familyRequest();
      setOpenDeleteFamily(!openDeleteFamily.toggle)

    } catch (err) {
      console.log(err);
    }
  }

  const showMoreYounger = () => {
    if (!showYounger) {
      setVisibleYounger((prevValue) => prevValue + youngerCards.length);
    } else {
      setVisibleYounger((prevValue) => prevValue - youngerCards.length);
    }
  };

  const showMoreOlder = () => {
    if (!showOlder) {
      setVisibleOlder((prevValue) => prevValue + olderCards.length);
    } else {
      setVisibleOlder((prevValue) => prevValue - olderCards.length);
    }
  };

  const showMoreFamily = () => {
    if (!showFamily) {
      setVisibleFamily((prevValue) => prevValue + familyCards.length);
    } else {
      setVisibleFamily((prevValue) => prevValue - familyCards.length);
    }
  };

  const youngerRequest = async () => {
    try {
      const response = await fetch('https://dravet-syndrome.onrender.com/api/younger');
      const res = await response.json();
      setYoungerCards(res)
    } catch (err) {
      console.log(err)
    }

  }

  const olderRequest = async () => {
    try {
      const response = await fetch('https://dravet-syndrome.onrender.com/api/older');
      const res = await response.json();
      setOlderCards(res)
    } catch (err) {
      console.log(err)
    }

  }


  const familyRequest = async () => {
    try {
      const response = await fetch('https://dravet-syndrome.onrender.com/api/family');
      const res = await response.json();
      setFamilyCards(res)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    youngerRequest();
    olderRequest();
    familyRequest();
    Aos.init();
  }, [])

  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 id='activity-header' className="fw-bold fs-1" data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1500">
              <span id="activity-orange"> Activities </span>
              for
              <span className="b-class-secondary"> You </span>
              and Your
              <span className="b-class-secondary"> Child </span>


            </h2>
          </div>
        </div>

        <div id='younger-children'>
          <h2><span id='activity-span'> Younger Children</span></h2>
          <button
            className="add-button-resource"
            onClick={() => {
              setOpenAddYounger({ toggle: true });

            }}
          >
            Add
            < AddIcon />
          </button>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            {youngerCards &&
              youngerCards.slice(0, visibleYounger).map((obj) => {
                return (
                  <div key={obj._id} className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src={obj.cardImage.url} alt='activity' />
                      </div>
                      <h3>{obj.cardTitle}</h3>
                      <p>
                        {obj.cardDescription}
                      </p>
                      <button
                        className="delete-button-resource"
                        onClick={() => {
                          setOpenDeleteYounger({ toggle: true, id: obj._id });
                        }}
                      >
                        <DeleteForeverIcon />
                      </button>

                      <button
                        className="edit-button-resource"
                        onClick={() => {
                          setOpenEditYounger({ toggle: true, id: obj._id });
                          setCardTitleYounger(obj.cardTitle);
                          setCardDescriptionYounger(obj.cardDescription);
                          setCardImageYounger(obj.cardImage);
                        }}
                      >
                        <EditIcon />
                      </button>
                    </div>

                  </div>)
              })}


            {openDeleteYounger.toggle &&
              <Dialog open={openDeleteYounger.toggle} onClose={() => setOpenDeleteYounger(!openDeleteYounger.toggle)}>
                <div>
                  <p>Are you sure you want to delete?</p>
                  <button onClick={DeleteYounger}>Delete</button>
                  <button onClick={() => setOpenDeleteYounger(!openDeleteYounger.toggle)}>Cancel</button>
                </div>
              </Dialog>
            }
            {openEditYounger.toggle && (
              <Dialog open={openEditYounger.toggle} onClose={() => setOpenEditYounger(!openEditYounger.toggle)}>
                <div className="popup-form">
                  <form className="card-form">
                    <button className="Exit-about" onClick={() => { setOpenEditYounger(!openEditYounger.toggle) }}>
                      ❌
                    </button>
                    <div className="form-group">
                      <label className="form-label">
                        Card Title:
                        <input
                          className="form-input"
                          type="text"
                          value={cardTitleYounger}
                          onChange={(e) => setCardTitleYounger(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Description:
                        <textarea
                          className="form-textarea"
                          value={cardDescriptionYounger}
                          onChange={(e) => setCardDescriptionYounger(e.target.value)}
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Image:
                        <input
                          className="form-input"
                          type="file"
                          onChange={(e) => setCardImageYounger(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button className="form-button" type="button" onClick={handleUpdateYounger}>
                      Update
                    </button>
                  </form>
                </div>
              </Dialog>
            )}

            {openAddYounger.toggle && (
              <Dialog open={openAddYounger.toggle} onClose={() => setOpenAddYounger(!openAddYounger.toggle)}>

                <div className="popup-form">
                  <form className="card-form">
                    <button className="Exit-about" onClick={() => { setOpenAddYounger(!openAddYounger.toggle) }}>
                      ❌
                    </button>
                    <div className="form-group">
                      <label className="form-label">
                        Card Title:
                        <input
                          className="form-input"
                          type="text"
                          value={cardTitleYounger}
                          onChange={(e) => setCardTitleYounger(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Description:
                        <textarea
                          className="form-textarea"
                          value={cardDescriptionYounger}
                          onChange={(e) => setCardDescriptionYounger(e.target.value)}
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Image:
                        <input
                          className="form-input"
                          type="file"
                          onChange={(e) => setCardImageYounger(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button className="form-button" type="button" onClick={handleAddYounger}>
                      Add Card
                    </button>
                  </form>
                </div>
              </Dialog>

            )}


            <div className='activity-div-button'>
              <button className='activity-button' onClick={() => {
                showMoreYounger();
                setShowYounger(!showYounger);
              }}>
                <div className='activity-button__line'></div>
                <div className='activity-button__line'></div>
                <span className='activity-button__text'>
                  {!showYounger ? "See More" : "See Less"}
                </span>
                <div className='activity-button__drow1'></div>
                <div className='activity-button__drow2'></div>
              </button>
            </div>

          </div>
        </div>
        <hr />
        <div id='older-children'>
          <h2><span id='activity-span'> Older Children</span></h2>
          <p id='activity-text'>These activities can be fun for adults with Dravet syndrome, too.</p>
          <button
            className="add-button-resource"
            onClick={() => {
              setOpenAddOlder({ toggle: true });

            }}
          >
            Add
            < AddIcon />
          </button>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            {olderCards &&
              olderCards.slice(0, visibleOlder).map((obj) => {
                return (
                  <div key={obj._id} className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src={obj.cardImage.url} alt='activity' />
                      </div>
                      <h3>{obj.cardTitle}</h3>
                      <p>
                        {obj.cardDescription}
                      </p>
                      <button
                        className="delete-button-resource"
                        onClick={() => {
                          setOpenDeleteOlder({ toggle: true, id: obj._id });
                        }}
                      >
                        <DeleteForeverIcon />
                      </button>

                      <button
                        className="edit-button-resource"
                        onClick={() => {
                          setOpenEditOlder({ toggle: true, id: obj._id });
                          setCardTitleOlder(obj.cardTitle);
                          setCardDescriptionOlder(obj.cardDescription);
                          setCardImageOlder(obj.cardImage);
                        }}
                      >
                        <EditIcon />
                      </button>
                    </div>
                  </div>)
              })}



            {openDeleteOlder.toggle &&
              <Dialog open={openDeleteOlder.toggle} onClose={() => setOpenDeleteOlder(!openDeleteOlder.toggle)}>
                <div>
                  <p>Are you sure you want to delete?</p>
                  <button onClick={DeleteOlder}>Delete</button>
                  <button onClick={() => setOpenDeleteOlder(!openDeleteOlder.toggle)}>Cancel</button>
                </div>
              </Dialog>
            }
            {openEditOlder.toggle && (
              <Dialog open={openEditOlder.toggle} onClose={() => setOpenEditOlder(!openEditOlder.toggle)}>
                <div className="popup-form">
                  <form className="card-form">
                    <button className="Exit-about" onClick={() => { setOpenEditOlder(!openEditOlder.toggle) }}>
                      ❌
                    </button>
                    <div className="form-group">
                      <label className="form-label">
                        Card Title:
                        <input
                          className="form-input"
                          type="text"
                          value={cardTitleOlder}
                          onChange={(e) => setCardTitleOlder(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Description:
                        <textarea
                          className="form-textarea"
                          value={cardDescriptionOlder}
                          onChange={(e) => setCardDescriptionOlder(e.target.value)}
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Image:
                        <input
                          className="form-input"
                          type="file"
                          onChange={(e) => setCardImageOlder(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button className="form-button" type="button" onClick={handleUpdateOlder}>
                      Update
                    </button>
                  </form>
                </div>
              </Dialog>
            )}

            {openAddOlder.toggle && (
              <Dialog open={openAddOlder.toggle} onClose={() => setOpenAddOlder(!openAddOlder.toggle)}>

                <div className="popup-form">
                  <form className="card-form">
                    <button className="Exit-about" onClick={() => { setOpenAddOlder(!openAddOlder.toggle) }}>
                      ❌
                    </button>
                    <div className="form-group">
                      <label className="form-label">
                        Card Title:
                        <input
                          className="form-input"
                          type="text"
                          value={cardTitleOlder}
                          onChange={(e) => setCardTitleOlder(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Description:
                        <textarea
                          className="form-textarea"
                          value={cardDescriptionOlder}
                          onChange={(e) => setCardDescriptionOlder(e.target.value)}
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Image:
                        <input
                          className="form-input"
                          type="file"
                          onChange={(e) => setCardImageOlder(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button className="form-button" type="button" onClick={handleAddOlder}>
                      Add Card
                    </button>
                  </form>
                </div>
              </Dialog>

            )}


            <div className='activity-div-button'>
              <button className='activity-button' onClick={() => {
                showMoreOlder();
                setShowOlder(!showOlder);
              }}>
                <div className='activity-button__line'></div>
                <div className='activity-button__line'></div>
                <span className='activity-button__text'>
                  {!showOlder ? "See More" : "See Less"}
                </span>
                <div className='activity-button__drow1'></div>
                <div className='activity-button__drow2'></div>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div id='family'>
          <h2>
            Fun Activities for the <span id='activity-span'>Entire Family</span></h2>
          <p id='activity-text'>In families with multiple children, it can be difficult to get everyone together.
            We understand that it can be even more challenging in families who have a child with Dravet syndrome.
            6 Here are some easy, fun activities that the family can do together:</p>
          <button
            className="add-button-resource"
            onClick={() => {
              setOpenAddFamily({ toggle: true });

            }}
          >
            Add
            < AddIcon />
          </button>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">

            {familyCards &&
              familyCards.slice(0, visibleFamily).map((obj) => {
                return (
                  <div key={obj._id} className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src={obj.cardImage.url} alt='activity' />
                      </div>
                      <h3>{obj.cardTitle}</h3>
                      <p>
                        {obj.cardDescription}
                      </p>
                      <button
                        className="delete-button-resource"
                        onClick={() => {
                          setOpenDeleteFamily({ toggle: true, id: obj._id });
                        }}
                      >
                        <DeleteForeverIcon />
                      </button>

                      <button
                        className="edit-button-resource"
                        onClick={() => {
                          setOpenEditFamily({ toggle: true, id: obj._id });
                          setCardTitleFamily(obj.cardTitle);
                          setCardDescriptionFamily(obj.cardDescription);
                          setCardImageFamily(obj.cardImage);
                        }}
                      >
                        <EditIcon />
                      </button>
                    </div>
                  </div>)
              })}

            {openDeleteFamily.toggle &&
              <Dialog open={openDeleteFamily.toggle} onClose={() => setOpenDeleteFamily(!openDeleteFamily.toggle)}>
                <div>
                  <p>Are you sure you want to delete?</p>
                  <button onClick={DeleteFamily}>Delete</button>
                  <button onClick={() => setOpenDeleteFamily(!openDeleteFamily.toggle)}>Cancel</button>
                </div>
              </Dialog>
            }
            {openEditFamily.toggle && (
              <Dialog open={openEditFamily.toggle} onClose={() => setOpenEditFamily(!openEditFamily.toggle)}>
                <div className="popup-form">
                  <form className="card-form">
                    <button className="Exit-about" onClick={() => { setOpenEditFamily(!openEditFamily.toggle) }}>
                      ❌
                    </button>
                    <div className="form-group">
                      <label className="form-label">
                        Card Title:
                        <input
                          className="form-input"
                          type="text"
                          value={cardTitleFamily}
                          onChange={(e) => setCardTitleFamily(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Description:
                        <textarea
                          className="form-textarea"
                          value={cardDescriptionFamily}
                          onChange={(e) => setCardDescriptionFamily(e.target.value)}
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Image:
                        <input
                          className="form-input"
                          type="file"
                          onChange={(e) => setCardImageFamily(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button className="form-button" type="button" onClick={handleUpdateFamily}>
                      Update
                    </button>
                  </form>
                </div>
              </Dialog>
            )}

            {openAddFamily.toggle && (
              <Dialog open={openAddFamily.toggle} onClose={() => setOpenAddFamily(!openAddFamily.toggle)}>

                <div className="popup-form">
                  <form className="card-form">
                    <button className="Exit-about" onClick={() => { setOpenAddFamily(!openAddFamily.toggle) }}>
                      ❌
                    </button>
                    <div className="form-group">
                      <label className="form-label">
                        Card Title:
                        <input
                          className="form-input"
                          type="text"
                          value={cardTitleFamily}
                          onChange={(e) => setCardTitleFamily(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Description:
                        <textarea
                          className="form-textarea"
                          value={cardDescriptionFamily}
                          onChange={(e) => setCardDescriptionFamily(e.target.value)}
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Card Image:
                        <input
                          className="form-input"
                          type="file"
                          onChange={(e) => setCardImageFamily(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button className="form-button" type="button" onClick={handleAddFamily}>
                      Add Card
                    </button>
                  </form>
                </div>
              </Dialog>

            )}

            <div className='activity-div-button'>
              <button className='activity-button' onClick={() => {
                showMoreFamily();
                setShowFamily(!showFamily);
              }}>
                <div className='activity-button__line'></div>
                <div className='activity-button__line'></div>
                <span className='activity-button__text'>
                  {!showFamily ? "See More" : "See Less"}
                </span>
                <div className='activity-button__drow1'></div>
                <div className='activity-button__drow2'></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivityDash