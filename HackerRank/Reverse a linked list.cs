static SinglyLinkedListNode reverse(SinglyLinkedListNode head) {

        if(head==null) return head;

        var list = new List<SinglyLinkedListNode>();

        while(head!=null){
            list.Add(head);
            head=head.next;
        }

        var newHead = new SinglyLinkedListNode(list[list.Count-1].data);
        var node = newHead;

        for(int i=list.Count-2 ; i>=0 ; i--){
            var temp = new SinglyLinkedListNode(list[i].data);
            node.next = temp;
            node = node.next;
        }

        return newHead;
    }