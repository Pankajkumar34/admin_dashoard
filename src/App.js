// import logo from './logo.svg';
// import './App.css';

import Interestes from "./components/dashboard/interestes";
import Mood from "./components/dashboard/mood";
import Preferences from "./components/dashboard/preferences";
import Layout from "./main_layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="mood" element={<Mood/>} />
          <Route path="interests" element={<Interestes/>}/>
          <Route path="preferences" element={<Preferences/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
