PRANK NUMBER INSTRUCTIONS
    Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.
    
    The pattern will be one of:
    
    The numbers increase from one to the next by a fixed amount (addition).
    The numbers decrease from one to the next by a fixed amount (subtraction).
    For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].
    
    Tests:
    1. fixPrankNumber([2, 4, 7, 8, 10]) should return [2, 4, 6, 8, 10].
    2. fixPrankNumber([10, 10, 8, 7, 6]) should return [10, 9, 8, 7, 6].
    3. fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96]) should return [12, 24, 36, 48, 60, 72, 84, 96].
    4. fixPrankNumber([4, 1, -2, -5, -8, -5]) should return [4, 1, -2, -5, -8, -11].
    5. fixPrankNumber([0, 100, 200, 300, 150, 500]) should return [0, 100, 200, 300, 400, 500].
    6. fixPrankNumber([400, 425, 400, 375, 350, 325, 300]) should return [450, 425, 400, 375, 350, 325, 300].
    7. fixPrankNumber([-5, 5, 10, 15, 20]) should return [0, 5, 10, 15, 20].

CAPITALIZED FIBONACCI INSTRUCTIONS

    Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.
    
    The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
    
    The first character is at index 0.
    If the index of non-letter characters is a Fibonacci number, leave it unchanged.
    Tests:
    1. capitalizeFibonacci("hello world") should return "HELLo woRld".
    2. capitalizeFibonacci("HELLO WORLD") should return "HELLo woRld".
    3. capitalizeFibonacci("hello, world!") should return "HELLo, wOrld!".
    4. capitalizeFibonacci("The quick brown fox jumped over the lazy dog.") should return "THE qUicK broWn fox jUmped over thE lazy dog.".
    5. capitalizeFibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.") should return "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl."

BROWSER HISTORY INSTRUCTIONS
    Given an array of browser commands, return an array with two values: the history as an array of URLs, and the index of the current page.
    
    Valid commands are:
    
    "URL" - Where URL is a web address ("freecodecamp.org" for example). Navigates to the given URL, adds it to the history at the next position, and discards any forward history.
    "Back" - moves to the previous page in history, or stays on the current page if there isn't one.
    "Forward" - moves to the next page in history, or stays on the current page if there isn't one.
    For example, given ["freecodecamp.org", "freecodecamp.org/learn", "Back"], return [["freecodecamp.org", "freecodecamp.org/learn"], 0].
    
    Tests:
    1. getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]) should return [["freecodecamp.org", "freecodecamp.org/learn"], 0].
    2. getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog"]) should return [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3].
    3. getBrowserHistory(["example.com", "example.com/about", "Back", "example.com/contact",  "example.com/blog", "Back", "Back", "Forward"]) should return [["example.com", "example.com/contact", "example.com/blog"], 1].
    4. getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog", "Back", "Back", "Forward", "freecodecamp.org"]) should return [["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3].
    5. getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]) should return [["example.com", "example.com/about"], 0].
    6. getBrowserHistory(["example.com", "example.com/about", "Forward"]) should return [["example.com", "example.com/about"], 1].

EQUATION VALIDATION INSTRUCTIONS
    Given a string representing a math equation, determine whether it is correct.
    
    The left side may contain up to three positive integers and the operators +, -, *, and /.
    The equation will be given in the format: "number operator number = number" (with two or three numbers on the left). For example: "2 + 2 = 4" or "2 + 3 - 1 = 4".
    The right side will always be a single integer.
    Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.
    
    Tests:
    1. isValidEquation("2 + 2 = 4") should return true.
    2. isValidEquation("2 + 3 - 1 = 4") should return true.
    3. isValidEquation("8 / 2 = 4") should return true.
    4. isValidEquation("10 * 5 = 50") should return true.
    5. isValidEquation("2 - 2 = 0") should return true.
    6. isValidEquation("2 + 9 / 3 = 5") should return true.
    7. isValidEquation("20 - 2 * 3 = 14") should return true.
    8. isValidEquation("2 + 5 = 6") should return false.
    9. isValidEquation("10 - 2 * 3 = 24") should return false.
    10. isValidEquation("3 + 9 / 3 = 4") should return false.

