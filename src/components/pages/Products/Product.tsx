import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IProduct from "../../../interfaces/Product/IProduct";
import Loading from "../../Loading";

import Card from "@mui/material/Card";
import IError from "../../../interfaces/IError";
import Errors from "../../Errors";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>();
  const [errs, setErrs] = useState<IError[] | undefined>();
  useEffect(() => {
    axios
      .get<IProduct>(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((e) => setErrs([...e]));
  }, []);
  //@ts-ignore
  const [expanded, setExpanded] = React.useState(false);

  if (!product) {
    return <Loading isLoading={true} />;
  }
  if (errs) {
    return <Errors errs={errs} />;
  }

  return (
    <div className="pt-5">
      {product && (
        <div className="d-flex justify-content-center mt-5">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={
                `https://ik.imagekit.io/z6k3ktb71/${product.code}.PNG` ||
                `https://ik.imagekit.io/z6k3ktb71/${product.code}.png` ||
                `https://ik.imagekit.io/z6k3ktb71/${product.code}.JPG` ||
                `https://ik.imagekit.io/z6k3ktb71/${product.code}.jpg`
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}
