import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FindWork from './pages/findWork/FindWork'
import TimeSheets from './pages/timesheets/TimeSheets'
import Messaging from './pages/messaging/Messaging'

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<FindWork/>} />
          <Route path="/timesheets" element={<TimeSheets/>} />
          <Route path="/messaging" element={<Messaging/>} />
        </Routes>
      </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
