var findingUsersActiveMinutes = function(logs, k) {
    
    let users = {};
    
    for(let log of logs){
        let user = log[0];
        let time = log[1];
        
        if(!users[user]) users[user] = {};
        if(!users[user][time]) users[user][time] = true;
    }
    
    let times = {};
    
    for(let k in users){
        let userMinutes = Object.keys(users[k]).length;               
        if(!times[userMinutes]) times[userMinutes] = 0;
        times[userMinutes]++;
    }
    
    let answer = Array(k).fill(0);
    
    for(let k in times){
        let time = times[k];
        answer[k - 1] = time;
    }
    
    return answer;
};