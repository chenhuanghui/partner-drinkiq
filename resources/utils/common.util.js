export const numberPrettyCommas=(str)=> {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
export const revert = (inputArray) => {
    if (!inputArray) return
    var ret = new Array;
    for(var i = inputArray.length-1; i >= 0; i--) {
        ret.push(inputArray[i]);
    }
    return ret;
}

export const getDateAgo = (date1Str) => {
    var date1 = new Date(date1Str);
    var date2 = new Date();        
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days =  Difference_In_Time / (1000 * 3600 * 24);        
    return Difference_In_Days.toFixed() != 0 ? Difference_In_Days.toFixed() : Difference_In_Time
}

export const formatDate = (date) => {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('/');
}

export const checkValidURL = (value) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

export const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
}

export const checkValidEmail = (email) => {
    if (!email) return;
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}