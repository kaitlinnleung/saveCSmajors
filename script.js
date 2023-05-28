const PETERPORTAL_BASE_URL = "https://api.peterportal.org/rest/v0/";
//dictionary for class info
var info = {};
//dictionary for class to specializations it fulfills
var specializations = {
    "COMPSCI111": ["Visual Computing"],  // 1174
    "CS112": ["Visual Computing"],  // 1175
    "CS114": ["Visual Computing"],  // 1177
    "CS116": ["Visual Computing", "Intellient Systems"],    // 1179
    "CS117": ["Visual Computing"],  // 
    "CS121": ["Information", "Intelligent Systems"],    // 
    "CS122": ["Information"],   // 
    "CS122B": ["Information"],  // 
    "CS125": ["Information", "Intelligent Systems"],
    "CS131": ["Systems and Software"],
    "CS132": ["Information", "Networked Systems"],
    "CS133": ["Networked Systems"],
    "CS134": ["Information", "Networked Systems"],
    "CS141": ["Information", "Systems and Software"],
    "CS142A": ["Information", "Systems and Software"],
    "CS143A": ["Information", "Networked Systems", "Systems and Software"],
    "CS143B": ["Systems and Software"],
    "CS143A": ["Architecture & Embedded Systems"],
    "CS143B": ["Architecture & Embedded Systems"],
    "CS151": ["Architecture & Embedded Systems"],
    "CS152": ["Architecture & Embedded Systems"],
    "CS154": ["Architecture & Embedded Systems"],
    "CS162": ["Algorithms", "Intelligent Systems"],
    "CS163": ["Algorithms", "Information", "Intelligent Systems"],
    "CS167": ["Algorithms", "Information"],
    "CS169": ["Algorithms", "Intelligent Systems"],
    "CS171": ["Intelligent Systems"],
    "CS175": ["Intelligent Systems"],
    "CS177": ["Intelligent Systems"],
    "CS178": ["Information", "Intelligent Systems"],
    "CS184A": ["Bioinformatics"],
    "CS184C": ["Bioinformatcs"],
    "ICS162": ["Visual Computing"]  // 3220
};
//dictionary for class count
var count = {
    "Algorithms": 0,
    "Architecture & Embedded Systems": 0,
    "Bioinformatics": 0,
    "Information": 0,
    "Intelligent Systems": 0,
    "Networked Systems": 0,
    "Systems and Software": 0,
    "Visual Computing": 0,
};




function dropdown() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/*
function checkout() {
    var shoppingCart = document.getElementsByName("courses").value;
    
    for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].checked) {

        }
    }
    console.log(shoppingCart);
}
*/
/*
function collapsible() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
}
*/

function popupFunc() {
    console.log("hi");
    var popup = document.getElementById(pid);
    popup.classList.toggle("show");
}

function loadquiz() {
    fetch("https://api.peterportal.org/rest/v0/courses/all").then(res=>res.json()).then(response =>{
        for ( var i = 1173; i <= 1329; i++ ) //cs
        {
            if (String(response[i].id) in Object.keys(specializations)) {
                console.log(i);
                console.log(response[i].id);
            }
            //console.log(response[i].id);
            info[ String(response[i].id) ] = [ response[i].department, response[i].number, response[i].title, response[i].description ];
        }
        info[ String(response[3220].id) ] = [ response[3220].department, response[3220].number, response[3220].title, response[3220].description ];
        var objkey = Object.keys( info );
        const formelement = document.createElement( "form" );
        var pidcount = 1
        for( [department, number, title, description] of Object.values(info) ) {
            const div = document.createElement( "div" );
            const checkbox = document.createElement( "input" );
            checkbox.type = "checkbox";
            div.appendChild( checkbox );

            const label = document.createElement( "label" );
            const labeltext = document.createElement( "span" );
            // labeltext.class = "popup";
            
            const popupcontainer = document.createElement( "div" );
            popupcontainer.className = "popup";

            labeltext.innerText = department + " " + number + ": " + title;
            const paragraph = document.createElement("p");
            paragraph.className = "popuptext";
            // paragraph.id = "myPopup" + pidcount.toString();
            paragraph.innerText = description;
            popupcontainer.appendChild( paragraph );
            label.appendChild( labeltext );
            label.appendChild( popupcontainer );
            
            labeltext.onclick = () => {
                paragraph.classList.toggle("show");

            }
            // "myFunction(myPopup" + pidcount.toString() + ")";


            /*label.appendChild( paragraph);*/
            div.appendChild( label );
            formelement.append( div );
            pidcount++;
        }
        document.body.appendChild( formelement );

        const buttonsect = document.createElement( "section" );
        const submitbutton = document.createElement( "button" );
        submitbutton.innerText = "Checkout"
        submitbutton.onclick = "checkout();"
        buttonsect.appendChild( submitbutton )
        document.body.appendChild( buttonsect );
    })

}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }