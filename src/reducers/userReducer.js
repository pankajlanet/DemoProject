const initialState = {
  users: [
    { id:"1",
      firstName: "pankaj",
      lastName: "kumar",
      email: "pankaj@gmail.com",
      gender: "male",
      phoneNumber: "56565598",
    },
    
  ],
  isDrawerOpen: false,
  isDialogOpen: false,
  editData: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
  },
  editButton: false,
  editButtonData: {},
};

const userReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE") {
    return { ...state, isDrawerOpen: !state.isDrawerOpen };
  } else if (action.type === "CLOSE_DRAWER") {
    return { ...state, isDrawerOpen: false };
  } else if (action.type === "OPEN_DRAWER") {
    return { ...state, isDrawerOpen: true };
  } else if (action.type === "ADD_USER") {
    return { ...state, users: state.users.concat(action.info) };
  } else if (action.type === "DIALOG_BOX_OPEN") {
    return { ...state, isDialogOpen: true, editData: action.payload };
  } else if (action.type === "DIALOG_BOX_CLOSE") {
    return { ...state, isDialogOpen: false };
  } else if (action.type === "EDIT_BUTTON_CLICKED") {
    return { ...state, editButton: true, editButtonData: action.payload };
  } else if (action.type === "EDIT_BUTTON_CLOSED") {
    return { ...state, editButton: false, editButtonData: {} };
  } else if (action.type === "UPDATE_USER") {
    // const index = state.users.findIndex((val) => val.id === action.payload.id);
    // console.log( "updated data" ,action.payload)
    // console.log( "updated data index" ,index)
    //   const stateObj = { ...state, users: [
    //   ...state.users.slice(0,index),
    //   action.payload,
    //   ...state.users.slice(index)
    // ] };
    const newArray = Array.from(state.users);

const userList = newArray.map((item, index) =>
item.id === action.payload.id
? (newArray[index] = { ...action.payload })
: item
);
    console.log("safsadfdsafdsf",userList)
    return {
      ...state,
      users:userList
    };
  } else if (action.type === "DELETE_USER") {
    const filtered = state.users.filter((val) => val.id !== action.payload.id);
    return { ...state, users: filtered };
  } else {
    return state;
  }
};

export default userReducer;
