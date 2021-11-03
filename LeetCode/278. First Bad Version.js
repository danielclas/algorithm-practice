/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let left = 1, right = n;
        let middle = Math.floor((right + left ) / 2);
        
        while(right >= left){
            if(isBadVersion(left)){
                return left;
            }else if(isBadVersion(middle)){
                right = middle;
            }else{
                left = middle + 1;
            }
            
            middle = Math.floor((right + left ) / 2);
        }
        
        return middle;
    };
};