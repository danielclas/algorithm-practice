public class Solution {
    public int[] PlusOne(int[] digits) {
       
        int ind = digits.Length-1;
        digits[ind]++;
        
        while(digits[ind]==10 && ind>=0){
            digits[ind]=0;
            if(ind>=1){
                ind--;
                digits[ind]++;
            }            
        }
        
        if(digits[0]==0){
            List<int> list = new List<int>();
            list.Add(1);
            foreach(int n in digits){
                list.Add(n);
            }
            return list.ToArray();
        }
        
        return digits;
        
    }
}