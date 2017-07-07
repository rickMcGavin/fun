var express = require('express');
var fs = require('fs');
var request = request('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scraper', function(req, res) {
	// Enter url below of the site you want to scrape
	url = '';

	request(url, function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);

			// set up variables and json.
			// Example below commented out

			// var title, release, rating;
   		// var json = { title : "", release : "", rating : ""};

   		// select unique classes and run them through fiters to get the specific data you want
   		// Example below commented out

   		// $('.ratingValue').filter(function(){
     //    var data = $(this);
     //    rating = data.text().trim();

     //    json.rating = rating;
     //  })

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