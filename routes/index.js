var express = require('express');
var router = express.Router();

var request = require('request'),
    cheerio = require('cheerio');

var url_stu = "https://www.acmicpc.net/school/ranklist/426";
var url_school = "https://www.acmicpc.net/ranklist/school";

var rank = [{"handle": "","solved": ""},{"handle": "","solved": ""},{"handle": "","solved": ""}];
request(url_stu, function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
        //console.log($("tbody > tr"));
        $("tbody > tr").each(function() {
            var data = $(this)[0];
            //console.log(data.children[1].children[0].data);
            //console.log(data.children[3].children[1].children[1].children[0].data);
            //console.log(data.children[7].children[1].children[0].data.trim());
            var number = data.children[1].children[0].data;
            if(number < 4 && 0 < number){
                rank[number-1]["handle"] = data.children[3].children[1].children[1].children[0].data;
                rank[number-1]["solved"] = data.children[7].children[1].children[0].data.trim();
            }
        });
        console.log(rank);
    }
})
var contents = {"rank": "", "school": "","solved": ""};
request(url_school, function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
        //console.log($("tbody > tr")[1]);
        //console.log($("tbody > tr").find("td")[2]);
        $("tbody > tr").each(function() {
            var data = $(this)[0];
            //console.log(data.children[1].children[0].data);
            //console.log(data.children[3].children[1].children[0].data);
            //console.log(data.children[9].children[1].children[0].data.trim());
            //contents["rank"] = data.children[1].children[0].data;
            contents["school"] = data.children[3].children[1].children[0].data;
            //contents["solved"] = data.children[9].children[1].children[0].data.trim();
            if(contents["school"] === "한양대학교(ERICA)"){
                contents["rank"] = data.children[1].children[0].data;
                contents["solved"] = data.children[9].children[1].children[0].data.trim();
            }

        });
        contents["school"] = "ERICA";
        console.log(contents);
    }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { rank: rank, contents: contents });
});

module.exports = router;
