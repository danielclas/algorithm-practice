function birthday(arr, day, month) {
    
    let sum = 0;
    let left = 0, right = 0;
    
    while(right != month){
        sum += arr[right];
        right++;
    }
    
    let count = sum == day ? 1 : 0;
    
    while(right < arr.length){
        sum += arr[right];
        sum -= arr[left];
        count += sum == day ? 1 : 0;
        right++;
        left++;
    }
    
    
    return count;
}