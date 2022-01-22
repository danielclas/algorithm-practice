
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      return this.traverse(array, this);
    }
      
      traverse(array, node) {
          array.push(node.name);
          
          if(node.children){
              for(let child of node.children){
                  this.traverse(array, child);
              }
          }
          
          return array;
      }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  