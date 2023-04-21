// Add Front
// Write a method that accepts a value and create a new node,
// assign it to the list head,
// and return a pointer to the new head node.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class List {
    constructor() {
        this.head = null;
    }

    // Add Front
    addFront(value) {
        // create new node
        let newNode = new Node(value);

        // check for line 27
        if (!this.head) {
            this.head = newNode
            return this;
        }
        // assign it to the list head / assign head to be next in cue to new node
        newNode.next = this.head
        // return pointer to the new head node
        this.head = newNode

        return this.head;
    }

    removeFront() {
        // if list is empty place the new node as head
        if (this.head == null) {
            return null;
        }
        // create variable to hold node
        const removedNode = this.head.next;
        this.head = removedNode
        return this.head

    }
    // Front
    // Write a method to return value (not the node) at the head of the list.
    // If list is empty, return null

    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.data;
        }
    }
}

let mySLL = new List();
console.log(mySLL.addFront(18))
mySLL.removeFront();
console.log(mySLL.addFront(5))
console.log(mySLL.addFront(73))
console.log(mySLL)
console.log(mySLL.front())








