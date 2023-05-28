const PETERPORTAL_BASE_URL = "https://api.peterportal.org/rest/v0/";

//dictionary for class info
var info = {};

//dictionary for class to specializations it fulfills
var specializations = {
    "COMPSCI111": ["Visual Computing"], 
    "COMPSCI112": ["Visual Computing"], 
    "COMPSCI114": ["Visual Computing"], 
    "COMPSCI116": ["Visual Computing", "Intelligent Systems"],   
    "COMPSCI117": ["Visual Computing"], 
    "COMPSCI118": ["Visual Computing"], 
    "COMPSCI121": ["Req Information", "Intelligent Systems"],  
    "COMPSCI122A": ["Req Information"],  
    "COMPSCI122B": ["One Information", "Information"], 
    "COMPSCI122C": ["One Information", "Information"], 
    "COMPSCI122D": ["One Information", "Information"], 
    "COMPSCI125": ["One Information", "Information", "Intelligent Systems"],
    "COMPSCI131": ["Systems and Software"],
    "COMPSCI132": ["Information", "Networked Systems"],
    "COMPSCI133": ["Networked Systems"],
    "COMPSCI134": ["Information", "Networked Systems"],
    "COMPSCI141": ["Information", "Systems and Software"],
    "COMPSCI142A": ["Information", "Systems and Software"],
    "COMPSCI142B": ["Systems and Software"],
    "COMPSCI143A": ["Information", "Networked Systems", "Systems and Software"],
    "COMPSCI143B": ["Systems and Software"],
    "COMPSCI143A": ["Architecture & Embedded Systems"],
    "COMPSCI143B": ["Architecture & Embedded Systems"],
    "COMPSCI145": ["Architecture & Embedded Systems"],
    "COMPSCI147": ["Architecture & Embedded Systems"],
    "COMPSCI151": ["Architecture & Embedded Systems"],
    "COMPSCI152": ["Architecture & Embedded Systems"],
    "COMPSCI153": ["Architecture & Embedded Systems"],
    "COMPSCI154": ["Architecture & Embedded Systems"],
    "COMPSCI162": ["Algorithms", "Intelligent Systems"],
    "COMPSCI163": ["Algorithms", "Information", "Intelligent Systems"],
    "COMPSCI164": ["Algorithms", "Intelligent Systems"],
    "COMPSCI165": ["Algorithms", "Information"],
    "COMPSCI166": ["Algorithms"],
    "COMPSCI167": ["Algorithms", "Information"],
    "COMPSCI169": ["Algorithms", "Intelligent Systems"],
    "COMPSCI171": ["Req Intelligent Systems"],
    "COMPSCI172B": ["Bioinformatcs"],
    "COMPSCI172C": ["Bioinformatcs"],
    "COMPSCI175": ["Req Intelligent Systems"],
    "COMPSCI177": ["Intelligent Systems"],
    "COMPSCI178": ["Req Information", "Req Intelligent Systems"],
    "COMPSCI179": ["One Information", "Information", "Intelligent Systems"], 
    "COMPSCI184A": ["Req Bioinformatics"],
    "COMPSCI184C": ["Bioinformatcs"],
    "I&CSCI45J": ["Visual Computing"],
    "I&CSCI162": ["Visual Computing"] 
};

//dictionary for class count
var count = {
    "Algorithms": 0,
    "Architecture & Embedded Systems": 0,
    "Bioinformatics": 0,
    "Req Bioinformatics": 0,
    "Information": 0,
    "Req Information": 0,
    "One Information": 0,
    "Intelligent Systems": 0,
    "Req Intelligent Systems": 0,
    "Networked Systems": 0,
    "Systems and Software": 0,
    "Visual Computing": 0,
    "General CS": 0
};

// list for final specialization result
var spec_list = [];


