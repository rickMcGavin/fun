var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scraper', function(req, res) {
	// Enter url below of the site you want to scrape
	url = 'http://www.nfl.com/schedules/2017/REG1';

	request(url, function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);

			// set up variables and json.
			
			var date;
			var json = { date: "" };

   		// select unique classes and run them through fiters to get the specific data you want
   		$('.schedule-list-date').filter(function() {
   			var data = $(this);
   			date = data.children();

   			json.date = date;
   		})
		}

		// The most round about way of writing the output json file. I don't current know enough about this to make it less a pain in the ass, so it will have to do for now.
		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')

	})

})

app.listen('8081');
console.log('Getting that NFL Schedule man!');
exports = module.exports = app;