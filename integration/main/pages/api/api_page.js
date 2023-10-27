const supertest = require ('supertest');
const api = supertest('https://reqres.in');

function getAPIsingleUser(response) {
    api.get('/api/users/2')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function getAPIsingleUserNotFound(response) {
    api.get('/api/users/23')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function getAPIResourceNotfound(response) {
    api.get('/api/unknown/23')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function postAPI(response) {
    api.post('/api/users')
        .set('Accept', 'application/json')
        .send({
            "name": "naufal",
            "job": "leader"
        })
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function postAPILoginFail(response) {
    api.post('/api/login')
        .set('Accept', 'application/json')
        .send({
            "email": "peter@klaven"
        })
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function postAPIRegisterFail(response) {
    api.post('/api/login')
        .set('Accept', 'application/json')
        .send({
            "email": "peter@klaven"
        })
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function putAPI(response) {
    api.post('/api/users/2')
        .set('Accept', 'application/json')
        .send({
            "name": "naufal",
            "job": "leader"
        })
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

function deleteAPI(response) {
    api.delete('/api/users/2')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, result) => {
            response(result);
        });
}

module.exports = {
    getAPIsingleUser,
    getAPIsingleUserNotFound,
    getAPIResourceNotfound,
    postAPI,
    postAPILoginFail,
    postAPIRegisterFail,
    putAPI,
    deleteAPI
}