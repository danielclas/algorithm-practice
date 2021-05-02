
function bonAppetit(bill, k, b) {
    let total = bill.reduce((a,b) => a + b, 0);
    let n = total - bill[k];
    
    if(b == n / 2){
        console.log('Bon Appetit');
    }else{
        console.log(b - n / 2);
    }

}