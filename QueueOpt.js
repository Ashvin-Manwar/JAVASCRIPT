class Queue{
    constructor(){
        this.item={}
        this.rear=0
        this.front=0
    }
    enqueue(element){
        this.item[this.rear]=element
        this.rear++
    }
    dequeue(){
        const item=this.item[this.front]
        delete this.item[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        return this.item[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.item)
    }
}
const queue = new Queue();
  console.log(queue.isEmpty());
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.size());
  queue.print();

  console.log(queue.dequeue())
  console.log(queue.peek())