function tree(){
    this.exist = 0,
    this.value = 0,
    this.leftexists = 0,
    this.rightexists = 0
}

function tree_push(root, value){
    if(!root.exist){
        root.exist = 1;
        root.leftexists = 1;
        root.rightexists = 1;

        root.value = value;
        root.left = new tree();
        root.right = new tree();
        return root;
    }
    if(value <= root.value){
        root.left = tree_push(root.left, value);
    }
    else{
        root.right = tree_push(root.right, value);
    }
    return root;
}

function push(root){
    value = prompt("Input value");
    root = tree_push(root, value);
    return root;
}

function tree_print(root, depth){
    if(!root.exist){
        return;
    }


    if(root.leftexists){
        depth++;
        tree_print(root.left, depth);
    }
    console.log(root.value);
    if(root.rightexists){
        depth++;
        tree_print(root.right, depth);
    }
    depth--;
    return;
}

let root = new tree();
let values = [4,2,6,1,3,5,7];
for(i = 0; i < values.length; i++){
    root = tree_push(root, values[i]);
}
tree_print(root, 0);