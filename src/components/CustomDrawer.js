import React, { useState, useEffect } from "react";
import {
  Button,
  Drawer,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
// import CloseIcon from '@mui/icons-material/Close';
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import actions from "../actions/userActions";
import { TextField } from "@mui/material";
import validator from "validator";

function CustomDrawer(props) {
  const editButtonUser = useSelector(
    (state) => state.userReducer.editButtonData
  );
  const editButton = useSelector((state) => state.userReducer.editButton);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  console.log(  "edit button status",editButton)
  console.log("edit user " , editButtonUser)

  useEffect(()=>{
      if(editButton)
      {
          setFirstName(editButtonUser.firstName)
          setLastName(editButtonUser.lastName);
          setEmail(editButtonUser.email)
          setGender(editButtonUser.gender.toLowerCase());
          setPhoneNumber(editButtonUser.phoneNumber)
      }

  },[editButtonUser])

  //is touched

  const [isfirstNameTouched, setIsfirstNameTouched] = useState(false);
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isGenderTouched, setIsGenderTouched] = useState(false);

  const [emailError, setEmailError] = useState(false);

  const dispatch = useDispatch();

  const drawerCloseHandler = () => {
    dispatch(actions.closeDrawer());
    setFirstName("");
    setEmail("");
    setLastName("");
    setGender("");
    setPhoneNumber("");
  };

  const capitalize = (word) => {
    return word
      .toLowerCase()
      .replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
  };

  const firstNameChangeHandler = (event) => {
    setIsfirstNameTouched(true);
    setFirstName(event.target.value.trim());
  };

  const phoneNumberOnChangeHandler = (event) => {
    const isNumber = validator.isNumeric(event.target.value);
    if (isNumber) {
      setPhoneNumber(event.target.value);
    } else {
    }
  };

  const lastNameChangeHandler = (event) => {
    setIsLastNameTouched(true);
    setLastName(event.target.value.trim());
  };
  const genderHanlder = (event) => {
    setIsGenderTouched(true);
    setGender(event.target.value.trim());
  };
  const emailChangeHandler = (event) => {
    setEmailError(!validator.isEmail(event.target.value));
    setIsEmailTouched(true);
    setEmail(event.target.value.trim());
  };

  const sumbitFormHandler = () => {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      gender.length === 0
    ) {
      alert("Please fill the form correctly");
    } else {
      dispatch(
        actions.AddUser({
          firstName: capitalize(firstName),
          lastName: capitalize(lastName),
          gender: capitalize(gender),
          email: capitalize(email),
          phoneNumber,
        })
      );
      setFirstName("");
      setEmail("");
      setLastName("");
      setGender("");
      setPhoneNumber("");

      setIsfirstNameTouched(false);
      setIsLastNameTouched(false);
      setIsEmailTouched(false);
      setIsGenderTouched(false);
      dispatch(actions.closeDrawer());
    }
  };

  // setIsFirstNameError(isfirstNameTouched && firstName.length === 0)
  // setLastName(isLastNameTouched && lastName.length === 0)
  // setIsEmailError(isEmailTouched && email.length === 0)

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

      <div className="flex flex-col mt-4">
        <div className="flex flex-row mb-4">
            <div className="mr-2">
          <TextField
            required
            error={isfirstNameTouched && firstName.length === 0}
            value={firstName}
            onChange={firstNameChangeHandler}
            className=" m-2 "
            size="small"
            variant="outlined"
            color="primary"
            label="First Name"
          />
          </div>
          <div className="">
          <TextField
            required
            error={isLastNameTouched && lastName.length === 0}
            value={lastName}
            onChange={lastNameChangeHandler}
            on
            size="small"
            variant="outlined"
            color="primary"
            label="Last Name"
          />
          </div>
        </div>
        <div className="flex flex-row mb-4" >
        <div className="mr-2">
          <TextField
            error={emailError}
            value={email}
            onChange={emailChangeHandler}
            type="email"
            size="small"
            variant="outlined"
            color="primary"
            label="Email"
          />
          </div>
          <div className="">
          <TextField
            onChange={phoneNumberOnChangeHandler}
            size="small"
            variant="outlined"
            color="primary"
            label="Phone Number"
            required
            value={phoneNumber}
          />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <div>
            <FormLabel required component="legend">
              Gender
            </FormLabel>
            <RadioGroup
              value={gender}
              onChange={genderHanlder}
              row
              aria-label="gender"
              name="gender1"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-row mb-4 justify-center">
          <Button
            variant="outlined"
            color="primary"
            onClick={sumbitFormHandler}
          >
            {" "}
            Sumbit
          </Button>
        </div>
      </div>
    </div>
    </Drawer>
  );
}

export default CustomDrawer;
