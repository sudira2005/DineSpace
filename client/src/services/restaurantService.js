import api from './api';
export const getRestaurants = (search = '') => api.get('/restaurants', { params: search ? { search } : {} }).then(r => r.data);
export const getRestaurant = (id) => api.get(`/restaurants/${id}`).then(r => r.data);
export const createRestaurant = (payload) => api.post('/restaurants', payload).then(r => r.data);
export const updateRestaurant = (id, payload) => api.put(`/restaurants/${id}`, payload).then(r => r.data);
export const deleteRestaurant = (id) => api.delete(`/restaurants/${id}`).then(r => r.data);
