// Example: 
console.log(countVowels("typescript")); 
function countVowels(str) { 
    let count = 0;
    str = str.toLowerCase();
    for(const character of str){
        if('aeiou'.includes(character)) {
            count++;
        }
    }
    return count;

} 