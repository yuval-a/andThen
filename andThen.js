(function() {

   /* Private */
   var funcQueue = new Array();
   var runTimedFunc = function(fo) {
      var funcObj = fo;
      setTimeout( function() {
        funcObj.func();
        if (fq.length>0) {
           var fo = fq.shift();
           runTimedFunc(fo);
        }
      }, fo.timeout);
   }


   /* Public */
   this.startWith = function(f,t) {
       runTimedFunc({func:f, timeout:t});
       return this;
   }

   startWith.prototype.andThen = function(f,t) {
       fq.push({func:f, timeout:t});
       return this;
   }
   
}());
