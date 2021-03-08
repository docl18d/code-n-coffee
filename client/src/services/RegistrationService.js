import axios from 'axios';
import bcrypt from 'bcryptjs';

export const UserRegistration = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    data["password"] = hash;

    return axios.post('http://localhost:5000/registration/register', data)
        .then(res => res.status);
};

export const emailValidation = data => (
    axios.post('http://localhost:5000/registration/validateEmail', data)
    .then(exist => exist.status)
)