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

export default function DataTable({ data, component ,inputData,handleClick}) {
  const dataAdd = useSelector((state) => state.mood.postData);
const [editData,setEditData]= React.useState([])
console.log(editData,"editData")
  const dispatch=useDispatch()
// const navigate=useNavigate()
  const [formToggle, setFormToggle] = React.useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 200 ,hideable: true},
    { field: "length", headerName: "length", width: 200 },
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,

      renderCell: (params) =>
        params.value ? (
          <img
            src={"http://localhost:4000/img/" + `${params.value}`}
            alt="Image"
            style={{ width: "117pxpx", borderRadius: "25px", height: "80px" }}
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
    // setEditData(null)
    // if(dataAdd===false){

    // }
    dispatch(postDataFalse("fasle"))
  
  };

  const handleEdit = async(id) => {
   
  try {
    const edit = await axios.put(`http://localhost:4000/api/mood_edit/${id}`)
    if(edit){
      setEditData(edit.data.get_with_id)
      setFormToggle(true)
      dispatch(postDataFalse("false"))
    }
  } catch (error) {
    console.log(error)
  }
  };

  
  const closeHandle=()=>{
    setFormToggle(false)
    setEditData(null)
  }

  const handleDelete =async (id) => {
   try {
    const del_data= await axios.delete(`http://localhost:4000/api/delete_mood/${id}`)
    console.log(del_data,"del")
    dispatch(fetchData());
   } catch (error) {
    
   }
  };
  const rows = [];
  console.log(rows, "roe ");
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
        
       {
        formToggle && dataAdd===false?<Button variant="contained" color="success" background="red"  onClick={closeHandle}>close</Button>:<Button variant="contained" color="success" background="red"  onClick={handleAdd}>Add</Button>
       } 
        </div>
      </div>
      {formToggle && dataAdd=== false ? (
        <FormComponent datafields={inputData} handleClick={handleClick} editData={editData} setFormToggle={setFormToggle}/>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          // components={{
          //   Toolbar: GridToolbar, // optional, to show the toolbar
          // }}
          pageSize={5}
          checkboxSelection
        />
      )}
    </div>
  );
}
