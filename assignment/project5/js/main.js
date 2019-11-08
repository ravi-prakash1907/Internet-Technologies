var projHead = "";


var tbl = "<table border='1' class='projects'><tr> <th>Project</th> <th>Language/Technology</th> <th>Explore</th> </tr>";

var java = ["CLI Addition", "String Manipulation"];
var beans = ["Player Bean"];
var js = ["Factorial & Table", "Documentation Site"];

var num = 1;
var dict = {
    java : function () {
        num = 1;
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
    beans: function () {
           num = 3;
           tbl += "<tr>";
            tbl += "<td style='font-weight: bold;'>" + "SimpleBean" + "</td>";
            tbl += "<td>Java Beans</td>";
            tbl += "<td align='center'><button onclick='third()'>Click for Description</button></td>";
           tbl += "</tr>";
           num++;
    },
    js: function () {
        num = 4;
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

var java1 = "This is a <b>JAVA</b> program, ran through Command Line to add the integers. To run this program, we first need to compile it using<br /> <code>$ javac <fileName>.java</code> <br />As the program is compiled and has generated the <i>byte code</i>, we can simpally run it. In <i>run</i> command, it takes the <i>number of arguments</i> i.e. to be added.<br />As in the demonstrated example, we've run:<br /> <code>$ javac proj1.java</code> <br /> <code>$ java proj1 4</code> <br /><i>(* here '4' is number of integers, to be added!)</i><br />In this way, we can add arguments, dynamically, using this program.";
var java2 = "This is a program, made to implement few basic & most used <i>string manipulations</i> in <b>JAVA</b>. It shows the usage/working of the functions like <code>concat()</code>, <code>setCharAt()</code>, <code>append()</code> etc..<br />We can run this program by following commands:<br /><code>$ javac proj2.java</code> <br /> <code>$ java proj2</code>";
var beans = "This is a <b>JAVA</b> program, that defines and implements a <i>bean</i> called \"Player\". The bean implements <i>java.io.Serializable</i> class.<br />It consists the player\'s Jersey No., Name & Sport.<br />It's run in the same way, as we run a normal java code, using <code>Test.java</code> file.";
var js1 = "This is a little web-page, build to implement 2 of the common mathamatics utilities i.e. <i>Factoral</i> & <i>Table</i> (upto 10 terms). Although, the page is made using HTML & CSS, but the main functionalities are provided using <b>JavaScript</b><br />The source-code of the same is available at 'js/main.js', by clicking the GitHub link, below.";
var js2 = "This is a single-page static site, made to do the <i>documention</i> of the projects made under the above-mentioned Information Technology Assignment. It is, currently running locally.<br /> This site uses a bulk of the HTML, CSS and JavaScript codes. The major page-rendering and functionalities are provided by <b>Javascript</b> & <b>CSS</b>, that make page user friendly and manipulate the things in such a way, as if page is working in a dynamic way.<br /><br /> <small><a href=\"https://github.com/ravi-prakash1907/Internet-Technologies/blob/master/assignment/project5/js/main.js\" target=\"_blank\"><i><b>Click to view the JavaScript code</i></b></a></small>";


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
var link = "";

////////////////////////////////////////


var thisProject = '<h1>Description</h1>\
    <div class="dual parent image">\
        <div class="left">\
            <h4>Output Screen</h4>\
            <p id="pic"><img src="" id="img" alt="Image will appeare here" /></p>\
        </div>\
        <br />\
        <div class="right">\
            <h4 id="projectname">Project Title</h4>\
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
                    <br /><hr />\
            <p>To run this program, you\'ll need: <br /></p>\
            <ol id="list">\
                \
            </ol>\
            <span id="hyperlink"></span>\
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

    link = "https://github.com/ravi-prakash1907/Internet-Technologies/tree/master/assignment/project1";

    document.getElementById("hyperlink").innerHTML = '<a href="'+link+'" target="_blank">See the source code on <b>Github</b></a>';
    document.getElementById("list").innerHTML = list;
    document.getElementById("projectname").innerHTML = "CLI Addition";
    document.getElementById("pic").innerHTML = '<img src="src/1.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = java1;
    document.getElementById("req").innerHTML = javadis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function second() {
    document.getElementById("selectionBased").innerHTML = thisProject;
    
    buildList(javadep);

    link = "https://github.com/ravi-prakash1907/Internet-Technologies/tree/master/assignment/project2";

    document.getElementById("hyperlink").innerHTML = '<a href="'+link+'" target="_blank">See the source code on <b>Github</b></a>';

    document.getElementById("list").innerHTML = list;
    document.getElementById("projectname").innerHTML = "String Manipulation";
    document.getElementById("pic").innerHTML = '<img src="src/2.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = java2;
    document.getElementById("req").innerHTML = javadis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function third() {
    document.getElementById("selectionBased").innerHTML = thisProject;

    buildList(beansdep);

    link = "https://github.com/ravi-prakash1907/Internet-Technologies/tree/master/assignment/project3";

    document.getElementById("hyperlink").innerHTML = '<a href="'+link+'" target="_blank">See the source code on <b>Github</b></a>';

    document.getElementById("list").innerHTML = list;
    document.getElementById("projectname").innerHTML = "Player Bean";
    document.getElementById("pic").innerHTML = '<img src="src/3.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = beans;
    document.getElementById("req").innerHTML = beansdis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function forth() {
    document.getElementById("selectionBased").innerHTML = thisProject;

    buildList(jsdep);

    link = "https://github.com/ravi-prakash1907/Internet-Technologies/tree/master/assignment/project4";

    document.getElementById("hyperlink").innerHTML = '<a href="'+link+'" target="_blank">See the source code on <b>Github</b></a>';

    document.getElementById("list").innerHTML = list;
    document.getElementById("projectname").innerHTML = "Factorial & Table";
    document.getElementById("pic").innerHTML = '<img src="src/4.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = js1;
    document.getElementById("req").innerHTML = jsdis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}

function fifth() {
    document.getElementById("selectionBased").innerHTML = thisProject;

    buildList(jsdep);

    link = "https://github.com/ravi-prakash1907/Internet-Technologies/tree/master/assignment/project5";

    document.getElementById("hyperlink").innerHTML = '<a href="'+link+'" target="_blank">See the source code on <b>Github</b></a>';

    document.getElementById("list").innerHTML = list;
    document.getElementById("projectname").innerHTML = "Documentation Site";
    document.getElementById("pic").innerHTML = '<img src="src/5.png" id="img" alt="Can\'t load Image" />';
    document.getElementById("projInfo").innerHTML = js2;
    document.getElementById("req").innerHTML = jsdis;

    document.getElementById("selectionBased").style = 'background-color: #474b4f';
    window.location.hash = '#selectionBased';
}


////////////////////////////////////


