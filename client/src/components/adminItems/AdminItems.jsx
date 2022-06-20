import "./adminItems.css";
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteItem, getItems } from "../../redux/apiCalls";



export default function AdminItems() { 
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
   console.log(items)


  useEffect(() => {
    getItems(dispatch);
  }, [dispatch]);
  

  const handleDelete = (id) => {
  
  };

  const columns = [
    { field: "_id", headerName: "ID", headerAlign: 'center', width: 180 },
    {
      field: "title",
      headerName: "Product",
      headerAlign: 'center',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock",  headerAlign: 'center',headerName: "Stock", width: 140 },
    { field: "quantity",  headerAlign: 'center',headerName: "Quantity", width: 140 },
    {
      field: "cost",
      headerName: "Cost($)",
      headerAlign: 'center',
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: 'center',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: 1100, marginTop:30, display:"flex",justifyContent:"center"}}>
      
      <Link to="/newItem">
        <button className="newProductButton">Add Item </button>
      </Link> 
      <DataGrid
        rows={items}
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
       // checkboxSelection
        disableSelectionOnClick
      />
         
    </div>
  );
}
