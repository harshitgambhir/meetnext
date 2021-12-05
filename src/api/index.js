import axios from 'axios';
import { API_URL } from '../constants';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

export const logout = (ctx) =>
  api
    .get('/logout', {
      headers: {
        cookie: ctx?.req?.headers?.cookie
      }
    })
    .then((res) => res.data);

export const getUser = (ctx) => api.get('/profile', {
  headers: {
    cookie: ctx?.req?.headers?.cookie
  }
}).then(res => res.data);

export const updateUser = (data) => api.put('/profile', data, {
  headers: {
    'content-type': 'multipart/form-data',
  }
}).then(res => res.data);

export const getPublicUser = (username) => api.get(`/user/${username}`).then(res => res.data);

export const getTimes = (ctx) => api.get('/times', {
  headers: {
    cookie: ctx?.req?.headers?.cookie
  }
}).then(res => res.data);

export const updateTimes = (data) => api.put('/update-times', data).then(res => res.data);

export const addMeeting = ({ username, data }) => api.post(`/user/${username}/meet`, data).then(res => res.data);

export const getMeetings = (ctx) => api.get('meetings', {
  headers: {
    cookie: ctx?.req?.headers?.cookie
  }
}).then(res => res.data);

export const getMeeting = (id) => api.get(`/meetings/${id}`).then(res => {
  console.log(res.data)
  return res.data
});