import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Fido Name</th>
        <th>Breed</th>
        <th>Sex</th>
        <th>Age</th>
        <th>City</th>
        <th>Park</th>
        <th>Owners Preferred Drink</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>Fido Name data</td>
            <td>Breed data</td>
            <td>Sex data</td>
            <td>Age data</td>
            <td>City data</td>
            <td>Park data</td>
            <td>Owners Preferred Drink Data</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={7}>No users</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default UserTable