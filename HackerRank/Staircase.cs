static void staircase(int n) {


        for(int i=0 ; i<n ; i++){
            var offset = i+1;
            var answer = new char[n];
            for(int j=n-1 ; j>=0 ; j--){
                if(offset>0){
                    answer[j]='#';
                    offset--;
                }else{                    
                    answer[j]=' ';
                }
            }
            Console.WriteLine(new String(answer));
        }        
    }
