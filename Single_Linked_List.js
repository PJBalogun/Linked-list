// Implement a Linked list


// a constructor function to create a Node object.
function Node(element){
    this.element = element;
    this.next = null;
}

function LinkedList(){
    let head = null;        //specify the head node
    let length = 0;


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
            if(head === null)  // check for an empty head
            head = newNode;

            else{
            let currentNode = head;
               while(currentNode.next){
                   currentNode = currentNode.next;
               }

               currentNode.next = newNode;
            } 
            length++;
    };


    this.addAt = (element, index) => {
        let newNode = new Node(element);

        let currentNode = head;
        let count = 0;
        if(index === 0){
            newNode.next = head;
            head = newNode;
        }
         
        if(index > this.size() || index < 0)
          console.log("Index out of range")
        
        else{
            while(count < index-1){  //it's index-1 since current node in the loop starts from the node after the head node.
                currentNode = currentNode.next;
                count++;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
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

let linkedList = new LinkedList();

// array of element to add to node
let array = [12,34,2,17,93,61,12,3,9,55,82,14,1,73];

for (const arr of array) {
    linkedList.add(arr);
}
//linkedList.addAt(45,0);
//linkedList.remove(2);
//linkedList.removeAt(5);
// console.log(linkedList.elementAt(8))
// console.log(linkedList.indexOf(73));
// console.log(linkedList.size());
// console.log(linkedList.head());

