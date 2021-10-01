// program to check if the string is palindrome or not

function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
			
            return "Le mot "+string+" n'est pas un palindrome";
        }
    }
    return "Le mot "+string+" est un palindrome";
}

// take input
const string = prompt('Entrée un mot: ');

// call the function
const value = checkPalindrome(string);
document.write("<h1 align='center'>"+value+"</p>")
