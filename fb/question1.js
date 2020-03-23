/*
  Implement the classe DOMStore, which will keep a list of DOM nodes;
  You should implement 3 methods:
  has(node) => returns whether you have or not the passed node withim the list of stored nodes 
  get(node) => returns the value of the node if it's inside of the list of stored nodes
  set(node, value) => if the node exists, set its value; if not, insert the node into the stored
*/
class DOMStore{
  constructor() {
    this.nodeList = []
  }
  search(node) {
    return this.nodeList.find(n => node === n);
  }
  has(node){
    return !!this.search(node);
  }
  get(node){
    const foundNode = this.search(node);
    if(foundNode.value === false) {
      return false;
    }
    return foundNode && foundNode.value || null;
  }
  set(node, value) {
    const foundNode = this.search(node);
    if(foundNode){
      foundNode.value = value
    } else {
      this.nodeList.push(node);
    }
  }
}