static SinglyLinkedListNode deleteNode(SinglyLinkedListNode head, int position) {

        if(position==0) return head.next;

        var temp = head;
        var prev = temp;

        while(temp!=null){
            if(position==0){
                prev.next = temp.next;
                break;
            }
            position--;
            prev = temp;
            temp=temp.next;
        }

        return head;

    }