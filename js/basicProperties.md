### Introducing some very basic properties of JavaScript

1. <u>.innerHTML</u>
> It is used to read/write data in DOM
> it replaces the entire content of selected DOM, while writing.
> eg.:
>```
> <button type="button"
> onclick="document.getElementById('demo').innerHTML = Date()">
> Click me to display Date and Time.</button>
>
> <p id="demo">hi</p>   <!--  This HI will be overwritten!  -->
>
>```
