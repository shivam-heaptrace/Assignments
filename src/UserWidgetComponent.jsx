import './assets/UserWidgetComponent.css';


const UserWidgetComponent = () => {
       function navigator() {
        const navBar = document.getElementById("navbar");

        if (navBar)
            navBar.classList.toggle('hidden');
         else 
            alert("Error: Element with ID 'navbar' not found.");
    }

    return (
    <>
    <div style= {{ display: 'flex', flexDirection: 'row', width: '100%', height:'100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column'}} id="navbar">
            <h1 style={{marginTop:'0%'}}>
                <span style={{color: 'pink'}}>M</span>ultiKart
            </h1>
            <h3 style={{width: '100%'}}>Main Menu</h3>
            <nav>
                <ul>
                    <li style={{ padding: '10px 0' }}><i className="fa-solid fa-gauge-high"></i> DashBoard</li>
                    <li style={{ padding: '10px 0' }}><i className="fa-solid fa-user-plus"></i> Users</li>
                </ul>
            </nav>
        </div>
        <div style={{width: '-webkit-fill-available'}}>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <span onClick={navigator}>
                    <i className="fa-solid fa-bars"></i>
                </span>
                <div style={{height: '5em', width: '15em',backgroundColor: '#d3cdcd'}}>
                    <div style={{marginTop: '8px', display: 'flex'}}>
                        <div style={{width: '50%'}}>
                            <img src="https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="Man-face" style={{borderRadius: '50%', height: '50%', width: '50%'}}></img>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label>Franklin Jr.</label>
                            <sub>Super Admin</sub>
                        </div>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1em', marginBottom: '1em'}}>
                <div>
                    <b>Users</b> 
                </div>
                <div id="buttons">
                    <span>                        
                        <button type="button" style={{backgroundColor: 'white', color:'blueviolet', borderRadius:'11%'}}><i className="fa-solid fa-list"></i></button>
                        <button type="button" style={{backgroundColor: 'blueviolet', color:'white', borderRadius:'11%'}}><i className="fa-solid fa-grip"></i></button>
                    </span>
                    <button type="button" style={{backgroundColor: 'blueviolet', color:'white', borderRadius:'11%'}}>+ Add User</button>
                </div>
            </div>
            <div style={{border: '1px', borderColor: 'black', borderStyle:'solid', height:'80vh', width:'95%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>                        
                        <span style={{backgroundColor: 'rgb(239, 239, 239)'}}><button type="button">Sort By</button></span>
                        <span><button type="button">Filter By</button></span>
                    </div>
                    <span>
                        <input type="text" name="" id="" placeholder="Search here"></input>
                    </span>
                </div>
                <div>                    
                    <div style={{height: '5em', width: '15em', backgroundColor: '#d3cdcd', border: 'rgb(185, 182, 182) solid'}}>
                        <div style={{marginTop: '8px', display: 'flex'}}>
                            <div>
                                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Women-face" style={{borderRadius: '50%', width: '50%', marginTop: '-6px', marginLeft: '8px'}}></img>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginTop: '8px'}}>
                                 <label>Rowam Torres</label>
                                 <sub>rowan.torres@gmail.com</sub>
                                 <sub>active</sub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default UserWidgetComponent;