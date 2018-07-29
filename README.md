#Readme file

##Running the app
In order to open this file in the browser, you need to have Python installed on your PC. CD into the project in your terminal, and then run "python -m http.server 8000". I have Python version 3.7.0. And this command works well with it. Another way to open the project is running "npm install -g", and then "serve -p 8000". Both work

##Map
This repository uses Leaflet.js (https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token. Get your access token here: https://www.mapbox.com/install/


##Note
I suffered a lot with this project, and often I got warnings and errors in the console, and the map and pictures didn't show up sometimes when I opened the project. Other times they showed up without problem. In this case, you can try and delete the caches in your browser. It solved my problem! It is also a good idea to force load the page (shift+f5). These little tips can save a lot of time and troubles! (thanks for the tips Cristiano from the forum).

##Reference
Setting the alt attribute for images dynamically in JavaScript: https://stackoverflow.com/questions/15471688/adding-alt-attribute-to-image-in-javascript


