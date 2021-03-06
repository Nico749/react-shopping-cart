import "./adminProducts.css";
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteProduct, getProducts } from "../../redux/apiCalls";



export default function AdminProducts() { 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  //console.log(products)


  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
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
      <Link to="/newProduct">
        <button className="newProductButton">Create New Product </button>
      </Link> 
      <DataGrid
        rows={products}
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
