import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, fidoName: '', breed: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { fidoName, value } = event.target

    setUser({ ...user, [fidoName]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.fidoName || !user.breed) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Fido Name</label>
      <input
        type="text"
        name="fidoname"
        value={user.fido_Name}
        onChange={handleInputChange}
      />
      <label>Breed</label>
      <input
        type="text"
        name="breed"
        value={user.breed}
        onChange={handleInputChange}
      />
      <label>sex</label>
      <input
        type="text"
        name="sex"
        value={user.sex}
        onChange={handleInputChange}
      />
      <label>Age</label>
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      />
      <label>City</label>
      <input
        type="text"
        name="city"
        value={user.city}
        onChange={handleInputChange}
      />
      <label>Park</label>
      <input
        type="text"
        name="park"
        value={user.park}
        onChange={handleInputChange}
      />

      <label>Owners Preferred Drink</label>
      <input
        type="text"
        name="ownersPreferredDrink"
        value={user.owners_Preferred_Drink}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm