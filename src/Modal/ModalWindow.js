import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import "./ModalWindow.css";

Modal.setAppElement("#root");

function ModalWindow(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = async (formData) => {
    props.stateHotDog.items.forEach(element => {
      if(element.name === formData.name){
        alert(`Name ${formData.name} is already exist`)
      }
    });
    axios
      .post("https://morning-anchorage-00433.herokuapp.com/", formData)
      .then(({ data }) => {
        formData.isActive = false;
        formData._id = data._id;
        props.onAddHotDog([...props.stateHotDog.items, formData]);
        setModalIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="header">
      <div className="header-left-side"> 
        <img className="header-img" src="https://www.seriouseats.com/recipes/images/2014/02/20140128-hot-dogs-4505-meats-ryan-farr-63.jpg"/>
        <span className="crud-style">CRUD</span>
      </div>
      <button onClick={() => setModalIsOpen(true)}>Add new hot-dog</button>
      <Modal
        className="modal-window"
        isOpen={modalIsOpen}
        onRequestClose={() =>
          setModalIsOpen(false)
        }
      >
        <h2>Add hot-dog</h2>
        <ContactForm onSubmit={onSubmit} />
        <button className="close-btn" onClick={() => setModalIsOpen(false)}>
          No, thanks
        </button>
      </Modal>
    </div>
  );
}

<ContactForm />;

export default connect(
  (state) => ({
    stateHotDog: state.items,
  }),
  (dispatch) => ({
    onAddHotDog: (newHotDog) => {
      dispatch({ type: "ADD_HOTDOG", payload: newHotDog });
    },
  })
)(ModalWindow);