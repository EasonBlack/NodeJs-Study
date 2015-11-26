
var Crawler = require("simplecrawler");

Crawler.crawl("http://www.baidu.com")
    .on("fetchcomplete", function(queueItem) {
        console.log("Completed fetching resource:", queueItem.url);
});