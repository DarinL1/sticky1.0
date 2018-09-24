//  js file

function testCode() {
    // Code for localStorage/sessionStorage.

    // Store 2 sticky notes
    localStorage.setItem("sticky_0", "Pick up dry cleaning");
    localStorage.setItem("sticky_1", "Cancel cable tv, who needs it now?");
    // assign sticky not value to var
    var sticky = localStorage.getItem("sticky_0");
        
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
    
    /*
    // iterate over all keys
    for (var i = 0; i < localStorage.length; i++) {
       var key = localStorage.key(i);
       var value = localStorage[key];
       alert(value);
    };
    */
}

window.onload = init;

function init() {
    var button = document.getElementById("add_button");
    button.onclick = createSticky;

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.substring(0, 6) == "sticky") {
            var value = localStorage.getItem(key);
            addStickyToDOM(value);
        }
    }
}

function addStickyToDOM(value) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    sticky.setAttribute("class", "flex-item");
    span.innerHTML = value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
}

function createSticky() {
    var value = document.getElementById("note_text").value;
    var key = "sticky_" + localStorage.length;
    localStorage.setItem(key, value);
    addStickyToDOM(value);
}
