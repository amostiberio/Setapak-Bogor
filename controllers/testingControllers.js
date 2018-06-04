var testingController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var token;



testingController.test = function(req,res){
		 var check_in = req.body.check_in,
    			check_out =  req.body.check_out
   // 			var ms = moment(check_out,"DD/MM/YYYY HH:mm:ss").diff(moment(check_in,"DD/MM/YYYY HH:mm:ss"));
			// var d = moment.duration(ms);
			// var s = Math.floor(d.asHours())

   // 			 date = new Date().toISOString().
			// 	  replace(/T/, ' ').      // replace T with a space
			// 	  replace(/\..+/, '')     // delete the dot and everything after
			// // var time = moment()
			// // date1 = Date.parse(moment(time).tz('Asia/Jakarta'));	  
   // // 			let firstDate = check_in,
			// //     secondDate = check_out,
			// //     timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
			// // let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
			 var moment_timezone = require('moment-timezone');
			date2 = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')
			// date3 = moment().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')

			// var data12 = new Date("7/13/2010");
			// var date22 = new Date("12/15/2010");
			// var timeDiff = Math.abs(data12.getTime() - date22.getTime());
			// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

			var start = moment(check_in, "YYYY-MM-DD");
			var end = moment(check_out, "YYYY-MM-DD");

			//Difference in number of days
			var a = moment.duration(moment(check_out, "YYYY-MM-DD").diff(moment(check_in, "YYYY-MM-DD"))).asDays();

			//Difference in number of weeks
			var b = moment.duration(start.diff(end)).asWeeks();
			// var jumlah_hari = (moment("check_out","YYYY/MM/DD") - moment("check_in","YYYY/MM/DD"))

   			//var check = Math.abs(check_in-check_out)
   		// check = check_in - check_out
		res.status(200).json({success:true,message: 'sukses print'/*check_in,check_out,date,date2,date3,diffDays*/,date2, a,b});

}



module.exports = testingController 