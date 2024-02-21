import DataTable from "../muiComponent/table";
// import { fetchData } from "../../redux/dataSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
const Interestes = () => {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.mood.data);
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);



  const inputData=[
    {
        id:1,
        name:"Title",
        label:"Title",
        type:"text"
    },
   
    {
        id:2,
        name:"image",
        label:"Image",
        type:"file"
    },
   
  ]
  return (
    <>
      <DataTable  />
    </>
  );
};
export default Interestes;
