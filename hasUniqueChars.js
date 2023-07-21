// Write your code below
function uniqChar (chars) {
    for(let i = 0; i<=chars.length; i++) {
        for(let j = i + 1; j<=chars.length; j++){
            if(chars[j] == chars[i]) {
                return false
            }
        }
    }
    return true;
}

console.log(uniqChar("Monday"))
console.log(uniqChar("Moonday"))
console.log(uniqChar("Bob"))


