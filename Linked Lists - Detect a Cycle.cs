boolean hasCycle(Node head) {
    
    HashSet<Node> hashSet = new HashSet<Node>();
    
    if(head==null) return false;
    
    hashSet.add(head);
    head = head.next;
    
    while(head!=null){
        if(!hashSet.contains(head)){
            hashSet.add(head);
        }else{
            return true;
        }
        head=head.next;
    }
    
    return false;
    
}