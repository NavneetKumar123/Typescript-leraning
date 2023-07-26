//question 1 : Declare a variable longText of type string and assign it a long sentence. 
//Extract the first 10 characters from longText and store them in a variable called shortText.
let longText: String = "adfghjkkerghj rghjkygih tydhlkjgytdgjk";
let shortText: String =longText.slice(0, 10);
console.log(shortText);



//question2:Declare two variables str1 and str2 of type string and assign them different sentences. Compare the 
//two strings and store the result (true or false) in a variable called areEqual.
const str1: String = "hello world";
const str2: String = "namaste world"
const areEqual:boolean = str1===str2;
console.log(areEqual);

//Declare variables product and price of type string and number, respectively. Create a string using template 
//literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
const product: string ="samsung"
const price: number =25000;
console.log("The  product ${product} is priced at ${price} dollars");

