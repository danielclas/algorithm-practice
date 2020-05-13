static void reversePrint(SinglyLinkedListNode head) {

        var data = new List<int>();

        while(head!=null){
            data.Add(head.data);
            head=head.next;
        }

        for(int i=data.Count-1 ; i>=0 ; i--)
            Console.WriteLine(data[i]);

    }