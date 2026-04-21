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

 DIGIT ROTATION ESCAPE
 
    Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.
    
    A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.
    
    Check rotation 0 (the given number) first.
    Given numbers won't contain any zeros.
    Return the first rotation number if one is found, or "none" if not.
    Tests:
    1. getRotation(123) should return 0.
    2. getRotation(13579) should return 3.
    3. getRotation(24681) should return "none".
    4. getRotation(84138789345) should return 6.

WHAT DAY IS IT?

    Menu
    Profile
    We have updated your personal informationClose
    ×
    Daily Coding Challenge
    April 6, 2026
    Instructions
    script.jsEditor
    JavaScript
    Python
    Console
    What Day Is It?
    Given a Unix timestamp in milliseconds, return the day of the week.
    
    Valid return days are:
    
    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday"
    Be sure to ignore time zones.
    
    Tests:
    1. getDayOfWeek(1775492249000) should return "Monday".
    2. getDayOfWeek(1766246400000) should return "Saturday".
    3. getDayOfWeek(33791256000000) should return "Tuesday".
    4. getDayOfWeek(1773576000000) should return "Sunday".
    5. getDayOfWeek(0) should return "Thursday".

PALINDROME CHARACTERS INSTRUCTIONS

    Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).
    
    A palindrome is a string that is the same forward and backward.
    If it's not a palindrome, return "none".
    Tests:
    1. palindromeLocator("racecar") should return "e".
    2. palindromeLocator("level") should return "v".
    3. palindromeLocator("freecodecamp") should return "none".
    4. palindromeLocator("noon") should return "oo".
    5. palindromeLocator("11100111") should return "00".

FIZZBUZZ VALIDATOR INSTRUCTIONS

    Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.
    
    In a valid FizzBuzz sequence:
    
    Multiples of 3 are replaced with "Fizz".
    Multiples of 5 are replaced with "Buzz".
    Multiples of both 3 and 5 are replaced with "FizzBuzz".
    All other numbers remain as integers.
    Tests:
    1. isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]) should return true.
    2. isFizzBuzz([13, 14, "FizzBuzz", 16, 17]) should return true.
    3. isFizzBuzz([1, 2, "Fizz", 4, 5]) should return false.
    4. isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) should return true.
    5. isFizzBuzz([1, 2, "Fizz", "Buzz", 5]) should return false.
    6. isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]) should return false.
    7. isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]) should return true.

NEXT BINGO NUMBER INSTRUCTIONS

    Given a bingo number, return the next bingo number sequentially.
    
    A bingo number is a single letter followed by a number in its range according to this chart:
    
    Letter	Number Range
    "B"	1-15
    "I"	16-30
    "N"	31-45
    "G"	46-60
    "O"	61-75
    For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".
    
    Tests:
    1. getNextBingoNumber("B10") should return "B11".
    2. getNextBingoNumber("N33") should return "N34".
    3. getNextBingoNumber("I30") should return "N31".
    4. getNextBingoNumber("G60") should return "O61".
    5. getNextBingoNumber("O75") should return "B1".

ROOK ATTACK INSTRUCTIONS

    Given two strings for the location of two rooks on a chess board, determine if they can attack each other.
    
    A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:
    
    A8	B8	C8	D8	E8	F8	G8	H8
    A7	B7	C7	D7	E7	F7	G7	H7
    A6	B6	C6	D6	E6	F6	G6	H6
    A5	B5	C5	D5	E5	F5	G5	H5
    A4	B4	C4	D4	E4	F4	G4	H4
    A3	B3	C3	D3	E3	F3	G3	H3
    A2	B2	C2	D2	E2	F2	G2	H2
    A1	B1	C1	D1	E1	F1	G1	H1
    Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.
    
    Tests:
    Waiting:1. rookAttack("A1", "A8") should return true.
    Waiting:2. rookAttack("B4", "F4") should return true.
    Waiting:3. rookAttack("E3", "D4") should return false.
    Waiting:4. rookAttack("H7", "F6") should return false.
