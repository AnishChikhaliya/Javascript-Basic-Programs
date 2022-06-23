// Variables and Function  
 const newFunction = () =>  {
    var a = 10;
    var b = 29;
    var c = a+b;

    return c;
}
console.log(newFunction());

// Object 

 const myObj = {
           myName : 'Anish',
           myAge : '20'
} 

console.log(myObj.myName);

// String 

var str = 'Anish Chikhaliya';
var newStr = str.slice(6,16);

console.log(newStr);

var str1 = 'Anish Chikhaliya';
var newStr1 = str1.substr(6,10);

console.log(newStr1);

var str2 = 'Anish Chikhaliya';
var newStr2 = str2.replace('Anish','Annu');

console.log(newStr2);

var str3 = 'Anish Chikhaliya';
var newStr3 = str3.toUpperCase();
var newStr7 = str3.length;

console.log(newStr3);
console.log(newStr7);

var str4 = '              Anish Chikhaliya                ';
var newStr4 = str4.trim();

console.log(newStr4);

var str5 = 3;
var newStr5 = str5.toString();
var text = newStr5.padEnd(10,"1");  // var text = newStr5.padStart(10,"1"); // O/P 11111111113

console.log(text);

var str6 = 'anish chikhaliya';
var newStr6 = str6.toUpperCase();
var text1 = newStr6.charCodeAt(0);
var text2 = newStr6[0];

console.log(text1);
console.log(text2);

// True Or False 
    
var myObj2 ={
    myName : 'Anish',
    myAge : '20'
}
var s = 'an';

console.log(myObj2 == s ? "1" : "0");
