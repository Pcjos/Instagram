
import React from "react";
import {ContextProvider } from "../Global/Context";
const Sidebar = () => {
const { loader, user} = React.useContext(ContextProvider); 
const username = !loader && user? user.displayName : "";

const [state,setState]=React.useState([
    {id:1 , image:"images/img2.jfif" ,name:"Freelancers"},
    {id:2 , image:"images/image7.jpg",name:"RiyaSharma11"},
    {id:3 , image:"images/image3.jfif",name:"KajalOzaVaidya"},
    {id:4 , image:"images/image6.jpg",name:"Siya6510"}
])
return (
<div className="sidebar">
{!loader && user ? (
<div className="sidebar_user">
<div className="sidebar_user-avatar">{username[0]}</div>
<div className="sidebar_user-name">{username}</div>
</div>
): (""
)}


<div className="sidebar_list">
<h3>Suggestions for you</h3>
{state.map(user => (
<div className="sidebar_list-user" key={user.id}>
<div className="sidebar_list-a">
<div className="sidebar_list-a-img">
<img src={user.image} alt={user.image} />
</div>
<div className="sidebar_list-a-name">{user.name}</div>
</div>
<div className="sidebar_list-b">Follow</div>
</div>
))}
</div>
</div>
)
};
export default Sidebar;