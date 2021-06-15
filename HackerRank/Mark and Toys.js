function maximumToys(prices, k) {
    // Write your code here
    prices.sort((a, b) => a - b);
    
    let count = 0;
    
    for(let i = 0 ; i < prices.length ; i++){
        let price = prices[i];
        if(k - price < 0) return count;
        k -= price;
        count++;
    }
    
    return count;
}