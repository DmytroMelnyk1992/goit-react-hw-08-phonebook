import axios from 'axios';

axios.defaults.baseURL = 'https://639c9bcf42e3ad69273710ae.mockapi.io/v1/';

export const getContactsApi = () => {
  return axios('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const deleteContactsApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
