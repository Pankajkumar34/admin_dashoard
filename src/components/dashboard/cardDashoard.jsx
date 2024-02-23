
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import BasicCard from '../muiComponent/card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../utils/thunkApi';

function TabsBasic() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.mood.data);


    React.useEffect(() => {
        dispatch(fetchData());
      }, []);
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>
      <TabList>
        <Tab>Mood</Tab>
        <Tab>Interests</Tab>
        <Tab>Preferences</Tab>
      </TabList>
      <TabPanel value={0}>
      <BasicCard moodData={data}/>
      </TabPanel>
      <TabPanel value={1}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}

const CardDashboard=()=>{
    const dispatch = useDispatch();
    const data = useSelector((state) => state.mood.data);
    React.useEffect(() => {
        dispatch(fetchData());
      }, []);
    return(
        <>
        <TabsBasic/>
        
        </>
    )
}

export default CardDashboard



