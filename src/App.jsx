import { useState } from "react";
import UserWidgetComponent from "./Components/UserWidgetComponent";
import AddUserComponent from "./Components/AddUserComponent";

const App = () => {
  const [currentView, setCurrentView] = useState('list'); 
  const switchToAdd = () => setCurrentView('add');
  const switchToList = () => setCurrentView('list');  

  let Content = (currentView === 'list') ? <UserWidgetComponent onSwitchToAdd={switchToAdd} /> 
    : (currentView === 'add')? <AddUserComponent onSwitchToList={switchToList} /> : <></>;

  return (<>
    {Content}
  </>
  );
};

export default App;