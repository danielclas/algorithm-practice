// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
          return traverse(this, array).map(n => n.name);
    }
  }
  
  function traverse(node, array){
      if(!node) return array;
      
      array.push(node);
      let len = 0;
      let prev;
      
      while(prev != array.length){
          prev = array.length;
          let temp = array.slice(len);
          for(let n of temp) array.push(...n.children);
          len = prev;
      }
      
      return array;
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  