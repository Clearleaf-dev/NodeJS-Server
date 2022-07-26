// Define variables
const http = require("http")                                // Define the http module
const fs = require("fs")                                    // Define the FileServer module
const port = 3000                                           // Define port

// Create the server
const server = http.createServer(function(req, res){
    res.writeHead(200, { "Contect-Type": "text/html"})      // Response statuscode 200 [OK], tells the information is in HTML
    fs.readFile("index.html", function(error, data){        // Read the index.html file and check for error
        if (error) {                                        // If error is true run this part
            res.writeHead(404)                              // Response statuscode 404 [File not found]
            res.write("Error: File Not Found")              // Write out the text in the page
        } else {                                            // If error is false run this part
            res.write(data)                                 // This wil write the html file to the browser
        }
        res.end()
    })
})

// Server start and check for errors
server.listen(port, function(error){
    if (error) {                                            // If error is true run this part
        console.log("Something went wrong", error)          // Console log error
    } else {                                                // If error is false run this part
        console.log("Server is listening on port " + port)  // Console log good start
    }
})
