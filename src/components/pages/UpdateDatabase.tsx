import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { green } from "@mui/material/colors";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IError from "../../interfaces/IError";
import Errors from "../Errors";

export default function UpdateDatabase() {
  const [err, setError] = useState<IError[] | undefined>();
  // const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setLoading(true);
    try {
      //@ts-ignore
      const data = new FormData(e.target);

      await axios({
        url: "/updatedb",
        data,
        method: "post",
      });
      setLoading(false);
      //console.log(res.data)
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        console.log(error);
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
              <FormControl className="my-3 w-100">
                <InputLabel id="demo-simple-select100-label">
                  What is File Language?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="What is File Language?"
                  name="lang"
                >
                  <MenuItem value="ru">RU</MenuItem>
                  <MenuItem value="uz">UZ</MenuItem>
                  <MenuItem value="kp">KP</MenuItem>
                </Select>
              </FormControl>

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
