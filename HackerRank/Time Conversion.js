function timeConversion(s) {
    
    let isPM = s.indexOf('PM') != -1;
    let hour = parseInt(s.substring(0, 2));
    
    if(isPM){
        hour += hour != 12 ? 12 : 0;   
    }else if(hour == 12){
        hour = '00';
    }
    
    s = hour + s.substring(2, s.indexOf('M') - 1);
    
    return s.length == 7 ? '0'+s : s;
}
