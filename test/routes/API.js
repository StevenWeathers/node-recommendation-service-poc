"use strict";
const Code = require('code');
const expect = Code.expect;
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const beforeEach = lab.beforeEach;
const afterEach = lab.afterEach;
const nock = require('nock');
const _ = require("lodash");

describe('Example API Route', function() {
    let nocks;
    let server;

    let Routes = [
        {
            name: "Route for recommendation API example",
            url: "/recommendation",
        }
    ];

    before(function(done) {
        require('../../')(function(err, obj) {
            server = obj;
            done();
        });
    });

    describe("Successful API Route", function(){
        _.each(Routes, function(route, routeIndex) {
            describe(`When ${route.name} is requested`, function() {
                it('should return a 200 HTTP Code', function(done) {
                    server.inject({
                        url: route.url,
                        method: 'get'
                    }, function(response) {

                        expect(response.statusCode).to.equal(200);

                        done();
                    });
                });
            });
        });
    });
});
