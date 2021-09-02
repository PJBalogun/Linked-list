// Implement a Circular Linked list


// a constructor function to create a Node object.
function Node(data) {
    this.data = data;
    this.next = null;
}

function CircularLinkedList() {
    let head = null;        //specify the head node
    let length = 0;


    // function returns the size of a Node
    this.size = () => {
        return length;
    };
    //Function returns head
    this.head = () => {
        return head;
    };


    this.add = (data) => {
        var newNode = new Node(data);   // create a new Node
        if (head === null) { // check for an empty head
            head = newNode;
            head.next = head;
        }
        else {
            let currentNode = head;
            while (currentNode.next !== head)
                currentNode = currentNode.next;

            currentNode.next = newNode;
            newNode.next = head;
        }
        length++;
    };

    this.addAt = (data, index) => {
        let newNode = new Node(data);

        let currentNode = head;
        let previousNode = null;
        let count = 0;
        if (index >= this.size() || index < 0)
            console.log("Index out of range");

        if (index === 0) {
            while (currentNode.next !== head)
                currentNode = currentNode.next;

            currentNode.next = newNode;
            newNode.next = head;
            head = newNode;
        }

        else {
            while (count < index) {
                previousNode = currentNode
                currentNode = currentNode.next;
                count++;
            }
            newNode.next = currentNode;
            previousNode.next = newNode;

        }
        length++;
    };

    this.remove = (data) => {
        let currentNode = head;

        if (currentNode.data === data) {
            while (currentNode.next !== head) {
                currentNode = currentNode.next;
            }
            currentNode.next = head.next;
            head = currentNode.next;
        }


        else {
            while (currentNode.data !== data) {
                if (currentNode.next === head) {
                    console.log("Element not in range");
                    break;
                }


                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            length--;
        }

    };

    this.removeAt = (index) => {
        let currentNode = head;
        let previousNode = null;
        let count = 0;
        if (index < 0 || index > length)
            console("Index out of range")
        else if (index === 0) {
            while (currentNode.next != head) {
                currentNode = currentNode.next;
            }
            currentNode.next = head.next;
            head = currentNode.next;
        }

        else if (index === length - 1) {
            while (currentNode.next !== head) {
                if (currentNode.next === head) {
                    console.log("Index not in range");
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            length--;
        }
        else {
            while (count < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                count++;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };

    this.indexOf = (element) => {
        let currentNode = head;
        let index = -1;
        if (element == currentNode.data)
            return 0;

        while (currentNode.next !== head) {
            index++;
            if (currentNode.data === element)
                return index;

            currentNode = currentNode.next;
            if (currentNode.next === head && currentNode.data === element) {
                return index + 1;
            }
        }
        return -1;
    };


    this.elementAt = (index) => {
        let currentNode = head;
        let count = 0;
        if (index === 0) {
            return currentNode.data;
        }
        else if (index >= this.size() || index < 0) {
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode.data;
        }
        else {
            console.log("Invalid index");
        }
    };


    this.isEmpty = () => {
        return length === 0;
    };

    this.PrintList = () => {
        let currentNode = head;
        while (currentNode.next !== head) {
            console.log(`${currentNode.data} `);
            currentNode = currentNode.next;
        }
    }
}



