// creation of stack and operations on stack
//using array;

class Stack{
    constructor(){
        this.items = [];
    }

    push(x){
        this.items.push(x);
    }

    pop(){
        this.items.pop();
    }

    peek(){
        if(!this.items.length) return -1;
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

}

let stack = new Stack();
console.log(stack.items);
stack.push(3);
stack.push(4);
console.log(stack.items);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.items);
console.log(stack.size());

//linked-list-stack implementation

class Node{
    constructor(element){
        this.value = element;
        this.next = null;
    }
}


class StackUsingLinkedList{
    constructor(){
        this.head = null;
    }

    push(x){
        let node = new Node(x);
        node.next = this.head;
        this.head = node;
    }

    pop(){
        if(this.head===null){
            return;
        }
        
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;

    }

    peek(){
        return !this.head ? "stack is empty" : this.head;
    }

    isEmpty(){
        return !this.head;
    }

}

let stackusingLL = new StackUsingLinkedList();
stackusingLL.push(5);
stackusingLL.push(10);
