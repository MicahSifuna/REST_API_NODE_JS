// creating http server
const http = require("http");

const getReq = require("./methods/get_request");
const postReq = require("./methods/post_request");
const putReq = require("./methods/put_request");
const deleteReq = require("./methods/delete_request");
// require("dotenv").config();

const PORT = process.env.PORT || 5001;
let movies = require("./data/movies.json");

// creating the server
const server = http.createServer((req, res) => {
    req.movies = movies;
    switch(req.method){
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json")
            res.write(JSON.stringify({title: "Not Found", message: "Route Not Found"}))
            res.end();
    }

});

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})

