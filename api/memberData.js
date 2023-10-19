import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getMembers = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/member.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headedrs: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/member/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/member.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/member/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/member/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const viewMembersDetails = (memberFirebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(memberFirebaseKey)
    .then((memberObject) => {
      resolve({ ...memberObject });
    }).catch((error) => reject(error));
});

export {
  getMembers,
  deleteMember,
  createMember,
  getSingleMember,
  viewMembersDetails,
  updateMember,
};
