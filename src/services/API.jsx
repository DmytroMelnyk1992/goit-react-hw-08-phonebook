import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContactsApi = () => {
  return axios('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const deleteContactsApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
