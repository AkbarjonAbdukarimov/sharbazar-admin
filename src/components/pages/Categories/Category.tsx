import { Link, useParams } from "react-router-dom";
import Loading from "../../Loading";
import axios, { AxiosError } from "axios";
import ICategory from "../../../interfaces/ICategory";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import IError from "../../../interfaces/IError";
import { useEffect, useState } from "react";
import Errors from "../../Errors";
import IProduct from "../../../interfaces/Product/IProduct";

export default function Category() {
  const [errs, setErrs] = useState<IError[] | undefined>();
  const { id } = useParams();
  const [category, setCategory] = useState<ICategory>();
  useEffect(() => {
    if (id) {
      axios
        .get<ICategory>(`/categories/${id}`)
        .then((res) => setCategory(res.data))
        .catch((e) => {
          if (e instanceof AxiosError) {
            setErrs(e.response?.data.errors);
          } else {
            setErrs([{ message: e.message }]);
          }
        });
    }
  }, []);
  const columns: GridColDef[] = [
    { field: "code", headerName: "Code", width: 70 },
    { field: "name", headerName: "Product Name", width: 150 },
    // { field: "category", headerName: "Category", width: 150 },
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

  if (!category) {
    return <Loading isLoading={true} />;
  }

  return (
    <div className="">
      <div className="container d-flex justify-content-center">
        <h1>{category.name.ru}</h1>
        <img
          alt={category.name.ru}
          width="50px"
          src={
            `https://ik.imagekit.io/z6k3ktb71/${category.icon?.name}`
            // `https://ik.imagekit.io/z6k3ktb71/${category._id}.png` ||
            // `https://ik.imagekit.io/z6k3ktb71/${category._id}.JPG` ||
            // `https://ik.imagekit.io/z6k3ktb71/${category._id}.jpg`
          }
        />
      </div>
      <div className="mt-3">
        <DataGrid
          getRowId={(row: IProduct) => row.code}
          rows={category.products || []}
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
      {/* <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,

          // backgroundColor:"red"
        }}
      >
        <Link to="/categories/new">
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          ></SpeedDial>
        </Link>{" "}
      </div> */}
    </div>
  );
}
