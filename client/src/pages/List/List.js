import React from 'react'
import AddUserForm from '../../components/Forms/AddUserForm';
import EditUserForm from "../../components/Forms/EditUserForm";
import UserTable from '../../components/Tables/UserTable';

const List = () => {
    const usersData = [
      { id: 1, Fido_Name: 'Silas', Breed: 'Dobberman', Sex: "Male", Age: 6, City: "Heber", Park: 'City Park', Owners_Preffered_Drink: 'Iced Caramel Machiatto' },
      { id: 2, Fido_Name: 'Puck', Breed: 'Long Hair German Shepard', Sex: "Male", Age: 1, City: "Spanish Fork", Park: 'City Park', Owners_Preffered_Drink: 'Hot Caramel Machiatto' },
      { id: 3, Fido_Name: 'Odin', Breed: 'Short Heired German Shepherd', Sex: "Male", Age: 12, City: "Spanish Fork", Park: 'City Park', Owners_Preffered_Drink: 'Blue Agave Full Throttle Energy Drink' },
      { id: 4, Fido_Name: 'Chewie', Breed: 'Red Heeler', Sex: "Male", Age: 6, City: "Ogden", Park: 'City Park', Owners_Preffered_Drink: 'Iced Salted Caramel' },
    
    ]
  
    const initialFormState = { id: null, Fidoname: '', breed: '', Sex: '', Age: '', City: '', Park: '', Owners_Preffered_Drink: ''}
  
    // Setting state
    // eslint-disable-next-line no-undef
    const [users, setUsers] = useState(usersData)
    // eslint-disable-next-line no-undef
    const [currentUser, setCurrentUser] = useState(initialFormState)
    // eslint-disable-next-line no-undef
    const [editing, setEditing] = useState(false)
  
    // CRUD operations
    const addUser = user => {
      user.id = users.length + 1
      setUsers([...users, user])
    }
  
    const deleteUser = id => {
      setEditing(false)
  
      setUsers(users.filter(user => user.id !== id))
    }
  
    const updateUser = (id, updatedUser) => {
      setEditing(false)
  
      setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }
  
    const editRow = user => {
      setEditing(true)
  
      setCurrentUser({ id: user.id, fidoname: user.fidoname, breed: user.breed, sex: user.sex, age: user.age, city: user.city, park: user.park, Owners_Preffered_Drink: user.Owners_Preffered_Drink})
    }
  
  
    return (
      <div className="container">
        <h1>Owners Like List</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <React.Fragment>
                <h2>Edit Fido</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <h2>Add Fido</h2>
                  <AddUserForm addUser={addUser} />
                </React.Fragment>
              )}
          </div>
          <div className="flex-large">
            <h2>View Fidos</h2>
            <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
          </div>
        </div>
      </div>
    )
  }
  export default List
