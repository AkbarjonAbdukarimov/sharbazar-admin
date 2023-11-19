// import {
//   Container,
//   CssBaseline,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   FormControl,
//   IconButton,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Errors from "../../Errors";
// import { useNavigate } from "react-router-dom";
// import axios, { AxiosError } from "axios";
// import IVendor from "../../../interfaces/Vendor/IVendor";
// import { useQuery } from "react-query";
// import SelectInput from "../../CustomSelectInput";
// import { VisibilityOff, Visibility } from "@mui/icons-material";
// import IAdmin from "../../../interfaces/IAdmin";
// import Loading from "../../Loading";
// import IError from "../../../interfaces/IError";

// export default function AdminForm({
//   formType,
//   requestPath,
//   id,
// }: {
//   formType: string;
//   requestPath: string;
//   id?: string;
// }) {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const [vendors, setVendors] = useState<IVendor[]>([]);
//   const [err, setError] = useState<IError[] | undefined>();
//   const [vendor, setVendor] = useState<IVendor>();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSuper, setIsSuper] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     event.preventDefault();
//   };

//   useEffect(() => {
//     axios
//       .get<IVendor[]>("/vendors")
//       .then((res) => res.data)
//       .catch((e) => setError([...e]));
//     if (id) {
//       axios
//         .get<IAdmin>("/admins/" + id)
//         .then((res) => {
//           setEmail(res.data.email);
//           setIsSuper(res.data.super);
//           setVendor(res.data.vendorId);
//         })
//         .catch((e) => {
//           console.log(e);
//           if (e instanceof AxiosError) {
//             const { errors }: { errors: IError[] } = e.response!.data;
//             if (err) {
//               setError([...err, ...errors]);
//               return;
//             }
//             setError([...errors]);
//             return;
//           }
//           setError([e]);
//         });
//     }
//   }, []);
//   async function handleSubmit(
//     e: React.FormEvent<HTMLFormElement>
//   ): Promise<void> {
//     e.preventDefault();
//     try {
//       const post = {
//         email,
//         password,
//         super: isSuper,
//         vendorId: vendor ? vendor.id : undefined,
//       };

//       await axios({
//         url: requestPath,
//         data: post,
//         method: formType === "edit" ? "put" : "post",
//       });
//       navigate("/admins");
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         const { errors }: { errors: IError[] } = error.response!.data;

//         setError([...errors]);
//       }
//     }
//   }
//   // if (vendors.isLoading) {
//   //   return <Loading isLoading={vendors.isLoading} />;
//   // }
//   return (
//     <>
//       {/* <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
//         <Container component="main" sx={{ width: "50ch" }}>
//           <CssBaseline />

//           <Box
//             sx={{
//               marginTop: 8,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Typography component="h1" variant="h5">
//               {formType === "new" ? "New Admin" : "Edit Admin"}
//             </Typography>

//             <Box sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 name="email"
//                 value={email}
//                 label="Admin Email"
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <FormControl sx={{ my: 1, width: "50ch" }} variant="outlined">
//                 <InputLabel htmlFor="outlined-adornment-password">
//                   Password
//                 </InputLabel>
//                 <OutlinedInput
//                   id="outlined-adornment-password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type={showPassword ? "text" : "password"}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   required
//                   label="Password"
//                 />
//               </FormControl>

//               <SelectInput
//                 setSelected={setVendor}
//                 label={"Vendors"}
//                 data={vendors.data || []}
//               />

//               <FormControlLabel
//                 control={<Checkbox checked={isSuper} name="super" />}
//                 label="Super Admin"
//                 value={isSuper}
//                 onChange={(e: any) => setIsSuper(e.target.checked)}
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Submit
//               </Button>
//             </Box>
//           </Box>

//           <Errors errs={err} />
//         </Container>
//       </form> */}
//     </>
//   );
// }
export default function AdminForm(){
  return<></>
}