const data = require('./../../main/data/api/api_data');
const responseStatus = require('./../../main/helper/responseCode.json')
const schemaAPI = require('./../../main/data/api/schema/api_schema.json');
const api = require('./../../main/pages/api/api_page');
const expect  = require('chai').expect;
const chai = require('chai');
const expect_json_schema = require('chai').expect
chai.use(require('chai-json-schema'));

describe('API - GET', () => {
    it('@GET @normal @ID-01 Get Single users', (done) => {
        api.getAPIsingleUser((response) => {
            expect(response.status).to.equal(responseStatus.successOk);
            expect(response.body.data.id).to.equal(data.singleUsers.data.id);
            expect(response.body.data.email).to.equal(data.singleUsers.data.email);
            expect(response.body.data.first_name).to.equal(data.singleUsers.data.first_name);
            expect(response.body.data.last_name).to.equal(data.singleUsers.data.last_name);
            expect(response.body.data.avatar).to.equal(data.singleUsers.data.avatar);
            expect(response.body.support.url).to.equal(data.singleUsers.support.url);
            expect(response.body.support.text).to.equal(data.singleUsers.support.text);
            done();
        });
    });

    describe('API - GET', () => {
        it('@GET @normal @ID-02 Get Single users not found', (done) => {
            api.getAPIsingleUserNotFound((response) => {
                expect(response.status).to.equal(responseStatus.failedNoFound);
                // expect(response.body).to.equal(data.notFound);
                done();
            });
        });
    });

    describe('API - GET', () => {
        it('@GET @normal @ID-03 Get single <RESOURCE> Not found', (done) => {
            api.getAPIResourceNotfound((response) => {
                expect(response.status).to.equal(responseStatus.failedNoFound);
                // expect(response.body).to.equal(data.notFound);
                done();
            });
        });
    });

    describe('API - DELETE', () => {
        it('@DELETE @normal @ID-04 Delete users success', (done) => {
            api.deleteAPI((response) => {
                expect(response.status).to.equal(responseStatus.successNoContent);
                done();
            });
        });
    });

    describe('API - POST', () => {
        it('@POST @normal @ID-05 Success create new users', (done) => {
            api.postAPI((response) => {
                expect(response.status).to.equal(responseStatus.successCreated);
                expect(response.body.name).to.equal(data.successCreateUsers.name);
                expect(response.body.job).to.equal(data.successCreateUsers.job);
                expect(response.body.id).not.to.be.null;
                expect(response.body.createdAt).not.to.be.null;
                done();
            });
        });
    });


    describe('API - PUT', () => {
        it('@PUT @normal @ID-06 Success update users', (done) => {
            api.putAPI((response) => {
                expect(response.status).to.equal(responseStatus.successCreated);
                expect(response.body.name).to.equal(data.successUpdateUsers.name);
                expect(response.body.job).to.equal(data.successUpdateUsers.job);
                expect(response.body.updatedAt).not.to.be.null;
                done();
            });
        });
    });

    describe('API - POST', () => {
        it('@POST @normal @ID-07 Login unsuccessful', (done) => {
            api.postAPILoginFail((response) => {
                expect(response.status).to.equal(responseStatus.failedInvalidRequest);
                expect(response.body.error).to.equal(data.unsuccessLogin.error);
                done();
            });
        });
    });

    describe('API - POST', () => {
        it('@POST @normal @ID-08 Login unsuccessful', (done) => {
            api.postAPIRegisterFail((response) => {
                expect(response.status).to.equal(responseStatus.failedInvalidRequest);
                expect(response.body.error).to.equal(data.unsuccessRegister.error);
                done();
            });
        });
    });


    


});