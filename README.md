andThen
=======

a Javascript fluent-interface "library" for calling timed events in one line of code.

How to use
==========
```html
<script type="text/javascript" src="andThen.js"></script>
<!-- or paste the min.js content -->

<script type="text/javascript">
function first() { ... }
function second() { ... }
function third() { ... }
function fourth() { ... }

new startWith(first,5000).andThen(second,3000).andThen(third,7000).andThen(fourth,10000);
</script>
``` 

* First Argument is a function to run, second is timeout (in ms) to run it.
* Functions are executed according to the chain order. 
* The timeout value is **relative** to the previous call in the chain (e.g. the function `third` will be called 7 seconds after the function `second` is called).

