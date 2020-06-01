import axios from 'axios';

//main api
const baseUrl = 'http://localhost:3000/tasks/';

//getting tasks
export function getTasks() {
  return axios.get(baseUrl);
}

//setting tasks
export function addTask(task) {
  return axios.post(baseUrl, { task });
}

//deleting tasks
export function deleteTask(taskId) {
  return axios.delete(`${baseUrl}${taskId}`);
}

//editing tasks
export function editTask(taskId, task) {
  return axios.put(`${baseUrl}${taskId}`, {
    name: task,
  });
}
