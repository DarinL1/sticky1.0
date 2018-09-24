//  js file

if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    
    // Store 2 sticky notes
    localStorage.setItem("sticky_0", "Pick up dry cleaning");
    localStorage.setItem("sticky_1", "Cancel cable tv, who needs it now?");
    // assign sticky not value to var
    var sticky = localStorage.getItem("sticky_0");
    alert(sticky);
        
    // working with int numbers
    localStorage.setItem("numitems", 1);
    var numItems = parseInt(localStorage.getItem("numitems"));
    numItems = numItems + 1;
    localStorage.setItem("numitems", numItems);
    //working with float numbers
    localStorage.setItem("price", 9.99);
    var price = parseFloat(localStorage.getItem("price"));
    // ust parseInt() adn parseFloat() when retreaving numbers
    // javascript auto stores as strings
    
    // iterate over all keys
    for (var i = 0; i < localStorage.length; i++) {
       var key = localStorage.key(i);
       var value = localStorage[key];
       alert(value);
    };
    
} else {
    // Sorry! No Web Storage support..
    alert(Sorry! No Web Storage support..);
}