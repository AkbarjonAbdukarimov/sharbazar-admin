import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import { IconButton, SpeedDial, SpeedDialIcon, styled } from "@mui/material";
import axios, { AxiosError } from "axios";
import IError from "../../../interfaces/IError";
import Errors from "../../Errors";
import IProduct from "../../../interfaces/Product/IProduct";
import ICategory from "../../../interfaces/ICategory";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});
type Categories = { id: string; name: string };

export default function Categories() {
  const [errs, setErrs] = useState<IError[] | undefined>();
  const [categories, setCategories] = useState<ICategory[] | undefined>();
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
      .get<ICategory[]>("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => {
        setErrs((prev) => {
          if (e instanceof AxiosError && e.response) {
            return [...e.response.data.errors];
          }
          return [{ message: e.message }];
        });
      });
  }, []);
  const columns: GridColDef[] = [
    { field: "_id", headerName: "Id", width: 70 },
    {
      field: "RU",
      headerName: "RU",
      width: 150,
      renderCell: (params) => params.row.name.ru || "",
    },
    {
      field: "UZ",
      headerName: "UZ",
      width: 150,
      renderCell: (params) => params.row.name.uz || "",
    },
    {
      field: "KP",
      headerName: "KP",
      width: 150,
      renderCell: (params) => params.row.name.kp || "",
    },
    // {
    //   field: "Add Image",
    //   headerName: "",
    //   width: 150,
    //   renderCell: (params) => (
    //     <Link to={`/products/image/${params.id}`}>
    //      Add Image
    //     </Link>
    //   ),
    // },
    {
      field: "Details",
      headerName: "",
      width: 75,
      renderCell: (params) => (
        <Link to={`/categories/${params.id}`}>Details</Link>
      ),
    },
  ];

  if (!categories) {
    return <Loading isLoading={true} />;
  }

  return (
    <div className="">
      <div className="">
        <DataGrid
          getRowId={(row) => row._id}
          rows={categories}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 30 },
            },
          }}
          pageSizeOptions={[10, 20, 30]}
          checkboxSelection
        />
      </div>
      <Errors errs={errs} />
      <div
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
      </div>
      <Errors errs={errs} />
    </div>
  );
}
