static DoublyLinkedListNode sortedInsert(DoublyLinkedListNode head, int data) {

        DoublyLinkedListNode prev = null;
        var node = head;
        var newNode = new DoublyLinkedListNode(data);

        if(head.data>=data){
            newNode.next = head;
            head.prev = newNode;
            return newNode;
        }

        while(node!=null){
            
            if(node.next==null){
                newNode.prev = node;
                node.next = newNode;
                return head;
            }

            if(node.next.data>data){
                var temp = node.next;
                newNode.prev = node;
                node.next = newNode;
                newNode.next = temp;
                return head;
            }           

            node=node.next;            
        }

        return head;
    }