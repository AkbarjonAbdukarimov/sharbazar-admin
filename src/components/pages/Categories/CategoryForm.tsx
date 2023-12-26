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
  const [_cat, setCat] = useState<ICategory>();
  const [category, setCategory] = useState<ILang>({ ru: "", uz: "", kp: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      axios
        .get<ICategory>("/categories/" + id)
        .then((res) => {
          setCat(res.data);
          setCategory(res.data.name);
        })
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
      //data.append("name", category);
      console.log(category);
      await axios({
        url: requestPath,
        data,
        method: formType === "edit" ? "put" : "post",
      });
      setLoading(false);
      navigate("/categories");
    } catch (error: any) {
      setLoading(false);
      if (error instanceof AxiosError) {
        const { errors }: { errors: IError[] } = error.response!.data;

        setError([...errors]);
      }
      setError([{ message: error.messsage }]);
    }
  }
  function handleChange(
    e: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCategory((prev) => {
      //@ts-ignore
      if (e.target.name === "name[ru]") {
        //@ts-ignore
        return { ...category, ru: e.target.value.toString().toUpperCase() };
      }
      //@ts-ignore
      if (e.target.name === "name[uz]") {
        //@ts-ignore
        return { ...category, uz: e.target.value.toString().toUpperCase() };
      }
      //@ts-ignore
      if (e.target.name === "name[kp]") {
        //@ts-ignore
        return { ...category, kp: e.target.value.toString().toUpperCase() };
      }
      return prev;
    });
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
                name="name[ru]"
                value={category.ru}
                //@ts-ignore
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Category Name in Uzbek"
                name="name[uz]"
                value={category.uz || ""}
                //@ts-ignore
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="kp"
                label="Category Name in Karakalpak"
                name="name[kp]"
                value={category.kp || ""}
                //@ts-ignore
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
