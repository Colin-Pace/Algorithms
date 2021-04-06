/* LeetCode: Design circular queue
    1. https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3696/ 
    
    2. Example queue
    
        //      _   _   _   _
        //      h           t
        //      f           r
        //      4   3   2   1             */


class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.front = null;
        this.rear = null;
    }

    circularQueue(k) {
        for (let i = 0; i < k; i++) {
            if (!this.head) {
                this.head = new Node();
                this.tail = this.head;
                this.front = this.tail;
                this.rear = this.tail;
            } else {
                const node = new Node();
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
                this.tail.next = this.head;
                this.head.prev = this.tail;
                this.rear = this.tail;
                this.front = this.tail;
            }
        }
    }

    enqueue(data) {
        if (!this.tail) return null;
        else {
            if (this.front.data === undefined) {
                this.front.data = data;
            } else {
                while (this.front.data !== undefined && this.front.prev !== this.tail) {
                    this.front = this.front.prev;
                }

                if (this.front.data !== undefined && this.front.prev === this.tail) {
                    if (this.rear.next.data === undefined && this.rear.next !== this.head) {
                        this.rear = this.rear.next;
                        this.rear.data = data;

                    } else {
                        return -1;
                    }
    
                } else {
                    this.front.data = data;
                }
            }
        }
    }
    
    dequeue() {
        let node;
        if (!this.rear) return null;
        else if (this.rear === this.head) {
            const data = this.rear.data;
            this.rear.data = undefined;
            return data;
        } else {
            const data = this.rear.data;
            this.rear.data = undefined;
            this.rear = this.rear.prev;
            return data;
        }
    }

    getFront() {
        return this.front.data;  // The last into the queue
    }

    getRear() {
        return this.rear.data;  // The first into the queue
    }

    isEmpty() {
        if (this.head.data === undefined) return true;
        else return false;
    }

    isFull() {
        if (!this.head || this.head.data === undefined) {
            return false;
        } else {
            if (this.tail.data !== undefined && this.tail.next === this.head) {
                return true;
            } else {
                return false;
            }
        }
    }
}

const queue = new Queue;

queue.circularQueue(4);

console.log("Queue is empty: " + queue.isEmpty()); // expects true
console.log("Queue is full: " + queue.isFull()); // expects false

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("Queue is empty: " + queue.isEmpty()); // expects false
console.log("Queue is full: " + queue.isFull()); // expects true

console.log(queue.getFront()); // expects 4
console.log(queue.getRear()); // expects 1

console.log(queue.dequeue()); // expects 1
console.log(queue.dequeue()); // expects 2

queue.enqueue(5);

console.log(queue.getFront()); // expects 4
console.log(queue.getRear());  // expects 5

queue.enqueue(6);

console.log(queue.getFront()); // expects 4
console.log(queue.getRear());  // expects 6

console.log(queue.enqueue(7)); // expects -1