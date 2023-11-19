import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Loading";
import { SpeedDial, SpeedDialIcon } from "@mui/material";
import axios from "axios";
import ICategory from "../../../interfaces/ICategory";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import IError from "../../../interfaces/IError";
import { useState } from "react";
import Errors from "../../Errors";

const getCategory = (id: string): Promise<ICategory> =>
  axios.get(`/categories/${id}`).then((response) => response.data);
export default function Category() {
  // const [errs, setErrs] = useState<IError[] | undefined>()
  // const { id } = useParams()
  // const { isLoading, data, refetch } = useQuery<ICategory>(['category', id], () => getCategory(String(id)))

  // if (isLoading) {
  //     return <Loading isLoading={isLoading} />
  // }

  // function handleDelete(id: string) {
  //     axios.delete('/categories/' + id).then(() => {
  //         return refetch()
  //     }).catch(e => setErrs(e))
  // }

  // const columns: GridColDef[] = [
  //     { field: 'id', headerName: 'ID', width: 250 },
  //     { field: 'name', headerName: 'Category Name', width: 150 },
  //     {
  //         field: 'Details', headerName: '', width: 150,
  //         renderCell: (params) => (
  //             <Link to={`/categories/${id}/subcategory/${params.id}`}>Details</Link>
  //         )
  //     },
  //     {
  //         field: 'Edit', headerName: '', width: 150,
  //         renderCell: (params) => (
  //             <Link to={`/categories/${data?.id}/subcategory/edit/${params.id}`}>Edit</Link>
  //         )
  //     },
  //     {
  //         field: 'Delete', headerName: '', width: 150,
  //         renderCell: (params) => (
  //             <Link
  //                 to={""}
  //                 onClick={() => { handleDelete(String(params.id)); }}
  //             >
  //                 Delete
  //             </Link>
  //         )
  //     },

  // ];

  // return (

  //     <div className=' row justify-content-center mt-3 w-100'>
  //         <div className="my-2 d-flex justify-content-center align-items-center">
  //             <h3 className='mx-2'>{data?.name}</h3>
  //             <div className='mx-2'><img style={{ width: "45px" }} src={'https://ik.imagekit.io/z6k3ktb71/' + data?.icon?.name} alt="" /></div>
  //         </div>
  //         <DataGrid
  //             rows={data?.subcategories||[]}
  //             columns={columns}
  //             autoHeight={true}
  //         />
  //         <Errors errs={errs} />
  //         <div style={{
  //             position: 'fixed',
  //             right: 0,
  //             bottom: 0

  //         }}>

  //             <Link to={`/categories/${id}/new`}>
  //                 <SpeedDial
  //                     ariaLabel="SpeedDial basic example"
  //                     sx={{ position: 'absolute', bottom: 16, right: 16 }}
  //                     icon={<SpeedDialIcon />}
  //                 >
  //                 </SpeedDial></Link>
  //         </div>
  //     </div>
  // )
  return <></>;
}
