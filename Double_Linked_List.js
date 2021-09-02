// Implement a Double Linked list
// a constructor function to create a Node object.
function Node(element){
    this.element = element;
    this.next = null;     // pointer to next node
    this.previous = null;  // pointer to previous node
}

function doubleLinkedList(){
    let head = null;        //specify the head node
    let length = 0;         // initial length of linkedlist


    // function returns the size of a Node
    this.size = () =>{
        return length;
    };
    //Function returns head
    this.head = ()=>{
        return head;
    };


    this.add = (element) =>{
        var newNode = new Node(element);   // create a new Node
            if(head === null)      //check for empty head
              head = newNode;
            
            else{
            let currentNode = head;
               while(currentNode.next){
                   currentNode = currentNode.next;
               }

               currentNode.next = newNode;
               newNode.previous = currentNode;
            } 
            length++;
    };


    this.addAt = (element, index) => {
        let newNode = new Node(element);

        let currentNode = head;
        let previousNode = null;
        let count = 0;
        if(index === 0){
            newNode.next = head;
            head.previous = newNode;
            head = newNode;
        }
         
        if(index > this.size() || index < 0)
          console.log("Index out of range")
        
        else{
            while(count < index){  //it's index-1 since current node in the loop starts from the node after the head node.
                previousNode = currentNode;
                currentNode = currentNode.next;
                count++;
            }
            newNode.next = currentNode;
            currentNode.previous = newNode;

           previousNode.next = newNode;
           newNode.previous = previousNode;
          }
          length++;
    };

    this.remove = (element) =>{
        let currentNode = head;
        let previousNode = null;
         
        if(currentNode.element === element)
           head = currentNode.next; //head is null

        else{
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            currentNode.next.previous = previousNode;
        } 
        
        length--;
    };

    this.removeAt  = (index) => {
        let currentNode = head;
        let previousNode = null;
        let count = 0;
        if(index < 0 || index > length)
            console("Index out of range")
        else if(index === 0)
           head = currentNode.next;

        else{
            while(count < index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                count++;
            }

            previousNode.next = currentNode.next;
            currentNode.next.previous = previousNode;
        }   

        length--;
    };

    this.indexOf  = (element) => {
        let currentNode = head;
        let index = -1;
        if(element == currentNode.element)
        return 0;
   
        while(currentNode){
            index++;
            if(currentNode.element === element)
              return index;
            
            currentNode = currentNode.next;  
        }

    return -1;
    };


    this.elementAt = (index) =>{
        let currentNode =  head;
        let count = 0;

        while(count < index){
           currentNode = currentNode.next;
           count++; 
        }

        return currentNode.element;
    };


    this.isEmpty = () =>{
        return length === 0;
    };
}

let dll = new doubleLinkedList();

let array = [12,34,2,17,93,61,12,3,9,55,82,14,1,73];  // array to be added to link list


for (const arr of array) {
    dll.add(arr);
}
dll.addAt(39,8);
dll.removeAt(3);
console.log(dll.head());