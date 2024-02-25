import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import AddIcon from "@mui/icons-material/Add";
import { FormComponent } from "../bootstrapForm/form";
import { useDispatch, useSelector } from "react-redux";
import { postDataFalse } from "../../redux/dataSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchData } from "../../utils/thunkApi";
import { Toastify } from "../../erreorToast/toastify";

export default function DataTable({ data, component ,formToggle,setFormToggle,setEditData}) {
  const dataAdd = useSelector((state) => state.mood.postData);
// const [editData,setEditData]= React.useState([])

  const dispatch=useDispatch()
// const navigate=useNavigate()
  // const [formToggle, setFormToggle] = React.useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 200 , hideable: true,
    checkboxSelection: false},
    { field: "length", headerName: "length", width: 200 },
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,

      renderCell: (params) =>
        params.value ? (
          <img
            src={"https://motivation-backend-1.onrender.com/img/" + `${params.value}`}
            alt="Image"
            style={{ width: "98px", borderRadius: "37px", height: "86px" }}
          />
        ) : (
          <p>no data</p>
        ),
    },
 
 
    {
      field: "remove",
      headerName: "Delete",
      sortable: false,
      width: 90,
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="Delete"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(params.row.id);
            }}
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 90,
      sortable: false,
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="edit"
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(params.row.id);
            }}
            size="small"
          >
            <EditIcon />
          </IconButton>
        </div>
      ),
    },
  ];
  const handleAdd = (e) => {
    e.stopPropagation();

    setFormToggle(true);

    dispatch(postDataFalse("fasle"))
  
  };

  const handleEdit = async(id) => {
   
  try {
    const edit = await axios.put(`https://motivation-backend-1.onrender.com/api/mood_edit/${id}`)
    if(edit){
      setEditData(edit.data.get_with_id)
      setFormToggle(true)
      dispatch(postDataFalse("false"))
    }
  } catch (error) {
    console.log(error)
  }
  };

  
 

  const handleDelete =async (id) => {
   try {
    const del_data= await axios.delete(`https://motivation-backend-1.onrender.com/api/delete_mood/${id}`)
    console.log(del_data,"del")
    dispatch(fetchData());
   } catch (error) {
    
   }
  };
  const rows = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      rows.push({
        id:data[i]._id,
        length: i+1,
        title: data[i].Title,
        image: data[i].image,
      });
    }
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="show_current_page d-flex justify-content-between">
        <h1>mood</h1> 
        <div>
        
      
    <Button variant="contained" color="success" background="red"  onClick={handleAdd}>Add</Button>
       
        </div>
      </div>
      <div style={{ height: '500px', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          rowHeight={100}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
}
