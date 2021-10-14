import React from "react";
import {
  Button,
  Drawer,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
// import CloseIcon from '@mui/icons-material/Close';
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import actions from "../actions/userActions";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {nanoid} from 'nanoid'
function CustomDrawerFormik(props) {
  const editButtonUser = useSelector(
    (state) => state.userReducer.editButtonData
  );
  const editButton = useSelector((state) => state.userReducer.editButton);

  const initialState = editButton ? {
    firstName: editButtonUser.firstName,
    lastName: editButtonUser.lastName,
    email: editButtonUser.email,
    gender: editButtonUser.gender,
    phoneNumber: editButtonUser.phoneNumber,
  } : {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
  }

  const dispatch = useDispatch();
  const validate = Yup.object({
    firstName: Yup.string().max(15, "Must be less than 15 character"),
    lastName: Yup.string().max(15, "Must be less than 15 character"),
    email: Yup.string().email(),
    phoneNumber: Yup.number()
    // firstName : Yup.string().max( 15 , "Must be less than 15 character"),
  });

  const drawerCloseHandler = () => {
    dispatch(actions.closeDrawer());
    dispatch(actions.onEditClose())
  };

  return (
    <Drawer
      onClose={drawerCloseHandler}
      anchor={"right"}
      elevation={3}
      open={props.open}
    >
      <div className="p-4">
        <div className="flex flex-row justify-between items-center border-b border-gray-300">
          <Typography>Add User</Typography>
          <IconButton onClick={drawerCloseHandler}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <Formik
          initialValues={initialState}
          validationSchema={validate}

          //   Sumbit Handler
          onSubmit={(data, { isSumbitting }) => {
             editButton?
              dispatch(actions.updateUser({...data , id : editButtonUser.id}))
             :  dispatch(
              actions.AddUser({
                id : nanoid(),
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender,
                email: data.email,
                phoneNumber: data.phoneNumber
              })
            );

            drawerCloseHandler()
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <div className="flex flex-col mt-4">
              <Form autoComplete='off' onSubmit={handleSubmit}>
                <div className='flex flex-row m-2'>
                  <div className="mr-2">
                    <TextField
                      error={errors.firstName}
                      className="m-2"
                      label="First Name"
                      required
                      size="small"
                      color="primary"
                      name="firstName"
                      variant="outlined"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <TextField
                      error={errors.lastName}
                      label="Last Name"
                      required
                      size="small"
                      color="primary"
                      name="lastName"
                      variant="outlined"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className='flex flex-row m-2'>
                  <div className=" mr-2">
                    <TextField
                      error={errors.email}
                      label="Email"
                      required
                      size="small"
                      color="primary"
                      name="email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <TextField
                      className='m-2'
                      error={errors.phoneNumber}
                      label="Phone Number"
                      required
                      size="small"
                      color="primary"
                      name="phoneNumber"
                      variant="outlined"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                </div>

                <div className = 'flex flex-row mt-3 m-2'>
                <div >
                  <FormLabel component="legend">
                    Gender
                  </FormLabel>
                  <RadioGroup
                  
                    required
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    row
                    aria-label="gender"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </div>
                </div>

                <div className = ' flex flex-col items-center justify-end'>
                  <div className = 'h-32 w-2'></div>
                  <div className = 'h-32 w-2'></div>
                <Button
                  disabled={!isValid}
                  variant="outlined"
                  color="primary"
                  type="sumbit"
                >

                 
                  {editButton ? "Update" : "Sumbit"}
                </Button>
                </div>
              </Form>

            </div>
          )}
        </Formik>
      </div>
    </Drawer>
  );
}

export default CustomDrawerFormik;
