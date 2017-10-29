var arr = [];

arr.push(function(){

    console.log('HelloWOrld');
})

arr.push('1');
arr.push(3);
arr.push('Stre')
arr.push(true)
var obj = {

    greet : 'Hello WOrlddd'
}
arr.push(obj);
arr.push(20);
arr.push('4sfs');
arr.forEach(function (item) {
    if(typeof item === "function"){
        item();
    } else {
        console.log(item)
    }

})