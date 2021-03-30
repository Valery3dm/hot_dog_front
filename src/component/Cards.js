import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from "axios";
import './Cards.css';


class Cards extends Component {
  constructor(props) {
    super(props);
    if (props) {
      axios
        .get(`https://morning-anchorage-00433.herokuapp.com/`)
        .then(({ data }) => {
          props.onStartApp(data);
        });
    }
  }

  handleDelete(_id) {
    const elementsToEdit = this.props.nameList.items.filter((el) => el._id !== _id);
    axios.delete(`https://morning-anchorage-00433.herokuapp.com/${_id}`);
    this.props.onHandleDelete(elementsToEdit);
  }
  handleCheck(_id) {
    const prevArr = this.props.nameList.items;
    const elementToEdit = this.props.nameList.items.filter((el) => el._id === _id)[0];
    elementToEdit.isActive = true;
    this.props.onHandleCheck(prevArr);
  }
  handleUpgrate(_id) {
    const prevArr = this.props.nameList.items;
    const elementToEdit = this.props.nameList.items.filter((el) => el._id === _id)[0];
    elementToEdit.isActive = false;
    axios.patch(
      `https://morning-anchorage-00433.herokuapp.com/${_id}`,
      elementToEdit
    );
    this.props.onHandleUpgrate(prevArr);
  }
  changeItemsValueName(val, _id) {
    this.props.nameList.items.forEach(element => {
      if(element.name === val){
        alert(`Name ${val} is already exist`)
      }
    });
    const prevArr = this.props.nameList.items;
    const itemChanged = this.props.nameList.items.filter((el) => el._id === _id)[0];
    itemChanged.name = val;
    this.props.onChangeItemsValueName(prevArr);
  }
  changeItemsValueType(val, _id) {
    const prevArr = this.props.nameList.items;
    const itemChanged = this.props.nameList.items.filter((el) => el._id === _id)[0];
    itemChanged.type = val;
    this.props.onChangeItemsValueType(prevArr);
  }
  changeItemsValueImage(val, _id) {
    const prevArr = this.props.nameList.items;
    const itemChanged = this.props.nameList.items.filter((el) => el._id === _id)[0];
    itemChanged.image = val;
    this.props.onChangeItemsValueType(prevArr);
  }
  changeItemsValueDescription(val, _id) {
    const prevArr = this.props.nameList.items;
    const itemChanged = this.props.nameList.items.filter((el) => el._id === _id)[0];
    itemChanged.description = val;
    this.props.onChangeItemsValueType(prevArr);
  }

  render() {
    return (
      <ul className="cards">
        {this.props.nameList.items.map((item) => {
          if (item.isActive === false || item.isActive === undefined) {
            return (
              <li className="card" key={item._id}>
                <img src={item.image} alt="hot dog image" />
                <div className="name">
                  <span>{item.name}</span>
                </div>
                <div className="type">
                  <span>{item.type}</span>
                </div>
                <div className="description">
                  <span>{item.description}</span>
                </div>
                <div>
                  <button
                    className="edit-btn"
                    onClick={() => this.handleCheck(item._id)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          } else if (item.isActive === true) {
            return (
              <li className="card" key={item._id}>
                <img src={item.image} alt="hot dog image" />
                <div className="input-field">
                  <input
                    placeholder="image"
                    type="text"
                    value={item.image}
                    onChange={(e) => {
                      this.changeItemsValueImage(e.target.value, item._id);
                    }}
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    placeholder="name"
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      this.changeItemsValueName(e.target.value, item._id);
                    }}
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    placeholder="type"
                    type="text"
                    value={item.type}
                    onChange={(e) => {
                      this.changeItemsValueType(e.target.value, item._id);
                    }}
                    required
                  />
                </div>
                <div className="input-field">
                  <textarea
                    placeholder="description"
                    type="text"
                    value={item.description}
                    onChange={(e) => {
                      this.changeItemsValueDescription(
                        e.target.value,
                        item._id
                      );
                    }}
                    required
                  />
                </div>
                <div className="buttons">
                  <button onClick={() => this.handleUpgrate(item._id)}>
                    Upgrate
                  </button>
                  <button onClick={() => this.handleDelete(item._id)}>
                    Delete
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default connect(
  (state) => ({
    nameList: state.items,
  }),
  (dispatch) => ({
    onStartApp: (arrItems) => {
      dispatch({ type: "ADD_START", payload: arrItems });
    },
    onHandleCheck: (arrItems) => {
      dispatch({ type: "ADD_EDIT", payload: arrItems });
    },
    onHandleDelete: (arrItems) => {
      dispatch({ type: "DELETE_ITEM", payload: arrItems });
    },
    onChangeItemsValueName: (arrItems) => {
      dispatch({ type: "EDIT_NAME_ITEM", payload: arrItems });
    },
    onChangeItemsValueType: (arrItems) => {
      dispatch({ type: "EDIT_TYPE_ITEM", payload: arrItems });
    },
    onChangeItemsValueImage: (arrItems) => {
      dispatch({ type: "EDIT_IMAGE_ITEM", payload: arrItems });
    },
    onChangeItemsValueDescription: (arrItems) => {
      dispatch({ type: "EDIT_DESCRIPTION_ITEM", payload: arrItems });
    },
    onHandleUpgrate: (arrItems) => {
      dispatch({ type: "EDIT_UPGRATE_ITEM", payload: arrItems });
    },
  })
)(Cards);