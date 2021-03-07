import axios from "axios";
const baseURL = process.env.MONGODB_URI || ''

export default {
  // Gets all fidos
  getFidos: function() {
    return axios.get(baseURL + "/api/fidos");
  },
  // Gets the fido with the given id
  getFido: function(id) {
    return axios.get(baseURL + "/api/fidos/" + id);
  },
  // Deletes the fido with the given id
  deleteFido: function(id) {
    return axios.delete(baseURL + "/api/fidos/" + id);
  },
  // Saves a fido to the database
  createFido: function(fidoData) {
    return axios.post(baseURL + "/api/fidos", {fidoData});
  },
  // Saves a fido to the database
  saveFido: function(fidoData) {
    return axios.post(baseURL + "/api/fidos", fidoData);
  },
   
};
