static int findMergeNode(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {

        var hashSet = new HashSet<SinglyLinkedListNode>();

        while(head1!=null || head2!=null){

            if(hashSet.Contains(head1)) return head1.data;
            else if(head1!=null) hashSet.Add(head1);

            if(hashSet.Contains(head2)) return head2.data;
            else if(head2!=null) hashSet.Add(head2);

            if(head1!=null) head1 = head1.next;
            if(head2!=null) head2 = head2.next;
        }

        return 0;
    }