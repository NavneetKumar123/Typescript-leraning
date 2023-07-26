//question 1 : Declare a variable longText of type string and assign it a long sentence. 
//Extract the first 10 characters from longText and store them in a variable called shortText.
var longText = "adfghjkkerghj rghjkygih tydhlkjgytdgjk";
var shortText = longText.slice(0, 10);
console.log(shortText);
//question2:Declare two variables str1 and str2 of type string and assign them different sentences. Compare the 
//two strings and store the result (true or false) in a variable called areEqual.
var str1 = "hello world";
var str2 = "namaste world";
var areEqual = str1 === str2;
console.log(areEqual);
//Declare variables product and price of type string and number, respectively. Create a string using template 
//literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
var product = "samsung";
var price = 25000;
console.log("The  product ${product} is priced at ${price} dollars");
