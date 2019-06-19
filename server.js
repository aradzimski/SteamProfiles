var express = require('express');

var app = express();

var request = require('request');

// var url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=E1B2BBBA0943C06B8BA042650350F397&steamids=76561197960435530';

// request.get(url, function(error, steamHttpResponse, steamHttpBody) {
//     console.log(steamHttpBody);
// });

app.get('/server/user/:id', function (httpRequest, httpResponse) {
    var url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=E1B2BBBA0943C06B8BA042650350F397&steamids=' + httpRequest.params.id;
    request.get(url, function (error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.setHeader('Access-Control-Allow-Origin', '*')
        httpResponse.send(steamHttpBody);
        console.log(steamHttpResponse);
    });
});

app.get('/server/user/games/:id', function (httpRequest, httpResponse) {
    var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001?key=E1B2BBBA0943C06B8BA042650350F397&steamid=' + httpRequest.params.id + '&format=json&include_appinfo=1';
    request.get(url, function (error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.setHeader('Access-Control-Allow-Origin', '*')
        httpResponse.send(steamHttpBody);
        console.log(steamHttpResponse);
    });
});

var bodyParser = require('body-parser');

app.use(bodyParser.text());

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);