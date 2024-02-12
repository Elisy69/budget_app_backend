import http from "http";

http
  .createServer(function (req, res) {
    res.write("this is backend!", "toJSON()");
    res.end();
  })
  .listen(5000);

console.log("Backend server running at port 5000");
