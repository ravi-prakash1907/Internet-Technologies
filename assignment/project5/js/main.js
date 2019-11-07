var t = "";

var tbl = "<table border='1' class='projects'><tr> <th>Project</th> <th>Language/Technology</th> <th>Explore</th> </tr>";

var java = ["CLI Addition", "String Manipulation"];
var beans = ["Player Bean"];
var js = ["Factorial & Table", "Documentation Site"];

var num = 1;
var dict = {
    java : function () {
        java.forEach(element => {
           tbl += "<tr>";
            tbl += "<td style='font-weight: bold;'>" + element + "</td>";
            tbl += "<td>JAVA</td>";
            tbl += "<td align='center'><button onclick='";
            tbl += (num == 1) ? "first()" : "second()";
            tbl += "'>Click for Description</button></td>";
           tbl += "</tr>";
           num++;
        });
    },
    beans : function () {
           tbl += "<tr>";
            tbl += "<td style='font-weight: bold;'>" + "SimpleBean" + "</td>";
            tbl += "<td>Java Beans</td>";
            tbl += "<td align='center'><button onclick='third()'>Click for Description</button></td>";
           tbl += "</tr>";
           num++;
    },
    js : function () {
        js.forEach(element => {
           tbl += "<tr>";
            tbl += "<td style='font-weight: bold;'>" + element + "</td>";
            tbl += "<td>JavaScript</td>";
            tbl += "<td align='center'><button onclick='";
            tbl += (num == 4) ? "forth()" : "fifth()";
            tbl += "'>Click for Description</button></td>";
           tbl += "</tr>";
           num++;
        });
    }
};

function generateTable(choice) {

    var temp = document.getElementById("nav");
    temp.parentNode.removeChild(temp);

    document.getElementById("new").innerHTML = '';

    window.location.hash = '#tableOfContent';

    switch (choice) {
        case 1:
            dict.java();
            dict.beans();
            dict.js();
            break;

        case 2:
            dict.java();
            break;
        
        case 3:
            dict.beans();
            break;
        
        case 4:
            dict.js();
            break;

        default:
            break;
    }

    tbl += '</table>';
    document.getElementById("new").innerHTML = tbl;
}


///////////////////     const values    ////////////////////

var java1 = "<b>java1</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var java2 = "<b>java2</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var beans = "<b>beans</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var js1 = "<b>js1</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var js2 = "<b>js2</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


var javadis = "<b>Java</b> is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. ... A virtual machine, called the <i>Java Virtual Machine</i> (JVM), is used to run the bytecode on each platform.<br />\
               <b>Java Runtime Environment</b> (JRE) which contains the parts of the Java SE platform required to run Java programs and is intended for end users.<br />\
               <b>Java Development Kit</b> (JDK) which is intended for software developers and includes development tools such as the Java compiler, Javadoc, Jar, and a debugger.";
var beansdis = "<b>JavaBeans</b> is a portable, platform-independent model written in <b>Java</b> Programming Language. Its components are referred to as beans.<br />\
                In simple terms, JavaBeans are classes which encapsulate several objects into a single object. It helps in accessing these object from multiple places.";
var jsdis = "<b>JavaScript</b> is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.<br />\
                It is an <b>interpreted programming language</b> with object-oriented capabilities <b>(OOPs)</b>.";


var javadep = ["<b>JRE</b> (Java Runtime Environment)",
                "<b>JVM</b> (Java Virtual Machine) i.e. a component of JRE",
                "Tools and libraries that support Java development"];
var beansdep = ["Beans should have a default <b>constructor</b> (no arguments)",
                "Beans should provide <b>getter</b> and <b>setter</b> methods",
                "Beans should implement <b><i>java.io.serializable</i></b>"];
var jsdep = ["A text editor (eg. <i>Notepad++</i>, <i>Visual Studio Code</i>)", "Web Browser"];

var list = "";
var something = "";

////////////////////////////////////////


var thisProject = '<h1>Description</h1>\
    <div class="dual parent image">\
        <div class="left">\
            <h4>Project output (pic)</h4>\
            <p id="pic"><img src="" id="img" alt="Image will appeare here" /></p>\
        </div>\
        <br />\
        <div class="right">\
            <h4>Program Description</h4>\
            <p id="projInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> \
        </div>\
        <br />\
    </div>\
\
    <div class="dual parent test">\
        <div class="dependancies">\
            <h4>\
                <em>Requirements</em>\
            </h4>\
            <p id="req">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s\
                standard\
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\
                specimen\
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\
                    unchanged.</p>\
            <p>To run this program, you\'ll need: <br /></p>\
            <ol id="list">\
                \
            </ol>\
            <a href="#">Project File(s) link: GitHub</a>\
        </div>\
    </div>'


////////////////////////////////////////

function buildList(something) {
    list = "";
    something.forEach(element => {
        list += '<li>'+ element +'</li>';
    });
}

////////////////////////////////////////

function off() {
    document.getElementById("horizontalRow").style.display = "none";
}

function view(){
    document.getElementById("horizontalRow").style.display = "visible";
}

/////////////////////////////////////////

function first() {
    document.getElementById("selectionBased").innerHTML = thisProject;

    buildList(javadep);

    document.getElementById("list").innerHTML = list;
    document.getElementById("pic").innerHTML = '<img src="src/1.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = java1;
    document.getElementById("req").innerHTML = javadis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function second() {
    document.getElementById("selectionBased").innerHTML = thisProject;
    
    buildList(javadep);

    document.getElementById("list").innerHTML = list;
    document.getElementById("pic").innerHTML = '<img src="src/2.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = java2;
    document.getElementById("req").innerHTML = javadis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function third() {
    document.getElementById("selectionBased").innerHTML = thisProject;

    buildList(beansdep);

    document.getElementById("list").innerHTML = list;
    document.getElementById("pic").innerHTML = '<img src="src/3.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = beans;
    document.getElementById("req").innerHTML = beansdis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function forth() {
    document.getElementById("selectionBased").innerHTML = thisProject;

    buildList(jsdep);

    document.getElementById("list").innerHTML = list;
    document.getElementById("pic").innerHTML = '<img src="src/4.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = js1;
    document.getElementById("req").innerHTML = jsdis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function fifth() {
    document.getElementById("selectionBased").innerHTML = thisProject;

    buildList(jsdep);

    document.getElementById("list").innerHTML = list;
    document.getElementById("pic").innerHTML = '<img src="src/5.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = js2;
    document.getElementById("req").innerHTML = jsdis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

