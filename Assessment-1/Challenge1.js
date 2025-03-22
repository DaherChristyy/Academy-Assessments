// Example: 
// reverseString("hello"); // "olleh" 
function reverseString(s) { 
    let reverse = '';
    for(let i = s.length-1; i>=0;i--){
        reverse+=s[i];
    }
    return reverse;
}

console.log(reverseString("hello"));
