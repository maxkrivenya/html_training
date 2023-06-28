function FILO(){
    this.value = 0,
    this.exists = 0,
    this.next_exists = 0
}

function stack_push(head, value){
    if(head.exists = 0){
        head.exists = 1;
        head.next_exists = 0;
        head.value = value;
    }
    else{
        let temp = new FILO();
        temp.exists = 1;
        temp.next_exists = 1;
        temp.value = value;
        temp.next = head;
        head = temp;
        
    }
    return head;
}

function stack_print(head){
    temp = head;
    do{
        console.log(temp.value);
        temp = temp.next;
    }while(temp.next_exists);
    return;
}


let head = new FILO();
let arr = [1,2,3,4,5,6,7,8,9];
for(i = 0; i < arr.length; i++){
    head = stack_push(head, arr[i]);
}
stack_print(head);