var request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:3000';

describe("API test suite", () => {
    describe("GET /", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url + "/movies", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return description", function(done) {
            request.get(base_url + "/movies", (error, response, body) => {
                expect(body).toBe('[{"movie_id":1,"title":"Wielki Gatsby","duration":142},{"movie_id":2,"title":"Kill Bill 1","duration":111},{"movie_id":3,"title":"Złoto dla zuchwałych","duration":144}]');
                done();
            });
        });
    });
    describe("GET /", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url + "/movies/1", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return description", function(done) {
            request.get(base_url + "/movies/1", (error, response, body) => {
                expect(body).toBe('[{"movie_id":1,"title":"Wielki Gatsby","duration":142}]');
                done();
            });
        });
    });
    describe("GET /", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url + "/movies/duration/avarage", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return description", function(done) {
            request.get(base_url + "/movies/duration/avarage", (error, response, body) => {
                expect(body).toBe('[{"avg":"132.3333333333333333"}]');
                done();
            });
        });
    });
});