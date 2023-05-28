const PETERPORTAL_BASE_URL = "https://api.peterportal.org/rest/v0/";
//dictionary for class info
var info = {};
//dictionary for class to specializations it fulfills
var specializations = {
    "COMPSCI111": ["Visual Computing"], 
    "COMPSCI112": ["Visual Computing"], 
    "COMPSCI114": ["Visual Computing"], 
    "COMPSCI116": ["Visual Computing", "Intellient Systems"],   
    "COMPSCI117": ["Visual Computing"], 
    "COMPSCI121": ["Information", "Intelligent Systems"],  
    "COMPSCI122": ["Information"],  
    "COMPSCI122B": ["Information"], 
    "COMPSCI125": ["Information", "Intelligent Systems"],
    "COMPSCI131": ["Systems and Software"],
    "COMPSCI132": ["Information", "Networked Systems"],
    "COMPSCI133": ["Networked Systems"],
    "COMPSCI134": ["Information", "Networked Systems"],
    "COMPSCI141": ["Information", "Systems and Software"],
    "COMPSCI142A": ["Information", "Systems and Software"],
    "COMPSCI143A": ["Information", "Networked Systems", "Systems and Software"],
    "COMPSCI143B": ["Systems and Software"],
    "COMPSCI143A": ["Architecture & Embedded Systems"],
    "COMPSCI143B": ["Architecture & Embedded Systems"],
    "COMPSCI151": ["Architecture & Embedded Systems"],
    "COMPSCI152": ["Architecture & Embedded Systems"],
    "COMPSCI154": ["Architecture & Embedded Systems"],
    "COMPSCI162": ["Algorithms", "Intelligent Systems"],
    "COMPSCI163": ["Algorithms", "Information", "Intelligent Systems"],
    "COMPSCI167": ["Algorithms", "Information"],
    "COMPSCI169": ["Algorithms", "Intelligent Systems"],
    "COMPSCI171": ["Intelligent Systems"],
    "COMPSCI175": ["Intelligent Systems"],
    "COMPSCI177": ["Intelligent Systems"],
    "COMPSCI178": ["Information", "Intelligent Systems"],
    "COMPSCI184A": ["Bioinformatics"],
    "COMPSCI184C": ["Bioinformatcs"],
    "I&CSCI162": ["Visual Computing"] 
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

function crement( cid ) {
    console.log( cid );
    var specs = specializations[cid]
    var checker = document.getElementsByTagName("input");
    for (spec in specs){
        if ( checker.checked = true )
        {
            count[ specs[spec] ]++;
        
        }
        else
        {
            count[ specs[spec] ]--;
        }
        console.log(specializations[cid][spec]);
        console.log(count[specs[spec]]);
    }
    
    /*
    for ( var i = 0; i < spec.length; ++i )
    {
        if ( checker.checked = true )
        {
            count[ spec[i] ]++;
        
        }
        else
        {
            count[ spec[i] ]--;
        }
        console.log( count[ spec[i] ] );
    }*/
}

function loadquiz() {
    fetch("https://api.peterportal.org/rest/v0/courses/all").then(res=>res.json()).then(response =>{
        for ( var i = 1173; i <= 1329; i++ ) //cs
        {
            if (response[i].id in specializations) {
                info[ String(response[i].id) ] = [ response[i].id, response[i].department, response[i].number, response[i].title, response[i].description ];
            }
        }
        info[ String(response[3220].id) ] = [ response[3220].id, response[3220].department, response[3220].number, response[3220].title, response[3220].description ];
        var objkey = Object.keys( info );
        const formelement = document.createElement( "form" );
        var pidcount = 1
        for( [id, department, number, title, description] of Object.values(info) ) {
            const div = document.createElement( "div" );
            const checkbox = document.createElement( "input" );
            checkbox.type = "checkbox";
            checkbox.setAttribute("id", id);
            

            checkbox.onclick = () => {
                //console.log(id);
                //console.log(specializations[id]);
                checkbox.classList.toggle( crement( id ) );
                //count[ class_specializations ]++;
            }
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