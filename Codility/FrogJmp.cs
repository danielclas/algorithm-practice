    public int solution(int X, int Y, int D) {
        
        if(X==Y) return 0;
        
        double res = Y-X;
        
        return (int)Math.Ceiling((double)res/D);
    }