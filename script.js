const PETERPORTAL_BASE_URL = "https://api.peterportal.org/rest/v0/";
//dictionary for class info
var info = {};
//dictionary for class to specializations it fulfills
//dictionary for class count
var count = {};




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
                count[i]++;
            } else {
                count[i] = 1;
            }
        }
    }
    console.log(shoppingCart);
}

function loadquiz() {
    fetch("https://api.peterportal.org/rest/v0/courses/all").then(res=>res.json()).then(response =>{
        for ( var i = 1173; i <= 1329; i++ ) //cs
        {
            info[ String(response[i].id) ] = [ response[i].department, response[i].number, response[i].title, response[i].description ];
            
        }
        for ( var i = 3216; i <= 3256; i++ ) //ics
        {
            info[ String(response[i].id) ] = [ response[i].department, response[i].number, response[i].title, response[i].description ];

        }

        for ( var i = 3257; i <= 3322; i++ )//inf
        {
            info[ String(response[i].id) ] = [ response[i].department, response[i].number, response[i].title, response[i].description ];
        }
        
        var objkey = Object.keys( info );
        const formelement = document.createElement( "form" );
        for( [department, number, title] of Object.values(info) ) {
            const div = document.createElement( "div" );
            const checkbox = document.createElement( "input" );
            checkbox.type = "checkbox";
            const label = document.createElement( "label" );
            label.appendChild( checkbox );
            const labeltext = document.createElement( "span" );
            label.appendChild( labeltext );
            labeltext.innerText = department + " " + number + ": " + title;
            div.appendChild( label );
            formelement.append( div );
        }
        document.body.appendChild( formelement );

        const submitbutton = document.createElement( "button" );
        submitbutton.onclick = "return AddToCart();"
        document.body.appendChild( submitbutton );
    })

}