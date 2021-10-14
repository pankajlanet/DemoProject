const initialState = {
  users: [
    {
      firstName: "Pankaj",
      lastName: "kumar",
      email: "pankaj14449@gmail.com",
      gender: "male",
      phoneNumber: "7859844144",
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
  } else {
    return state;
  }
};

export default userReducer;
