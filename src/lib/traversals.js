'use strict';

// Time: O(n) -- n is number of nodes
// Space: O(H) -- H is height of tree

let stringTree = '';

const preOrderTraversal = (rootNode) => {
  if(!rootNode) {
    return undefined;
  }
  // Here, I am in root. 
  console.log(`Visiting a node with value ${rootNode.value}`);
  preOrderTraversal(rootNode.left); //root.node is a sub-tree
  preOrderTraversal(rootNode.right);
  return undefined;
};

//  Time: O(n) -- where n is the number of nodes
// Space: 0(H)) -- where h is the height

// wrap this in another function that doesn't get called recursive
const inOrderTraversal = (rootNode) => {
  if(!rootNode) {
    return undefined;
  }
  console.log(stringTree);
  inOrderTraversal(rootNode.left);
  stringTree = stringTree + `${rootNode.value}`;
  // console.log(`Visiting a node with value ${rootNode.value}`);
  inOrderTraversal(rootNode.right);
  // return undefined;
}

// Time: O(n) -- where n is the number of nodes
// Space: O(H) -- where h is the height of the tree

const postOrderTraversal = (rootNode) => {
  if(!rootNode) {
    return undefined;
  }

  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  // Then we go to root with console.log
  console.log(`Visiting a node with value ${rootNode.value}`);
  return undefined;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