function dropdown() {
    // function to dropdown menu for different page links
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function popupFunc() {
    // function to toggle course description popup
    var popup = document.getElementById(pid);
    popup.classList.toggle("show");
}

function increment( cid ) {
    // function to increment specialiation counter if checkbox is checked
    if (cid in specializations) {
        var specs = specializations[cid];
        if (document.getElementById(cid).checked) {
            for (spec in specs){
                count[ specs[spec] ]++;
            }
        } 
    }
    else {
        if (document.getElementById(cid).checked) {
            count[ "General CS" ]++;
        } 
    }
}
    


function checkout() {
    // function to update counters, determine potential specializations, then change page to result page
    for ( val of Object.values( info ) )
    {
        increment( val[0] );
    }

    if ( count["Algorithms"] >= 4 ) {
        spec_list.push( "Algorithms" );

    }
    
    if ( count["Architecture & Embedded Systems"] >= 4 ) {
        spec_list.push( "Architecture & Embedded Systems" );
    }

    if ( count["Bioinformatics"] >= 3 && count["Req Bioinformatics"] >= 1 ) {
        spec_list.push( "Bioinformatics" );
    }

    if ( count["Information"] >= 4 && count["One Information"] >= 1 && count["Req Information"] >= 3 ) {
        spec_list.push( "Information" );
    }

    if ( count["Intelligent Systems"] >= 3 && count["Req Intelligent Systems"] >= 3) {
        spec_list.push( "Intelligent Systems" );
    }

    if ( count["Networked Systems"] >= 4) {
        spec_list.push( "Networked Systems" );
    }

    if ( count["Systems and Software"] >= 3) {
        spec_list.push( "Systems and Software" );
    }

    if ( count["Visual Computing"] >= 4) {
        spec_list.push( "Visual Computing" );
    }
    if ( spec_list.length == 0 ) {
        spec_list.push( "General CS" );
    }   

    document.body.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="navbar">
            <a class="active"></a>
            <div id="myLinks" class="links">
                <a href="index.html">Home</a>
                <a href="quiz.html">Matcher</a>
                <a href="specializations.html">Specializations</a>
                <a href="resources.html">Resources</a>
                <a href="aboutus.html">About Us</a>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="dropdown()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div class="confetti-container">
        <h1>Specialization Results: </h1>
    `
    for ( var i = 0; i < spec_list.length; i++ )
    {
        document.body.innerHTML += `<h2 class="specRes">` + spec_list[i] + `</h2>`
    }

    document.body.innerHTML += `
        <img class="happylemon" src="IMG_2195.PNG" alt="Happy lemon on wheels uci hat" />
    `
    document.body.innerHTML += `
        <h3>For a description of your recommended specialization(s), checkout <a id="jsh3" href="specializations.html">our specializations page</a>!</h3>
    `

    var tempHTML = document.body.innerHTML
    document.body.innerHTML += `        
            <div class="confetti">
                <i style="--speed: 10; --bg: yellow" class="square"></i>
                <i style="--speed: 18; --bg: white" class="pentagram"></i>
                <i style="--speed: 29; --bg: green" class="rectangle"></i>
                <i style="--speed: 17; --bg: blue" class="hexagram"></i>
                <i style="--speed: 33; --bg: red" class="pentagram"></i>
                <i style="--speed: 26; --bg: yellow" class="dodecagram"></i>
                <i style="--speed: 24; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 5; --bg: blue" class="wavy-line"></i>
                <i style="--speed: 40; --bg: white" class="square"></i>
                <i style="--speed: 17; --bg: green" class="rectangle"></i>
                <i style="--speed: 25; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 15; --bg: yellow" class="wavy-line"> </i>
                <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
                <i style="--speed: 25; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 37; --bg: yellow" class="dodecagram"></i>
                <i style="--speed: 23; --bg: pink" class="wavy-line"></i>
                <i style="--speed: 37; --bg: red" class="dodecagram"></i>
                <i style="--speed: 37; --bg: pink" class="wavy-line"></i>
                <i style="--speed: 36; --bg: white" class="hexagram"></i>
                <i style="--speed: 32; --bg: green" class="wavy-line"></i>
                <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
                <i style="--speed: 29; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 37; --bg: red" class="dodecagram"></i>
                <i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 30; --bg: pink" class="rectangle"></i>
                <i style="--speed: 30; --bg: red" class="square"></i>
                <i style="--speed: 18; --bg: red" class="pentagram"></i>
                <i style="--speed: 19; --bg: green" class="rectangle"></i>
                <i style="--speed: 16; --bg: blue" class="hexagram"></i>
                <i style="--speed: 23; --bg: red" class="pentagram"></i>
                <i style="--speed: 34; --bg: yellow" class="dodecagram"></i>
                <i style="--speed: 39; --bg: pink" class="wavy-line"></i>
                <i style="--speed: 40; --bg: purple" class="square"></i>
                <i style="--speed: 21; --bg: green" class="rectangle"></i>
                <i style="--speed: 14; --bg: white" class="square"></i>
                <i style="--speed: 38; --bg: green" class="rectangle"></i>
                <i style="--speed: 19; --bg: red" class="dodecagram"></i>
                <i style="--speed: 29; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 21; --bg: white" class="hexagram"></i>
                <i style="--speed: 17; --bg: purple" class="wavy-line"></i>
                <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
                <i style="--speed: 23; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 37; --bg: red" class="dodecagram"></i>
                <i style="--speed: 48; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 38; --bg: pink" class="rectangle"></i>
                <i style="--speed: 13; --bg: red" class="pentagram"></i>
                <i style="--speed: 49; --bg: yellow" class="dodecagram"></i>
                <i style="--speed: 19; --bg: cyan" class="wavy-line"></i>
                <i style="--speed: 15; --bg: steelblue" class="square"></i>
                <i style="--speed: 10; --bg: yellow" class="square"></i>
                <i style="--speed: 18; --bg: white" class="pentagram"></i>
                <i style="--speed: 29; --bg: green" class="rectangle"></i>
                <i style="--speed: 17; --bg: blue" class="hexagram"></i>
                <i style="--speed: 33; --bg: red" class="pentagram"></i>
                <i style="--speed: 26; --bg: yellow" class="dodecagram"></i>
                <i style="--speed: 24; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 5; --bg: white" class="wavy-line"></i>
                <i style="--speed: 40; --bg: purple" class="square"></i>
                <i style="--speed: 17; --bg: green" class="rectangle"></i>
                <i style="--speed: 25; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 15; --bg: cyan" class="wavy-line"> </i>
                <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
                <i style="--speed: 45; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 37; --bg: red" class="dodecagram"></i>
                <i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 37; --bg: red" class="dodecagram"></i>
                <i style="--speed: 37; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 26; --bg: white" class="hexagram"></i>
                <i style="--speed: 32; --bg: cyan" class="wavy-line"></i>
                <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
                <i style="--speed: 45; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 37; --bg: red" class="dodecagram"></i>
                <i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 50; --bg: pink" class="rectangle"></i>
                <i style="--speed: 30; --bg: red" class="square"></i>
                <i style="--speed: 18; --bg: red" class="pentagram"></i>
                <i style="--speed: 19; --bg: green" class="rectangle"></i>
                <i style="--speed: 16; --bg: blue" class="hexagram"></i>
                <i style="--speed: 23; --bg: red" class="pentagram"></i>
                <i style="--speed: 33; --bg: yellow" class="dodecagram"></i>
                <i style="--speed: 39; --bg: white" class="wavy-line"></i>
                <i style="--speed: 40; --bg: orange" class="square"></i>
                <i style="--speed: 21; --bg: green" class="rectangle"></i>
                <i style="--speed: 14; --bg: white" class="square"></i>
                <i style="--speed: 38; --bg: green" class="rectangle"></i>
                <i style="--speed: 19; --bg: red" class="dodecagram"></i>
                <i style="--speed: 29; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 34; --bg: white" class="hexagram"></i>
                <i style="--speed: 17; --bg: indigo" class="wavy-line"></i>
                <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
                <i style="--speed: 23; --bg: white" class="square"></i>
                <i style="--speed: 18; --bg: green" class="rectangle"></i>
                <i style="--speed: 37; --bg: red" class="dodecagram"></i>
                <i style="--speed: 48; --bg: pink" class="wavy-line"> </i>
                <i style="--speed: 38; --bg: pink" class="rectangle"></i>
                <i style="--speed: 13; --bg: red" class="pentagram"></i>
                <i style="--speed: 49; --bg: yellow" class="dodecagram"></i>
                <i style="--speed: 19; --bg: purple" class="wavy-line"></i>
                <i style="--speed: 15; --bg: cyan" class="square"></i>
            </div>
        </div>
    `
    setTimeout(function () {
        document.body.innerHTML = tempHTML;
    }, 5000);

}

function loadquiz() {
    // function to load quiz html with checkboxes and valid courses
    fetch("https://api.peterportal.org/rest/v0/courses/all").then(res=>res.json()).then(response =>{

        for ( var i = 1173; i <= 1225; i++ )
        {
            if (i != 1206) {
                info[ String(response[i].id) ] = [ response[i].id, response[i].department, response[i].number, response[i].title, response[i].description ];
            }
        }
        info[ String(response[3220].id) ] = [ response[3220].id, response[3220].department, response[3220].number, response[3220].title, response[3220].description ];
        info[ String(response[3240].id) ] = [ response[3240].id, response[3240].department, response[3240].number, response[3240].title, response[3220].description ];
        const outerdiv = document.createElement( "div" );
        outerdiv.setAttribute( "id", "outerdiv" );
        const formelement = document.createElement( "form" );
        var pidcount = 1

        for( [id, department, number, title, description] of Object.values(info) ) {
            const div = document.createElement( "div" );
            const checkbox = document.createElement( "input" );
            checkbox.type = "checkbox";
            checkbox.className = "checkList";
            checkbox.setAttribute("id", id);     
            
            
            checkbox.onclick = () => {
                checkbox.classList.toggle( console.log( "checkbox click" ) );
            }
            
            div.appendChild( checkbox );

            const label = document.createElement( "label" );
            const labeltext = document.createElement( "span" );
            
            const popupcontainer = document.createElement( "div" );
            popupcontainer.className = "popup";
            labeltext.innerText = department + " " + number + ": " + title;
            const paragraph = document.createElement("p");
            paragraph.className = "popdesc";
            paragraph.innerText = description;
            popupcontainer.appendChild( paragraph );
            label.appendChild( labeltext );
            label.appendChild( popupcontainer );
            
            labeltext.onclick = () => {
                paragraph.classList.toggle("show");

            }
            
            div.appendChild( label );
            formelement.append( div );
            pidcount++;
        }
        outerdiv.appendChild( formelement );
        document.body.appendChild( outerdiv );

        const spacer = document.createElement( "br" );
        document.body.appendChild( spacer );

        const buttonsect = document.createElement( "section" );
        const submitbutton = document.createElement( "button" );
        submitbutton.innerText = "Submit"
        submitbutton.onclick = () => {
            checkout();
        }
        buttonsect.appendChild( submitbutton )
        document.body.appendChild( buttonsect );
    })

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }


}