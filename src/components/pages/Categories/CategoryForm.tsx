import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Errors from "../../Errors";
import IError from "../../../interfaces/IError";

interface ICategoryFormProps {
  formType: "new" | "edit";
  requestPath: string;
  id?: string;
}
const CategoryForm: React.FunctionComponent<ICategoryFormProps> = ({
  formType,
  requestPath,
  id,
}) => {
  // const [_open, setOpen] = useState(false);
  // const [err, setError] = useState<IError[] | undefined>();
  // const [category, setCategory] = useState<string>("");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (id) {
  //     console.log(id);
  //     axios
  //       .get("/categories/" + id)
  //       .then((res) => setCategory(res.data.name))
  //       .catch((e) => {
  //         if (err) {
  //           setError([...err, e]);
  //         } else {
  //           setError([e]);
  //         }
  //       });
  //   }
  // }, []);
  // async function handleSubmit(
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<void> {
  //   e.preventDefault();
  //   try {
  //     //@ts-ignore
  //     const data = new FormData(e.target);

  //     await axios({
  //       url: requestPath,
  //       data,
  //       method: formType === "edit" ? "put" : "post",
  //     });
  //     navigate("/categories");
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       const { errors }: { errors: IError[] } = error.response!.data;

  //       setError([...errors]);
  //       setOpen(true);
  //     }
  //   }
  // }

  // return (
  //   <>
  //     <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
  //       <Container component="main">
  //         <CssBaseline />

  //         <Box
  //           sx={{
  //             marginTop: 8,
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "center",
  //           }}
  //         >
  //           <Typography component="h1" variant="h5">
  //             {formType === "new" ? "New Category" : "Edit Category"}
  //           </Typography>

  //           <Box sx={{ mt: 1 }}>
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="name"
  //               value={category}
  //               onChange={(e) => {
  //                 setCategory(e.target.value);
  //               }}
  //               label="Category Name"
  //               name="name"
  //             />

  //             <div className="mb-3">
  //               <label htmlFor="formFileSm" className="form-label">
  //                 Select Product Files
  //               </label>
  //               <input
  //                 name="icon"
  //                 className="form-control form-control-sm"
  //                 id="formFileSm"
  //                 type="file"
  //                 multiple
  //               />
  //             </div>

  //             <Button
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               sx={{ mt: 3, mb: 2 }}
  //             >
  //               Submit
  //             </Button>
  //           </Box>
  //         </Box>

  //         <Errors errs={err} />
  //       </Container>
  //     </form>
  //   </>
  // );
  return <></>;
};

export default CategoryForm;
