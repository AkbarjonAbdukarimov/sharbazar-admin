import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import axios, { AxiosError } from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import IProduct from "../../../interfaces/Product/IProduct";
import IError from "../../../interfaces/IError";
import Errors from "../../Errors";

const Products: FunctionComponent = () => {
  const [errs, setErrs] = useState<IError[] | undefined>();
  const [products, setProducts] = useState<IProduct[] | undefined>();
  // function handleDelete(id: string) {
  //   axios
  //     .delete("/products/delete/" + id)
  //     .then((_res) => {
  //       return refetch();
  //     })
  //     .catch((e) => setErrs([...e.response.data.errors]));
  // }
  useEffect(() => {
    axios
      .get<IProduct[]>("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        setErrs((_prev) => {
          if (e instanceof AxiosError && e.response) {
            return [...e.response.data.errors];
          }
          return [{ message: e.message }];
        });
      });
  }, []);
  const columns: GridColDef[] = [
    { field: "code", headerName: "Code", width: 70 },
    { field: "name", headerName: "Product Name", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "qty", headerName: "Quantity", width: 70 },
    { field: "price", headerName: "Price", width: 70 },
    { field: "addOn", headerName: "Add On", width: 70 },
    {
      field: "Add Image",
      headerName: "",
      width: 150,
      renderCell: (params) => (
        <Link to={`/products/image/${params.id}`}>Add Image</Link>
      ),
    },
    {
      field: "Details",
      headerName: "",
      width: 150,
      renderCell: (params) => (
        <Link to={`/products/${params.id}`}>Details</Link>
      ),
    },
  ];

  if (!products) {
    return <Loading isLoading={true} />;
  }
  if (errs) {
    return <Errors errs={errs} />;
  }
  return (
    <div className="">
      <div className="">
        <DataGrid
          getRowId={(row) => row.code}
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 30 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <Errors errs={errs} />
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
        }}
      ></div>
    </div>
  );
};

export default Products;
