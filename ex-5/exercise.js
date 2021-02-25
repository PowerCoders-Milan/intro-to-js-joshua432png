// Example
//window.alert("Hello World!");
var phrase1 = prompt("Write something cool");
window.alert(phrase1 + " : " + phrase1.length);

var phrase2 = prompt("Tell me about yourself");
window.alert(phrase2 + " : " +  phrase2.length);
if (phrase1.length > phrase2.length) {
    window.alert(phrase1 + " was the longest with " + phrase1.length + " characters");
} else if (phrase2.length > phrase1.length) {
    window.alert(phrase2 + " was the longest with " + phrase2.length + " characters");
} else {
    window.alert("Both phrases have the same length");
}