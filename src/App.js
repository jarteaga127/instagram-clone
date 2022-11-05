//Run this with npm

import NavBar from "./components/NavBar";
import Timeline from "./components/TimeLine";
import UserList from "./components/UserList";
import { UserListData } from "./data/UserListData";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
     <Timeline/>
     <UserList suggestions={UserListData}/>
     </main>
    </div>
  );
}

export default App;
