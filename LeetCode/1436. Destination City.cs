    public string DestCity(IList<IList<string>> paths) {
        
        var hset = new HashSet<string>();
        
        foreach(var path in paths){            
            if(hset.Contains(path[0])) hset.Remove(path[0]);
            else hset.Add(path[0]);
            
            if(hset.Contains(path[1])) hset.Remove(path[1]);
            else hset.Add(path[1]);
        }
        
        foreach(var path in paths){
            foreach(var item in hset){
                if(path.Contains(item) && path.IndexOf(item)==1)
                    return item;
            }
        }
        
        return "";
    }