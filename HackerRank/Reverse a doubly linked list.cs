static DoublyLinkedListNode reverse(DoublyLinkedListNode head) {

        if(head==null || head.next==null) return head;

        var data = new List<int>();

        while(head!=null){
            data.Add(head.data);
            head = head.next;
        }

        var newHead = new DoublyLinkedListNode(data[data.Count-1]);
        var node = newHead;

        for(int i=data.Count-2 ; i>=0 ; i--){
            var temp = new DoublyLinkedListNode(data[i]);
            temp.prev = node;
            node.next = temp;
            node = node.next; 
        }

        return newHead;
    }