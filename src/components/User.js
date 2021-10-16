import { Avatar, IconButton, Paper, Typography } from "@material-ui/core";
import React from "react";
// import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import DialogBoxCustom from "./DialogBoxCustom"; 
import actions from "../actions/userActions";
// import { useDispatch } from "react-redux";
// import Icon from '@mui/material/Icon';
// import Icon from '@mui/material/Icon'
// import Icon from '@material-ui/core/Icon'
import { Email } from "@material-ui/icons";
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { connect } from "react-redux";


// import EditIcon from '@material-ui/icons/icons'
function User(props) {
    const {data ,dispatch} = props

    console.log("data is : ",data)
    console.log( "Dispatch is  : " , dispatch)

    const stringAvatar = (name) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        };
    };

    const editButtonHandler = () => {
        dispatch(actions.openDrawer());
    };

    const stringToColor = (string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    };

    return (
        <>
            <div className="mt-20">
                {data.map((val, count) => {
                    return (
                        <Paper key={"Paper" + count} className=" mx-12 m-6" elevation={4}>
                            <div className="flex flex-col md:flex-row items-center w-full p-2 ">
                                <div className="flex md:w-1/2 w-full justify-start items-center">
                                    <Avatar
                                        {...stringAvatar(val.firstName + " " + val.lastName)}
                                    />
                                    <Typography className="text-12 pl-2">{val.firstName + " " + val.lastName}</Typography>
                                </div>
                                <div className="flex flex-row md:w-1/4 md:pt-0 pt-2 w-full justify-start">
                                    <Email></Email><Typography className="text-12 pl-2">{val.email}</Typography> 
                                </div>
                                <div className="flex md:w-1/4 w-full justify-end">
                                    <div className="">
                                        <IconButton
                                            onClick={() => {
                                                editButtonHandler();
                                                dispatch(actions.onEditClicked(val));
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton
                                            onClick={() => {
                                                dispatch(actions.openDialogBox(val));
                                            }}
                                        >
                                            <PreviewIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => {
                                                dispatch(actions.deleteUser(val));
                                            }}
                                        >
                                            <DeleteForeverSharpIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    );
                })}
            </div>

            
            <DialogBoxCustom />

        </>
    );
}

const mapStateToProps = (state)=>  {
        return { data :  state.userReducer.users} 
     }


export default connect(mapStateToProps) (User);



// import React from 'react'
// import { Avatar, IconButton, Paper, Typography } from "@material-ui/core";

// import EditIcon from "@mui/icons-material/Edit";
// import PreviewIcon from "@mui/icons-material/Preview";
// import DialogBoxCustom from "./DialogBoxCustom"; 
// import actions from "../actions/userActions";
// // import Icon from '@mui/material/Icon';
// // import Icon from '@mui/material/Icon'
// // import Icon from '@material-ui/core/Icon'
// import { Email } from "@material-ui/icons";
// import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
// import { connect } from 'react-redux';



// function User(props) {
//     const {data,dispatch} = props



//     return (
//         <div className="mt-20">
//                {data.map((val, count) => {
//                     return (
//                         <Paper key={"Paper" + count} className=" mx-12 m-6" elevation={4}>
//                             <div className="flex flex-col md:flex-row items-center w-full p-2 ">
//                                 <div className="flex md:w-1/2 w-full justify-start items-center">
//                                     {/* <Avatar
//                                         {...stringAvatar(val.firstName + " " + val.lastName)}
//                                     /> */}
//                                     <Typography className="text-12 pl-2">{val.firstName + " " + val.lastName}</Typography>
//                                 </div>
//                                 <div className="flex flex-row md:w-1/4 md:pt-0 pt-2 w-full justify-start">
//                                     <Email></Email><Typography className="text-12 pl-2">{val.email}</Typography> 
//                                 </div>
//                                 <div className="flex md:w-1/4 w-full justify-end">
//                                     <div className="">
//                                         <IconButton
//                                             onClick={() => {
//                                                 // editButtonHandler();
//                                                 dispatch(actions.onEditClicked(val));
//                                             }}
//                                         >
//                                             <EditIcon />
//                                         </IconButton>

//                                         <IconButton
//                                             onClick={() => {
//                                                 dispatch(actions.openDialogBox(val));
//                                             }}
//                                         >
//                                             <PreviewIcon />
//                                         </IconButton>
//                                         <IconButton
//                                             onClick={() => {
//                                                 dispatch(actions.deleteUser(val));
//                                             }}
//                                         >
//                                             <DeleteForeverSharpIcon/>
//                                         </IconButton>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Paper>
//                     );
//                 })}

                         
// {/* //             <DialogBoxCustom /> */}
//         </div>
//     )
// }

// const mapStateToProps = (state)=>  {
//     return { data :  state.userReducer.users} 
//  }

 
// export default connect(mapStateToProps)(User)
