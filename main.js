const linkedList = require("./linkedList");
const cycleList = require("./cycleList");
const doubleLinkedList = require("./doubleLinkedList");
function displayList(head) {
  let currNode = head;
  while (currNode) {
    console.log(currNode);
    currNode = currNode.next;
  }
  return null;
}
function listSize(list) {
  let result = 1;
  let currNode = list.head;
  if (!list.head) {
    return 0;
  }
  while (currNode.next !== null) {
    result += 1;
    currNode = currNode.next;
  }
  return result;
}
function isEmpty(list) {
  if (!list.head) {
    return true;
  }
  return false;
}
function findPrevious(list, item) {
  let currNode = list.head;
  let prev = {};
  while (currNode.next !== null && currNode.value !== item) {
    prev = currNode;
    currNode = currNode.next;
  }

  return prev;
}
function findLast(list) {
  let currNode = list.head;
  let result = {};
  while (currNode) {
    result = currNode;
    currNode = currNode.next;
  }
  return result.next;
}
function reverseList(list) {
  let currNode = list.head;
  let prev = {};
  let temp = {};

  while (currNode) {
    if (!prev.next) {
      prev.next = null;
    }
    temp = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = temp;
  }

  list.head = currNode;
  return prev;
}
function findNFromEnd(list, n) {
  if (!list.head) {
    console.log("invalid input");
    return;
  }

  let currNode = list.head;
  let end = 1;
  while (currNode && currNode.next !== null) {
    end += 1;
    currNode = currNode.next;
  }
  currNode = list.head;
  for (let i = 0; i < end - n; i++) {
    currNode = currNode.next;
  }
  return currNode;
}
function findMiddle(list) {
  let currNode = list.head;
  let count = 1;
  while (currNode && currNode.next !== null) {
    count += 1;
    currNode = currNode.next;
  }
  currNode = list.head;
  for (let i = 1; i < count / 2; i++) {
    // console.log(count)
    // console.log(currNode, i)
    currNode = currNode.next;
  }
  return currNode;
}
function checkCycle(list) {
  let hare = list.head;
  let tortoise = list.head;
  while (hare.next !== null && hare.next !== null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      return true;
    }
  }
  return false;
}
function main() {
  let SLL = new linkedList();
  let CL = new cycleList();
  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  // SLL.insertLast('Tauhida');
  // SLL.remove('squirrel')
  // SLL.insertBefore('Gen x', 'Boomer')
  // SLL.insertAfter('Millenial', 'Gen x')
  // SLL.insertAt('cheese', 2)
  // SLL.remove('Tauhida')
  //displayList(SLL)
  // console.log(listSize(SLL))
  // console.log(isEmpty(SLL))
  // console.log(findPrevious(SLL, 'Boomer'))
  // console.log(findLast(SLL))
  //displayList(reverseList(SLL))
  //console.log(findNFromEnd(SLL, 3))
  //console.log(findMiddle(SLL))
  // CL.insertFirst('Test')
  // CL.insertLast('Test2')
  // console.log(checkCycle(CL))
}
//main()
function reverseDLL(list) {
  let currNode = list.head;
  let temp = {};
  while (currNode) {
    temp = currNode.prev;
    currNode.prev = currNode.next;

    currNode.next = temp;

    currNode = currNode.prev;
    // console.log(temp)
  }
  currNode = temp.prev;
  list.head = currNode;
  return currNode;
}
function mainDLL() {
  let DLL = new doubleLinkedList();
  DLL.insertFirst("Apollo");
  DLL.insertLast("Boomer");
  DLL.insertLast("Helo");
  DLL.insertLast("Husker");
  DLL.insertLast("Starbuck");
  DLL.insertLast("Tauron");
  DLL.remove("Starbuck");
  DLL.insertAfter("test", "Husker");
  displayList(DLL.head);
}
mainDLL();
