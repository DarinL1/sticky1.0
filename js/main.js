//  js file
console.log("Hello Console!")

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
    var stickiesArray = getStickiesArray();
    for (var i = 0; i < stickiesArray.length; i++) {
        var key = stickiesArray[i];
        var value = JSON.parse(localStorage[key]);
        addStickyToDOM(key, value);
    }
}

function addStickyToDOM(key, stickyObj) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    sticky.setAttribute("id", key);
    sticky.style.backgroundColor = stickyObj.color;
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    sticky.setAttribute("class", "flex-item");
    span.innerHTML = stickyObj.value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
    sticky.onclick = deleteSticky;
}

function createSticky() {
    var stickiesArray = getStickiesArray();
    var currentDate = new Date();
    var colorSelectObj = document.getElementById("note_color");
    var index = colorSelectObj.selectedIndex;
    var color = colorSelectObj[index].value;
    var key = "sticky_" + currentDate.getTime();
    var value = document.getElementById("note_text").value;
    var stickyObj = {
            "value": value,
            "color": color
    };
    localStorage.setItem(key, JSON.stringify(stickyObj));
    stickiesArray.push(key);
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    addStickyToDOM(key, stickyObj);
}

function getStickiesArray() {
    var stickiesArray = localStorage.getItem("stickiesArray");
    if (!stickiesArray) {
        stickiesArray = [];
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    } else {
        stickiesArray = JSON.parse(stickiesArray);
    }
    return stickiesArray;
}

function deleteSticky(e) {
    var key = e.target.id;
    if (e.target.tagName.toLowerCase() == "span") {
        key = e.target.parentNode.id;
    }
    localStorage.removeItem(key);
    var stickiesArray = getStickiesArray();
    if (stickiesArray) {
        for (var i = 0; i < stickiesArray.length; i++) {
            if (key == stickiesArray[i]) {
                stickiesArray.splice(i,1);
            }
        }
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
        removeStickyFromDOM(key);
    }
}

function removeStickyFromDOM(key) {
    var sticky = document.getElementById(key);
    sticky.parentNode.removeChild(sticky);
}
