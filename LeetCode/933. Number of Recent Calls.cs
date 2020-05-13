public class RecentCounter {

    List<int> pings;
    
    public RecentCounter() {
        pings = new List<int>();    
    }
    
    public int Ping(int t) {
        pings.Add(t);
        
        return CountPings();
    }
    
    public int CountPings(){
        
        int min = pings[pings.Count-1]-3000;
        int count = 0;
        
        for(int i=pings.Count-1 ; i>=0 ; i--)
            if(pings[i]>=min) count++;
        
        return count;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.Ping(t);
 */