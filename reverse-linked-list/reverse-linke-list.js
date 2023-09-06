/* Given the head of a singly linked list, 
 reverse the list, and return the reversed list.
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]
*/
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

//takes the head of a singly linked list as input and reverses the list in place
const reverseList = (head) => {
  let current = head;
  let next;
  let prev = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

//create a linked list
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

//reverse the list
const reverseHead = reverseList(head);

//print the reversed list
let current = reverseHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
