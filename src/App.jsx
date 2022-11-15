import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {addUser, deleteUser, updateUsername} from "./features/Users";
import Swal from "sweetalert2";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");



  return (
    
    <div className="box-border w-full min-h-screen flex flex-col items-center  bg-teal-500 ">
      <h1 className="text-5xl text-center pb-10 pt-10 text-white">CRUD REDUX TOOLKIT</h1>
      <div className="flex flex-col justify-center items-center">
        <input
          className="border-none rounded select-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 w-72"
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-none rounded select-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 mt-2 w-72"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="rounded-full bg-cyan-400  mt-2  text-white w-40"
          onClick={() => { name !== "" && username !== "" ?
            dispatch(addUser({ id: userList.length !== 0 ? userList[userList.length - 1].id + 1 : userList.length , name: name, username: username})) :
            Swal.fire( {title: 'Please fill all the fields!',
            icon: 'error'})
          }}>
          Add User
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start">
        {userList.length !== 0  ?
        userList.map((user) => (
          <div className="bg-cyan-200 rounded-lg m-h-64 p-2 mx-4 mt-5 flex flex-col justify-center " key={user.id}>
            <h3 >Name: <span className="font-bold">{user.name}</span></h3>
            <p>Username: <span className="font-bold"> {user.username} </span></p>
            <input className="border-none mt-2 rounded select-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-2 w-60" type="text" placeholder="Enter new username" onChange={(e) => setNewUsername(e.target.value) } />
            <button className="rounded-full bg-green-600 mx-auto mt-2  text-white w-40 " onClick={() => dispatch(updateUsername({id: user.id, username: newUsername})) }>Update Username</button>
            <button className="rounded-full bg-red-400 mx-auto  mt-2  text-white w-40" onClick={() => dispatch(deleteUser({id:user.id}))}>Delete user</button>
          </div>
        ))

        : <h1 className="text-2xl text-white pt-10">No users, please add some!</h1>
      }
      </div>
    </div>
  
  );
}

export default App;
