static SinglyLinkedListNode removeDuplicates(SinglyLinkedListNode head) {

        if(head==null || head.next==null) return head;

        var hashSet = new HashSet<int>();
        var node = head;
        var prev = head;

        while(node!=null){
            if(!hashSet.Contains(node.data)){
                hashSet.Add(node.data);
                prev = node;
            }else{
                prev.next = node.next;
            }
            node = node.next;
        }

        return head;
    }
