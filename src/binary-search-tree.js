const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null; // Корень дерева
  }

  root() {
    return this.rootNode; // Возвращает корень дерева
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    function addNode(currentNode, newNode) {
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          addNode(currentNode.left, newNode);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          addNode(currentNode.right, newNode);
        }
      }
    }

    addNode(this.rootNode, newNode);
  }

  has(data) {
    function searchNode(currentNode, data) {
      if (currentNode === null) return false;
      if (data === currentNode.data) return true;
      if (data < currentNode.data) {
        return searchNode(currentNode.left, data);
      } else {
        return searchNode(currentNode.right, data);
      }
    }

    return searchNode(this.rootNode, data);
  }

  find(data) {
    function findNode(currentNode, data) {
      if (currentNode === null) return null;
      if (data === currentNode.data) return currentNode;
      if (data < currentNode.data) {
        return findNode(currentNode.left, data);
      } else {
        return findNode(currentNode.right, data);
      }
    }

    return findNode(this.rootNode, data);
  }

  remove(data) {
    function removeNode(currentNode, data) {
      if (currentNode === null) return null;

      if (data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data);
        return currentNode;
      } else if (data > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, data);
        return currentNode;
      } else {
        // Узел найден, начинаем удаление

        // 1. Узел без детей
        if (currentNode.left === null && currentNode.right === null) {
          return null;
        }

        // 2. Узел с одним ребёнком
        if (currentNode.left === null) {
          return currentNode.right;
        }
        if (currentNode.right === null) {
          return currentNode.left;
        }

        // 3. Узел с двумя детьми
        let minFromRight = currentNode.right;
        while (minFromRight.left !== null) {
          minFromRight = minFromRight.left;
        }
        currentNode.data = minFromRight.data; // Заменяем значение
        currentNode.right = removeNode(currentNode.right, minFromRight.data); // Удаляем дубликат
        return currentNode;
      }
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (this.rootNode === null) return null;
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (this.rootNode === null) return null;
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
