import DataTable from "../muiComponent/table";
import { fetchData, postData } from "../../utils/thunkApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Mood = () => {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mood.data);
  const fieldData = useSelector((state) => state.mood.inputData);
  const fieldImage = useSelector((state) => state.mood.image);
//   console.log(fieldData,"fieldData")
 
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

  const handleClick = async(e) => {
    e.preventDefault();
   let res= dispatch(postData(concatenatedData));

  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <DataTable
        data={data}
        component="mood"
        inputData={inputData}
        handleClick={handleClick}
      />
    </>
  );
};
export default Mood;
