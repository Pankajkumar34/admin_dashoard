import InputFileUpload from "../muiComponent/fileUpload";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInputData, imageUpload } from "../../redux/dataSlice";
import { fetchData } from "../../utils/thunkApi";
const FormComponent = ({ datafields ,handleClick}) => {
    // const dataAdd = useSelector((state) => state.mood.postData);
    // console.log(dataAdd,"ooooooo")
  const [fields, setFields] = useState({});
  const dispatch=useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleFileUpload = (file) => {
    // console.log(file)
    dispatch(imageUpload({image:file}))
};
  useEffect(()=>{
    dispatch(addInputData(fields))
  },[fields])

//   useEffect(()=>{
//     dispatch(fetchData()) 
//   },[dataAdd===true])
  return (
    <>
      <form>
        <div className="form-group">
          {datafields.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.name === "image" ? (
                  <div className="fileupload my-2">
                    <InputFileUpload handleFileUpload={handleFileUpload} />
                  </div>
                ) : (
                  <>
                    <label htmlFor={`field-${index}`}>{item.label}</label>
                    <input
                      type={item.type}
                      className="form-control"
                      id={`field-${index}`}
                      name={item.name}
                      placeholder={item.placeholder}
                      value={fields[item.name] || ""}
                      onChange={handleChange}
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
          <button type="submit" className="btn btn-primary my-2" onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export { FormComponent };
