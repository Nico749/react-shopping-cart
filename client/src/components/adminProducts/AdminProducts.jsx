import "./adminProducts.css";
import  {React} from 'react';
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} alt="" />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 200,
    editable: true,
  },
  {
    field: 'inStock',
    headerName: 'Stock',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/product/" + params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutlineOutlinedIcon
            className="productListDelete"
            // onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
 
];

const rows = [
  { id: 1, price: '3.44', product: 'Mango', inStock: "true" },
  { id: 2, price: '3.44', product: 'Mango', inStock: "true" },
  { id: 3, price: '3.44', product: 'Mango', inStock: "true" },
  { id: 4, price: '3.44', product: 'Mango', inStock: "true" },
 
];

export default function AdminProducts() {
  return (
    <div style={{ height: 600, width: 1000, marginTop:30, marginLeft:30 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
