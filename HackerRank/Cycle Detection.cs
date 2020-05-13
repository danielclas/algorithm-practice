static bool hasCycle(SinglyLinkedListNode head) {

        var hashSet = new HashSet<SinglyLinkedListNode>();

        while(head!=null){
            if(hashSet.Contains(head)) return true;
            else hashSet.Add(head);

            head=head.next;
        }

        return false;

    }