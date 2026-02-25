/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) {
        return head;
    }

    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) {
        return head;
    }

    tail.next = head;

    let stepsToNewTail = length - k - 1;
    let newTail = head;
    while (stepsToNewTail > 0) {
        newTail = newTail.next;
        stepsToNewTail--;
    }

    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
