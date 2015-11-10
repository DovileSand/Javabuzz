var Javabuzz = function () {};
Javabuzz.prototype.isDivisibleByThree = function (number) {
  return this._isDivisibleBy(number, 3);
};
Javabuzz.prototype.isDivisibleByFive = function (number) {
  return this._isDivisibleBy(number, 5);
};
Javabuzz.prototype.isDivisibleByFifteen = function (number) {
  return this._isDivisibleBy(number, 15);
};
Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "Javabuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Java";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};

Array.range= function(a, b, step){
    var A= [];
    if(typeof a== 'number'){
        A[0]= a;
        step= step || 1;
        while(a+step<= b){
            A[A.length]= a+= step;
        }
    }
    else{
        var s= 'abcdefghijklmnopqrstuvwxyz';
        if(a=== a.toUpperCase()){
            b=b.toUpperCase();
            s= s.toUpperCase();
        }
        s= s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        A= s.split('');
    }
    return A;
};

console.log(javabuzz.says(Array.range(0,100)));
