import InputFileUpload from "../muiComponent/fileUpload";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInputData,
  imageUpload,
  postDataFalse,
} from "../../redux/dataSlice";
import { fetchData } from "../../utils/thunkApi";
import axios from "axios";
import { Button } from "@mui/material";
const FormComponent = ({
  datafields,
  handleClick,
  editData,
  setFormToggle,
  closeHandle
}) => {

  const [imageFile, setImageFile] = useState();
  const dataAdd = useSelector((state) => state.mood.inputData);
  const [fields, setFields] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleFileUpload = (file) => {
    setImageFile(file);
  
    dispatch(imageUpload({ image: file }));
  };

  const updateHandle = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("Title", dataAdd?.Title);
      formdata.append("image", imageFile);
      const update = await axios.put(
        `https://motivation-backend-1.onrender.com/api/mood_update/${editData._id}`,
        formdata
      );
      console.log(update, "update");
    
        dispatch(fetchData());
      
      setFormToggle(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    dispatch(addInputData(fields));
  }, [fields]);


  useEffect(() => {
    setFields(editData);
  }, [editData]);

  return (
    <>
      <form>
        <div className="button_close my-2" style={{float:"right"}}>

      <Button variant="contained" color="success" background="red"  onClick={closeHandle}>close</Button>
        </div>
        <div className="form-group">

          {datafields?.map((item, index) => {
           
            return (
              <React.Fragment key={index}>
                {item.name === "image" ? (
                  <div className="fileupload my-2">
                    <InputFileUpload
                      handleFileUpload={handleFileUpload}
                      editData={editData}
                    />
                  </div>
                ) : (
                  <>
                    <label htmlFor={`field-${index}`}>{item?.label}</label>
                    <input
                      type={item.type}
                      className="form-control"
                      id={`field-${index}`}
                      name={item.name}
                      placeholder={item.placeholder}
                      value={fields?.[item?.name ? item.name : "Title"]}
                      onChange={handleChange}
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
          {Object.keys(editData || "").length <= 0 ? (
            <>
              {" "}
              <button
                type="submit"
                className="btn btn-primary my-2"
                onClick={handleClick}
              >
                {"Submit"}
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="btn btn-primary my-2"
              onClick={updateHandle}
            >
              {"Update"}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export { FormComponent };
