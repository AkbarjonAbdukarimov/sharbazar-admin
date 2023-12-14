import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Errors from "../../Errors";
import IError from "../../../interfaces/IError";
import { green } from "@mui/material/colors";
import ILang from "../../../interfaces/ILang";
import ICategory from "../../../interfaces/ICategory";

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
  const [err, setError] = useState<IError[] | undefined>();
  const [category, setCategory] = useState<ILang>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      console.log(id);
      axios
        .get<ICategory>("/categories/" + id)
        .then((res) => setCategory(res.data.name))
        .catch((e) => {
          if (err) {
            setError([...err, e]);
          } else {
            setError([e]);
          }
        });
    }
  }, []);
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setLoading(true);
    try {
      //@ts-ignore
      const data = new FormData(e.target);
      await axios({
        url: requestPath,
        data,
        method: formType === "edit" ? "put" : "post",
      });
      navigate("/categories");
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        const { errors }: { errors: IError[] } = error.response!.data;

        setError([...errors]);
      }
    }
  }
  function handleChange(
    e: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newCt = category || {};
    newCt[e.target.name] = e.target.value;
    setCategory(newCt);
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
              {formType === "new" ? "New Category" : "Edit Category"}
            </Typography>

            <Box sx={{ mt: 1, width: "30%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Category Name in Russian"
                name="ru"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Category Name in Uzbek"
                name="uz"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Category Name in Karakalpak"
                name="kp"
                onChange={handleChange}
              />

              <div className="mb-3">
                <label htmlFor="formFileSm" className="form-label">
                  Select Icon
                </label>
                <input
                  name="image"
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
};

export default CategoryForm;
