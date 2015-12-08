var MessageUtil = {};

MessageUtil.parseDate = function (date) {
    var day = date.getDate(), 
        month = date.getMonth(), 
        year = date.getFullYear(),
        now = new Date(),
        dateStr = {};

    console.log(day);
    //
    if(day !== now.getDate() || month !== now.getMonth() || year !== now.getFullYear()){
        dateStr.date =  day +"/" + (month + 1) + "/" + year;
    } else {
        dateStr.date = "today";
    }
    
    dateStr.time = (function(){
        var hour = date.getHours();
        if(hour < 10) {
            hour = "0" + hour;
        }
        return hour;
    })() + ":" + (function(){
        var minute = date.getMinutes();
        if(minute < 10) {
            minute = "0" + minute;
        }
        return minute;
    })();
    
    return dateStr;
    
};
    
MessageUtil.parseLinks = function (text) {
    //convert links to html anchor elements
    var html = text;   
    var regExp = /http(s)*:\/\/[^\s]+|www.[^\s]+/i;
    while(regExp.test(text)) {
      var word = regExp.exec(text)[0];
      html = html.replace(word, '<a href="'+word+'" target="_blank">'+word+"</a>");
      text = text.replace(word, "");
    }
    return html;
};
    
module.exports = MessageUtil;