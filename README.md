<h1 align="center">
  Challenge API consuming endPoint ViaCep
</h1>

<p align="center">
  <a href="#-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-How to use">How to use</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="img" src="consuming-api/print.png" width="100%">

</p>


## 🚀 Technologies

This project was developed with the following technologies:

- HTML
- CSS
- JavaScript
- Nodejs
- Express
- JQuery


## 💻 Project

This application was a challenge I received to start working at the startup Buzzlead as an internship. The challenge was to develop a Rest API that would consume a ViaCep EndPoint, and make a Frontend that when typing the street name would automatically complete the zip code and other address data.


## :memo: How to use

in node the server.js -> does all the backend:
- Implements an endpoint for querying the zip code
- Upon receiving request from the client, extracts the street name from JSON
- Query api via ZIP code
- generate response JSON


in html/JS(Jquery) the index.html together with script.js do the front end:
- Gets data from user
- Send request via REST (http POST)
- Get response and fill in the data


--------------steps----------

--> for the tests, you must have node.js installed

-->To run the back-end file "server.js" you must install the following modules: nodemon, express, axios and cors. => command "node i nodemon express axios cors"

-->After running "server.js" our endpoint is up, and to make a post request, simply access the address: "http://local:host/3008/Nome da rua" and it will return the address data in json format

-->To run the test front must be executed the file "index.html" that brings in its body the "script.js", to test the front I recommend installing in terminal the "lite-server" that has a type of automatic reading of HTML code through the creation of a server command => "npx lite-server

--> When executing the code, just fill in the street in Goiânia :).

--> ex: Suely Fraissat Street

