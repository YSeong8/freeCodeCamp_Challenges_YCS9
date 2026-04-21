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

ROOK AND BISHOP ATTACK INSTRUCTIONS

    Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.
    
    A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:
    
    A8	B8	C8	D8	E8	F8	G8	H8
    A7	B7	C7	D7	E7	F7	G7	H7
    A6	B6	C6	D6	E6	F6	G6	H6
    A5	B5	C5	D5	E5	F5	G5	H5
    A4	B4	C4	D4	E4	F4	G4	H4
    A3	B3	C3	D3	E3	F3	G3	H3
    A2	B2	C2	D2	E2	F2	G2	H2
    A1	B1	C1	D1	E1	F1	G1	H1
    Rooks can move as many squares as they want in a horizontal or vertical direction.
    Bishops can move as many squares as they want in any diagonal direction.
    One piece can attack another if it can move to the location of that piece.
    Return:
    
    "rook" if the rook can attack the bishop.
    "bishop" if the bishop can attack the rook.
    "neither" if neither piece can attack one another.
    Tests:
    1. rookBishopAttack("A1", "A5") should return "rook".
    2. rookBishopAttack("C3", "F6") should return "bishop".
    3. rookBishopAttack("D4", "D7") should return "rook".
    4. rookBishopAttack("B7", "H1") should return "bishop".
    5. rookBishopAttack("B3", "C5") should return "neither".
    6. rookBishopAttack("G3", "E8") should return "neither".

SPIRAL MATRIX INSTRUCTIONS

    Given a 2D matrix, return a flat array with all of its values in clockwise order.
    
    The returned array should have the top-left value first, move right along the top row, then down the right column, then left along the bottom row, then up the left column. Repeat inward for any remaining layers.
    
    For example, given:
    
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    Return [1, 2, 3, 6, 9, 8, 7, 4, 5].
    
    Tests:
    1. spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [1, 2, 3, 6, 9, 8, 7, 4, 5].
    2. spiralMatrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]]) should return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"].
    3. spiralMatrix([[true, false, false], [false, true, true], [false, true, false], [true, true, false]]) should return [true, false, false, true, false, false, true, true, false, false, true, true].
    4. spiralMatrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]]) should return [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].

NAME INITIALS INSTRUCTIONS

    Given a full name as a string, return their initials.
    
    Names to initialize are separated by a space.
    Initials should be made uppercase.
    Initials should be separated by dots.
    For example, "Tommy Millwood" returns "T.M.".
    
    Tests:
    1. getInitials("Tommy Millwood") should return "T.M.".
    2. getInitials("Savanna Puddlesplash") should return "S.P.".
    3. getInitials("Frances Cowell Conrad") should return "F.C.C.".
    4. getInitials("Dragon") should return "D.".
    5. getInitials("Dorothy Vera Clump Haverstock Norris") should return "D.V.C.H.N.".

LAST INITIAL INSTRUCTIONS

    Given a string, return the letter from the string that appears last in the alphabet.
    
    If two or more letters tie for the last in the alphabet, return the first one.
    Ignore all non-letter characters.
    Tests:
    1. getLastLetter("world") should return "w".
    2. getLastLetter("Hello World") should return "W".
    3. getLastLetter("The quick brown fox jumped over the lazy dog.") should return "z".
    4. getLastLetter("HeLl0") should return "L".
    5. getLastLetter("!#$ er@R asd fT.,> 2t0e9") should return "T".

SORTED ARRAY SWAP INSTRUCTIONS

    Given an array of integers, return a new array using the following rules:
    
    Sort the integers in ascending order
    Then swap all values whose index is a multiple of 3 with the value before it.
    Tests:
    1. sortAndSwap([3, 1, 2, 4, 6, 5]) should return [1, 2, 4, 3, 5, 6].
    2. sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
    3. sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
    4. sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11]) should return [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12].
    5. sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25]) should return [-75, -50, 0, -25, 25, 75, 50, 100].
    6. sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]) should return [-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313].

STRING MATH INSTRUCTIONS

    Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.
    
    If the count of characters separating two numbers is even, use addition.
    If it's odd, use subtraction.
    Consecutive digits form a single number.
    Operations are applied left to right.
    Ignore leading and trailing characters that aren't digits.
    For example, given "3ab10c8", return 5. Add 3 and 10 to get 13 because there's an even number of characters between them. Then subtract 8 from 13 because there's an odd number of characters between the result and 8.
    
    Tests:
    1. doMath("3ab10c8") should return 5.
    2. doMath("6MINUS4") should return 2.
    3. doMath("9plus3") should return 12.
    4. doMath("5fkwo#10i#%.<>15P=@20!#B/25") should return 15.
    5. doMath("a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt") should return 67.
    
HIDDEN KEY

    Welcome to the 250th daily challenge!
    
    Given an encoded string, decode it using an encryption key and return it.
    
    To find the key:
    
    Look at all daily challenges up to today whose challenge number is a multiple of 25 (including this one).
    Take the first letter from each of those challenge titles and combine them into a string. If the title starts with a non-letter, find its first letter.
    To decode the message, go over each letter in the encoded message and:
    
    Look at the corresponding letter in the key (repeat the key if the message is longer than the key).
    Convert the key letter to its corresponding number: "A" = 1, "B" = 2, ..., "Z" = 26.
    Shift the encoded letter backward in the alphabet by that number.
    If the shift goes before "A", wrap around to "Z".
    For example, if the encoded message starts with "Y" and the first key letter is "V" (22), shift "Y" back 22 places to get "C". Repeat this process for each letter to decode the full message.
    
    Only letters are shifted, spaces are returned as-is.
    All given and returned letters are uppercase.
    Tests:
    1. decode("YAVJYNXE") should return "CONGRATS".
    2. decode("YALLUT PQUMJP") should return "CODING LEGEND".
    3. decode("UAC DYR EISAKYM") should return "YOU ARE AWESOME".
    4. decode("GQMS NBMZU") should return "KEEP GOING".
    5. decode("W IQQURV UG I ZDMDTRV IVW JQDHY TMHSA QB") should return "A WINNER IS A DREAMER WHO NEVER GIVES UP".

ARRAY SUM FINDER INSTRUCTIONS

    Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.
    
    The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
    Each number in the array may only be used once.
    If no valid subset exists, return "Sum not found".
    Return the matching numbers as an array in the order they appear in the original array.
    
    Tests:
    1. findSum([1, 3, 5, 7], 6) should return [1, 5].
    2. findSum([1, 2, 3, 4, 5], 5) should return [1, 4].
    3. findSum([1, 2, 3, 4, 5], 6) should return [1, 2, 3].
    4. findSum([-1, -2, 3, 4], 1) should return [-1, -2, 4].
    5. findSum([3, 1, 4, 1, 5, 9, 2, 6], 10) should return [3, 1, 4, 2].
    6. findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20) should return [1, 2, 3, 5, 9].
    7. findSum([7, 9, 4, 2, 5], 10) should return "Sum not found".
