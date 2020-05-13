    static SinglyLinkedListNode insertNodeAtPosition(SinglyLinkedListNode head, int data, int position) {

        var node = new SinglyLinkedListNode(data);
        var temp = head;

        if(position==0){
            node.next=head;
            return node;
        }

        while(temp!=null){
            if(position==1){
                var next = temp.next;
                temp.next = node;
                node.next = next;
                break;
            }
            position--;
            temp=temp.next;
        }

        return head;

    }