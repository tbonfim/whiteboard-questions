(function(){
    /* 
        Assuming you have an object in the format:

        var obj = {
            one : 1
            two : 2
            three : 3
            ...
        }
        
        print it in the format:
        " 
            one : 1
            two : 2
            three : 3
            ...
        "
    */

    var obj = {
        "one" : 1,
        "two" : 2,
        "three" : 3
    }

    for (var index = 0; index < Object.keys(obj).length; index++) {
        var key = Object.keys(obj)[index];
        console.log( key + " : "+  obj[key] );
    }
}());