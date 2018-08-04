/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Family Calendar",
			position: "top_left",
			config: {
				fetchInterval: 1000 * 60 * 1,
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://calendar.google.com/calendar/ical/some_email%40gmail.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "calendar",
			header: "NZ Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "http://apps.employment.govt.nz/ical/public-holidays-all.ics"
					}
				]
			}
		},
  {
    module: 'MMM-bitcoin',
    position: 'bottom_right',
    config: {
      fiat: 'usd',          // 'usd' and 'eur' available, defaults to 'usd'
      showBefore: 'BTC',    // will display before the bitcoin price, default 'Bitstamp'
      updateInterval: 60000 // update interval in milliseconds
    }
  },
  {
    module: 'MMM-ethereum',
    position: 'bottom_right',
    config: {
      updateInterval: 30000,
      exchange: "kraken"
    }
  },
//		{
//			module: "compliments",
//			position: "lower_third"
//		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Auckland",
				locationID: "2193733",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "d72bf5d47db764db53d6c56439792b56"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Auckland",
				locationID: "2193733",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "d72bf5d47db764db53d6c56439792b56"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Computer Weekly",
						url: "https://www.computerweekly.com/rss/Latest-IT-news.xml"
//url: "https://www.sciencedaily.com/rss/top/science.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
