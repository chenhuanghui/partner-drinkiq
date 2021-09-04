var moment = require('moment-timezone');

export const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today
}

export const momentTimezone = (datetime, format) => {
    var data 
    if (!format) {
        data = moment(datetime).tz("Asia/Bangkok").format("dd, D/MM")
    } else {
        data = moment(datetime).tz('Asia/Bangkok').format(format)
    }
    return data
}

export const compareDate = (date1, date2) => {
    
    const a = moment(date1).tz("Asia/Bangkok")
    const b = moment(date2).tz("Asia/Bangkok")
    const response = a.diff(b, 'days')    
    console.log(a.format("DD/MM"),'-',b.format("DD/MM"),'=',response)
    return response
}

export const isSameDate = (date1, date2) => {
    const a = moment(date1).tz("Asia/Bangkok")
    const b = moment(date2).tz("Asia/Bangkok")
    const response = a.isSame(b,'day')
    return response
}

export const enumerateDaysBetweenDates = (startDate, endDate) => {
    var dates = [];

    var currDate = moment(startDate).tz("Asia/Bangkok")
    var lastDate = moment(endDate).tz("Asia/Bangkok")

    var now = currDate.clone(), lastDate = [];
  
    while (now.isSameOrBefore(lastDate,'day')) {
        dates.push(now.format());
        now.add(1, 'days');
        
    }
    return dates;    
};