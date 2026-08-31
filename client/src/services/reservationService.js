import api from './api';
export const createReservation = (payload) => api.post('/reservations', payload).then(r => r.data);
export const getMyReservations = () => api.get('/reservations/mine').then(r => r.data);
export const cancelReservation = (id) => api.patch(`/reservations/${id}/cancel`).then(r => r.data);
export const getAllReservations = () => api.get('/reservations').then(r => r.data);
export const updateReservation = (id, status) => api.patch(`/reservations/${id}`, { status }).then(r => r.data);
