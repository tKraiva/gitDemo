const list=[];

function addToList(thing,list){
    list.push(thing)
}

function removeFromList(index,list){
    list = list.splice(index,1)
}