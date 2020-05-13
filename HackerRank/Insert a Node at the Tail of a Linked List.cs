static SinglyLinkedListNode insertNodeAtTail(SinglyLinkedListNode head, int data) {

        var node = new SinglyLinkedListNode(data);
        var node2 = head;

        if(node2==null) return node;

        while(node2.next!=null){
            node2=node2.next;
        }

        node2.next = node;

        return head;

    }