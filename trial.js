
let tanu={
    dance:"mind blowing",
    art:"fanatastic",
    literature:"outstanding",
}
let keys=Object.keys(tanu);
console.log(keys)// to print the keys of an array 
let i=0;
while(i<keys.length){// the number of elements it will run 3 times 1,2,3 starting from 0 position acc to index
    let key=keys[i];// for accessing index i have started the index
    console.log(key +":"+ tanu[key]); // for index and and its value
    i++;
}