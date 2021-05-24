function solution(A, B) {
    let obj = {};
    let max = -Infinity;

    for(let i = 0 ; i < A.length ; i++){
        let a = A[i], b = B[i];
        if(a == b){
            if(!obj[a]) obj[a] = 0;
            obj[a]++;
            continue;
        }

        if(!obj[a]) obj[a] = 0;
        if(!obj[b]) obj[b] = 0;

        obj[a]++;
        obj[b]++;
    }

    for(let key in obj){
        let val = obj[key];
        if(val > max) max = val;
    }

    return max;
}
