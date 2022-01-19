function longestPalindromicSubstring(string) {
    if(string.length <= 1) return string;
      
      let output = string[0];
      
      for(let i = 0 ; i < string.length - 1 ; i++){
          for(let j = i + 1 ; j < string.length ; j++){
              if(isPalindrome(i, j, string) && j - i + 1 > output.length)
                  output = string.substring(i, j + 1);
          }
      }
      
      return output;
  }
  
  function isPalindrome(start, end, string){
      while(start < end){
          if(string[start] !== string[end]) return false;
          start++;
          end--;
      }
      
      return true;
  }
  
  // Do not edit the line below.
  exports.longestPalindromicSubstring = longestPalindromicSubstring;
  