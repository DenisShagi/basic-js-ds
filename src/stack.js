const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Массив для хранения элементов стека
  }

  push(element) {
    this.items.push(element); // Добавляем элемент в стек
  }

  pop() {
    return this.items.pop(); // Удаляем и возвращаем верхний элемент стека
  }

  peek() {
    if (this.items.length === 0) {
      return undefined; // Если стек пуст, возвращаем undefined
    }
    return this.items[this.items.length - 1]; // Возвращаем верхний элемент
  }
}

module.exports = {
  Stack,
};
