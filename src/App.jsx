import { useState } from "react";
import UserWidgetComponent from "./Components/UserWidgetComponent";
import AddUserComponent from "./Components/AddUserComponent";
import EditUserComponent from "./Components/EditUserComponent";

const App = () => {
  const [currentView, setCurrentView] = useState('list'); 
  const switchToAdd = () => setCurrentView('add');
  const switchToList = () => setCurrentView('list'); 
  
  const switchToEdit = (userId) => {
    setEditingUserId(userId);
    setCurrentView('edit')
  };  

  const [editingUserId, setEditingUserId] = useState(null);

  let Content = <></>;

  if (currentView === 'list')
    Content = <UserWidgetComponent onSwitchToAdd={switchToAdd} onswitchToEdit={switchToEdit} /> 
  else if (currentView === 'add') 
    Content = <AddUserComponent onSwitchToList={switchToList} />
  else if (currentView === 'edit') 
    Content = <EditUserComponent userId={editingUserId} onSwitchToList={switchToList} onSwitchToAdd={switchToAdd}/>

  return (<>
    {Content}
  </>
  );
};

export default App;