const toggleDrawer = () => {
  return {
    type: "TOGGLE",
  };
};

const closeDrawer = () => {
  return {
    type: "CLOSE_DRAWER",
  };
};

const openDrawer = () => {
  return {
    type: "OPEN_DRAWER",
  };
};

const AddUser = (data) => {
  return {
    type: "ADD_USER",
    info: data,
  };
};

const openDialogBox = (data) => {
  return {
    type: "DIALOG_BOX_OPEN",
    payload: data,
  };
};

const onEditClicked = (data) => {
  return {
    type: "EDIT_BUTTON_CLICKED",
    payload: data,
  };
};
const closeDialogBox = () => {
  return {
    type: "DIALOG_BOX_CLOSE",
  };
};

const onEditClose = () =>
{
   return{
     type : "EDIT_BUTTON_CLOSED"
   } 
}

const updateUser = (data)=> {
    return {
      type : "UPDATE_USER",
      payload : data
    }
}

const deleteUser = (data) =>
{

  return {
    type : "DELETE_USER",
    payload : data
  }
}

const actions = {
  toggleDrawer,
  openDrawer,
  closeDrawer,
  AddUser,
  openDialogBox,
  closeDialogBox,
  onEditClicked,
  onEditClose,
  updateUser,
  deleteUser
};

export default actions;
