# Lesson 1: how a request travels

1. Browser asks DNS for the server's IP address.
2. Browser opens a connection and sends an HTTP request: method, path, headers, maybe a body.
3. Server routes it to the right handler, checks who I am and whether the input is valid.
4. Handler reads or writes the database.
5. Server sends back a status code, headers and a JSON body.
6. My React code parses the JSON, updates state and re-renders.

Frontend: steps 1, 2 and 6. Backend: steps 3 to 5.

Data lives in a database because server memory is wiped on restart and
isn't shared between several copies of the server.