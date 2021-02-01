public class ParkingSystem {

    private List<int> sizes;
     
    public ParkingSystem(int big, int medium, int small) {
        
        this.sizes = new List<int>();
        this.sizes.Add(big);
        this.sizes.Add(medium);
        this.sizes.Add(small);
    }
    
    public bool AddCar(int carType) {
        
        if(this.sizes[carType - 1] == 0) return false;
        else{
            this.sizes[carType - 1]--;
            return true;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj.AddCar(carType);
 */