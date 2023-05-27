const PETERPORTAL_BASE_URL = "https://api.peterportal.org/rest/v0/";
//dictionary for class info
var info = {};
//dictionary for class count
var count = {};
var valid = [ "I&C SCI", "COMPSCI", "IN4MATX" ]


function dropdown() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function AddToCart() {
    var shoppingCart = document.getElementsByName("courses").value;
    
    for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].checked) {
            if (shoppingCart[i] in count) {
                shoppingCart[i]++;
            } else {
                shoppingCart[i] = 1;
            }
        }
    }
}

function loadquiz() {
    fetch("https://api.peterportal.org/rest/v0/courses/all").then(res=>res.json()).then(response =>{
        console.log(response)

        if ( response.department in validclasses )
        {
            info[ response[id] ] = [ response[departmemnt], response[number], response[title], response[description] ];
        }
    })
    var objkey = Object.keys( info );
    for(var i = 0; i < Object.keys( info ).length; i++) {
        var obj = info[ objkey[ i ] ];
        document.body.innerHTML += '<form><input type="checkbox" name="courses" id="obj[id]" value="cs121" onclick="return AddToCart();"><label for="course1">CS 121</label></form>'//call to dictionary
     }
}