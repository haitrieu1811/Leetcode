//  Definition for singly-linked list.
class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1, l2) {
  let carry = 0;
  let sum = 0;
  let head = null;
  let tail = null;
  while (l1 || l2 || carry) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    const node = new ListNode(sum);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
const output = addTwoNumbers(l1, l2);
console.log(">>> output", output);
