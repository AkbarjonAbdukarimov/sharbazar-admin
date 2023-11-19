import { Container, CssBaseline, Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IError from "../../interfaces/IError";
import Errors from "../Errors";

export default function UpdateDatabase() {
    const [err, setError] = useState<IError[] | undefined>();
    const [category, setCategory] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function handleSubmit(
      e: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
      e.preventDefault();
      setLoading(true)
      try {
        //@ts-ignore
        const data = new FormData(e.target);
  
        const res=await axios({
          url: '/updatedb',
          data,
          method:  "post",
        });
        console.log(res.data)
        //navigate("/");
      } catch (error) {
        setLoading(false)
        if (error instanceof AxiosError) {
          const { errors }: { errors: IError[] } = error.response!.data;
  
          setError([...errors]);
        }
      }
    }
  
    return (
      <>
        <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
          <Container component="main">
            <CssBaseline />
  
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
               Update products and categories
              </Typography>
  
              <Box sx={{ mt: 1 }}>
               
  
                <div className="mb-3">
                  <label htmlFor="formFileSm" className="form-label">
                   Select Excel File
                  </label>
                  <input
                    name="file"
                    className="form-control form-control-sm"
                    id="formFileSm"
                    type="file"
                    multiple
                  />
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={loading}
                >
                  Submit
                  {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: green[500],
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: "-12px",
                        marginLeft: "-12px",
                      }}
                    />
                  )}
                </Button>
              </Box>
            </Box>
  
            <Errors errs={err} />
          </Container>
        </form>
      </>
    );
}
