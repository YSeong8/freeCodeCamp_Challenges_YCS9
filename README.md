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

    
