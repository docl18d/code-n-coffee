import React, { useState } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { fidoname, value } = event.target

    setUser({ ...user, [fidoname]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Fido Name</label>
      <input
        type="text"
        name="fidoname"
        value={user.fidoName}
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
        value={user.ownersPreferredDrink}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm