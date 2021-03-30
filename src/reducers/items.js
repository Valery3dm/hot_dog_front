const initialState = {
  items: [],
};

export default function reducerHotDogsList(state = initialState, action) {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const sec = new Date().getSeconds();

  const consoleLog = () => {
    console.group(`Action: ${action.type} ${hours}:${minutes}:${sec}`);
    console.log("prev state:", state);
    console.log("action:", action);
    console.log("next state", {
      ...state,
      items: action.payload,
    });
    console.groupEnd();
  };

  if (action.type === "ADD_START") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "ADD_HOTDOG") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "ADD_EDIT") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "DELETE_ITEM") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "EDIT_UPGRATE_ITEM") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "EDIT_NAME_ITEM") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "EDIT_TYPE_ITEM") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "EDIT_IMAGE_ITEM") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "EDIT_DESCRIPTION_ITEM") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === "ON_START") {
    consoleLog(state, action);

    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
}