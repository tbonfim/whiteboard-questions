/*
  Implement a function that, given two DOM trees and an especific node,
  find the node in the second tree that corresponds to the position of the
  given node in the first tree

  searchNode(tree_one, tree_two, htmlNode);
  */

const searchNode = (t1, t2, node) => {
  const path = findPath(t1, node);
  return getNodeFromT2(path, t2);
};
const getNodeFromT2 = (path, t2) => {
  let currentNode = t2.root;
  path.forEach(index => {  // [0, 10]
    currentNode = currentNode.getChildren()[index];
  });
  return currentNode;
};
const findPath = (tree, node, path = []) => {
  if (node === tree.root) {
    return path;
  }
  const parent = node.getParent();
  return findPath(
    tree,
    parent,
    path.unshift(parent.getChildren().indexOf(node))
  );
};
