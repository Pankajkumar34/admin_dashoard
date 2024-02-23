import DataTable from "../muiComponent/table";
import { fetchData, postData } from "../../utils/thunkApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { FormComponent } from "../bootstrapForm/form";
const Mood = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mood.data);
  const fieldData = useSelector((state) => state.mood.inputData);
  const fieldImage = useSelector((state) => state.mood.image);
  const dataAdd = useSelector((state) => state.mood.postData);
  const [formToggle, setFormToggle] = React.useState(false);
  const [editData, setEditData] = React.useState([]);
  console.log(formToggle, "formToggle");

  const concatenatedData = { ...fieldData, image: fieldImage };

  const inputData = [
    {
      id: 1,
      name: "Title",
      label: "Title",
      type: "text",
    },

    {
      id: 2,
      name: "image",
      label: "Image",
      type: "file",
    },
  ];

  const closeHandle = () => {
    setFormToggle(false);
    setEditData(null);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch(postData(concatenatedData));
      dispatch(fetchData());
     } catch (error) {
      console.log(error)
     }
 
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dataAdd]);
  return (
    <>
      {formToggle && dataAdd === false ? (
        <FormComponent
          datafields={inputData}
          handleClick={handleClick}
          editData={editData}
          setFormToggle={setFormToggle}
          closeHandle={closeHandle}
        />
      ) : (
        <DataTable
          data={data}
          component="mood"
          inputData={inputData}
          handleClick={handleClick}
          setFormToggle={setFormToggle}
          formToggle={formToggle}
          setEditData={setEditData}
        />
      )}
    </>
  );
};
export default Mood;
