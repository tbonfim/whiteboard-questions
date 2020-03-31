(function(){
    /* 
        Assuming you have the following html structure:
        <ul id="list">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
        </ul>

        Build a solution that, whenever you click any list item, it will print its index like:
        "List item X clicked!", where X is the index.
    */

    var itemList = document.querySelectorAll("#list > li");
    for (var index = 0; index < itemList.length; index++) {
        var clickFunction = clickHandler.bind(index + 1);
        itemList[index].onclick = clickFunction;
    }
    function clickHandler () {
        return console.log( "List item " + this + " clicked!" );
    }
}());