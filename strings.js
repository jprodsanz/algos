// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.
//
// Examples:
//
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function spaceJam(string) {
    // declare new string
    newString ="";

    for (let i=0; i <string.length; i++) {
    // if else statement
        if (string[i] != " "){
            // this should rturn the first letter
            newString += string[i];
        }
    }
    console.log(newString);
    return newString;
}
test = spaceJam("Ba t m an ")
console.log(test);