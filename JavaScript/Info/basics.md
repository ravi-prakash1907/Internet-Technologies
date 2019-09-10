1. <u>Changing value of an HTML attribute</u>
>```
> <button onclick="document.getElementById('pic').src ='pic2.jpg'">Show Pic-2</button>
>
> <img id="pic" src="pic1.jpg" style="width:100px" />
>
> <button onclick="document.getElementById('pic').src ='pic1.jpg'">Show Pic-1</button>
> ```
>  

2. <u>Display/Hide HTML Elements</u>
> The possible values are: none/block
>```
> document.getElementById("demo").style.display = "none";   //Hides the content
> ```


## Cases:

_While variable naming, various tricks are used_
JavaScript programmers tend to use __camel case__ that starts with a lowercase letter.

* __Hyphens:__  first-name
* __Underscore:__  first_name
* __Upper Camel Case__ _(Pascal Case)_ __:__  FirstName
* __Lower Camel Case:__  firstName

## Variables:

1. Can contain _doller_ symbol as well
2. **Must not** begin with a Digit
3. The Variables' declaration can span into multiple lines **without** semi colon (_;_). Eg.:
```
 //First
 var num1 = 10, numName = 'MyNum', numLimit = "infinity" **;**

 //  Second
 var num1 = 10,
 numName = 'MyNum',
 numLimit = "infinity" **;**

 /*_Both are correct!!_*/
 var num;    //  'num' will have the value ```undefined```

  var x = 2 + 3 + '5';     // result into **55**

  //  OBJECTS
  var car = {type:"Fiat", model:"500", color:"white"};
  // written as   name:value   pairs  --->  as dictionary
  //  car.model;   =  objectName["propertyName"];  // it's "500", both are CORRECT
```


## **this** Keyword

In a function definition, this refers to the "_owner_" of the function.
```
//  here the owner is 'person'
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```


## Operators

Some unique operators:
1. typeof
```
 typeof 42; // _number_
 var x; // _(typeof x = undefined)_
```
2. instanceof
```
x = 5; // _(x instanceof Number = true)_
```
3. in
```
"PI" in Math;
```
4. yield
```
yield x;  // it's **Pause Function**
```

## Datatypes
1. Premitive
_string, number, boolean, undefined_
2. Complex
_function, object_
```
/*  PREMITIVE   */
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)

/*  COMPLEX   */
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
```



<hr />




## Few Key Terms:

> .getElementBYId()
> .getElementByClass()
> .innerHTML
> .getElementByClass('pic')**.src** = 'otherPic.jpg'    // Changing html attribute
> .getElementByClass('text')**.style** _.fontsize__ = '12px'    // Changing css property
>
 ```
 _function_ <name> (<parameters>) {
   <body>  // parameters are declared with 'var' while above
 }
 ```
> onclick()
> onsubmit()
> document.write()  // it writes over the entire document i.e. deletes all existing HTML
> window.alert()
> console.log()
> .concat()         // 'x'.concat('y','z') = 'x'+'y'+'z' = 'xyz'

## Strange Facts:
> typeof null                // **OBJECT**
> null === undefined         // false
> null == undefined          // true
