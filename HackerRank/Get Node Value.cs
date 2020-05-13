function getNode(head, positionFromTail) {

        if(head==null || head.next==null) return head.data;

        var runner = head;
        var node = head;

        while(positionFromTail>=0){
            runner=runner.next;
            positionFromTail--;
        }

        while(runner!=null){
            runner = runner.next;
            node = node.next;
        }

        return node.data;
}