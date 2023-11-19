import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IProduct from "../../../interfaces/Product/IProduct";
import Errors from "../../Errors";
import IError from "../../../interfaces/IError";
import Loading from "../../Loading";
import { Button, CircularProgress } from "@mui/material";
export default function ProductImageForm() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>();
  const [errs, setErrs] = useState<IError[] | undefined>();
  const [isLoading, setLoading] = useState(false);
  const navigate=useNavigate()
  

  useEffect(() => {
    axios
      .get<IProduct>(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((e) => setErrs([...e]));
  }, []);
  if (!product) {
    return <Loading isLoading={true} />;
  }
  // if (errs) {
  //   return <Errors errs={errs} />;
  // }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!product) {
        setErrs([{ message: "Product Not Found" }]);
        return;
      }
      setLoading(true);
      const data = new FormData(e.target);
      console.log([...data.entries()])
       const res = await axios.post(`/products/image/${product.code}`, data);
       navigate('/')
    } catch (error:any) {
      setLoading(false)
      setErrs(prev=>{
        if(error instanceof AxiosError &&error.response){
          
          return [...error.response.data.errors]
        }
        return [{message:error.message}]
      })
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="col-6"
          encType="multipart/form-data"
        >
          <h1>Add Image to {product.name}</h1>
          <div className="my-3">
            <input name="image" type="file"/>
          </div>
          <Button
            sx={{ width: "180px", height: "55px", padding: "10px 15px" }}
            type="submit"
            variant="contained"
          >
            {!isLoading ? "Submit" : <CircularProgress color="inherit" />}
          </Button>
        </form>
        <Errors errs={errs} />  
      </div>
    </div>
  );
}
