/**
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1) {
        return l2
    }

    if(!l2) {
        return l1;
    }

    const result = new ListNode(0, null);
    let l3 = result;
    let carry = 0;
    while(l1 || l2) {
        let sum = 0;
        if(l1) {
            sum = sum+l1.val;
            l1 = l1.next;
        }

        if(l2) {
            sum = sum+l2.val;
            l2 = l2.next;
        }

        sum = sum + carry;
        carry = Math.floor(sum /10)
        const node = new ListNode(sum%10);
        l3.next = node;
        l3 = l3.next;


        if(!l1 && !l2 && carry == 1) {
            l3.next = new ListNode(1, null);
        }

    }

    return result.next;
};
