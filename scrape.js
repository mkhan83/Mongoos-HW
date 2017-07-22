// scrape script
// =============

// Require request and cheerio, making our scrapes possible
var request = require("request");
var cheerio = require("cheerio");

// This function will scrape the NYTimes website (cb is our callback)
var scrape = function(cb) {

 // Use the request package to take in the body of the page's html
  request("https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-state/virginia-scholarships/",
   function(err, res, body) {
    // body is the actual HTML on the page. Load this into cheerio

   // Saving this to $ creates a virtual HTML page we can minipulate and
    // traverse with the same methods we'd use in jQuery
    var $ = cheerio.load(body);

   // Make an empty array to save our article info
    var scholarships = [];

   // Now, find and loop through each element that has the "theme-summary" class
    // (i.e, the section holding the articles)
  //  console.log($(".innertube")["0"]);
  var mainContent = $(".innertube")["0"];

var names =  $(mainContent).find('h3');
 var list =  $(mainContent).find('ul');
 var nameList = [];
 var amountList = [];
 var duedateList = [];
 var summeryList = [];

$(names).each(function(index, elem){
   nameList.push($(elem).children().first().text());
 // console.log( $(elem).children().first().text() );
});
 $(list).each(function(index, elem){
  // console.log( $(elem).children().first().text() );
  
 amountList.push( $(elem).children().first().text());
  duedateList.push( $(elem).children().eq(1).text());
  summeryList.push( $(elem).children().eq(2).text());
  // console.log( $(elem).children().eq(1).text() );
  //  console.log( $(elem).children().eq(2).text() );
   //console.log( $(elem).find('li') );

// console.log( $(elem).children().amount().text() )
 });
console.log("amount list",amountList.length);
console.log("duedat list",duedateList.length);
console.log("summery list",summeryList.length);
console.log("name list",nameList.length);
 // console.log( $(elem).children().amount().text() )
 });

   // After our loop is complete, send back the array of articles to the callback function

};
scrape(); 
// Export the function, so other files in our backend can use it
module.exports = scrape;
scholarships.com
Virginia Scholarships - Scholarships.com
Scholarships.com - Virginia Scholarships