//  pr1

// function firstNletters(n){
//     let letters = ""
//     for (let i= 65; i <=65 + n; i++){
//         res = String.fromCharCode(i) + " "
//         letters += res
//     }
//     return letters
// }
// let N = firstNletters(20);
// console.log(N)



// pr2

// function checkCharacterType(input) {
//     if (typeof input === 'string' && input.length === 1) {
//         let charCode = input.charCodeAt(0);

//         if (charCode >= 48 && charCode <= 57) {
//             console.log("digit");
//         } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             console.log("lotin");
//         } else {
//             console.log("Nol");
//         }
//     } else {
//         console.log("Nol");
//     }
// }

// checkCharacterType("A"); 
// checkCharacterType("5"); 
// checkCharacterType("&"); 


// String 3
// function printUTF16Codes(str) {
//     if (typeof str === 'string' && str.length > 0) {
//         let firstCharCode = str.charCodeAt(0);
//         let lastCharCode = str.charCodeAt(str.length - 1);

//         console.log("Birinchi belgi UTF-16 kodi: " + firstCharCode);
//         console.log("Oxirgi belgi UTF-16 kodi: " + lastCharCode);
//     } else {
//         console.log("Wrong value. Satr kiritilmagan yoki bo'sh.");
//     }
// }

// printUTF16Codes("Hello");

// String 4
// function generateString(n, char) {
//     if (n > 0) {
//         let result = char.repeat(n);
//         console.log(result);
//     } else {
//         console.log("Wrong value. N soni musbat bo'lishi kerak.");
//     }
// }

// generateString(8, 'A');

// String 5
// function reverseString(input) {
//     if (typeof input === 'string' && input.length > 0) {
//         let reversedString = input.split('').reverse().join('');
//         console.log(reversedString);
//     } else {
//         console.log("Wrong value. Satr kiritilmagan yoki bo'sh.");
//     }
// }

// reverseString("Ozbkekiston");

// String 6
// function StringStar(inputStr, N) {
//     if (typeof inputStr === 'string' && inputStr.length > 0 && Number.isInteger(N) && N > 0) {
//         let result = "";
//         for (let i = 0; i < inputStr.length; i++) {
//             result += inputStr[i];
//             for (let j = 0; j < N; j++) {
//                 result += "*";
//             }
//         }
//         console.log(result);
//     } else {
//         console.log("Wrong value. Satr kiritilmagan yoki bo'sh, N soni musbat butun son bo'lishi kerak.");
//     }
// }

// StringStar("Ozbekiston", 2);

// String 7
// function findNumbers(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let numbers = "";
//         for (const char of inputStr) {
//             if (!isNaN(char)) {
//                 numbers += char;
//             }
//         }
//         console.log("raqamlar soni: " + numbers);
//     } else {
//         console.log("Wrong value. Satr kiritilmagan yoki bo'sh.");
//     }
// }

// findNumbers("heyhtere4857965me");

// String 8
// function countLowercaseLetters(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let count = 0;
//         for (const char of inputStr) {
//             // Kirill alifbosi harflari (а - я) va lotin alifbosi harflari (a - z)
//             if ((char >= 'а' && char <= 'я') || (char >= 'a' && char <= 'z')) {
//                 count++;
//             }
//         }
//         console.log("Satrdagi kichik lotin va kirill harflarining umumiy soni: " + count);
//     } else {
//         console.log("Wrong value. Satr kiritilmagan yoki bo'sh.");
//     }
// }

// countLowercaseLetters("hello world");

// String 9
// function convertUppercaseToLowercase(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let result = "";
//         for (const char of inputStr) {
//             if (char >= 'A' && char <= 'Z') {
//                 
//                 result += String.fromCharCode(char.charCodeAt(0) + 32);
//             } else {
//                 result += char;
//             }
//         }
//         console.log("Natija: " + result);
//     } else {
//         console.log("Wrong value.");
//     }
// }

// convertUppercaseToLowercase("hello me is me");

// String 10
// function swapCase(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {
//         let result = "";
//         for (const char of inputStr) {
//             if (char >= 'A' && char <= 'Z') {
//                 result += String.fromCharCode(char.charCodeAt(0) + 32);
//             } else if (char >= 'a' && char <= 'z') {
//                 result += String.fromCharCode(char.charCodeAt(0) - 32);
//             } else {
//                 result += char;
//             }
//         }
//         console.log("Natija: " + result);
//     } else {
//         console.log("Wrong value.");
//     }
// }

// swapCase("Hey me is here to help");

// String 11
// function checkNumberType(inputStr) {
//     if (typeof inputStr === 'string' && inputStr.length > 0) {    
//         const number = Number(inputStr);
//         if (!isNaN(number)) {   
//             if (inputStr.includes('.')) {
//                 console.log(2); 
//             } else {
//                 console.log(1);
//             }
//         } else {
//             console.log(0); 
//         }
//     } else {
//         console.log("Wrong value.");
//     }
// }

// checkNumberType("3");   
// checkNumberType("8.74");  
// checkNumberType("hello me");  

// String 12
// function getInverseNumber(n) {
//     if (Number.isInteger(n)) {
//         let inverseNumber = 0;
//         let originalNumber = n;
//         while (originalNumber > 0) {
//             let lastDigit = originalNumber % 10;
//             inverseNumber = inverseNumber * 10 + lastDigit;
//             originalNumber = Math.floor(originalNumber / 10);
//         }
//         return inverseNumber;
//     } else {
//         console.log("Wrong value. N soni butun son bo'lishi kerak.");
//         return null;
//     }
// }

// let result = getInverseNumber(987654321);
// console.log(result);

// String 13
// function evaluateExpression(expression) {
//     if (typeof expression === 'string' && expression.length > 0) {
//         let currentNumber = 0;
//         let result = 0;
//         let currentOperator = 1;

//         for (let i = 0; i < expression.length; i++) {
//             const char = expression[i];
//             if (char === '+' || char === '-') {
//                 result += currentOperator * currentNumber;     
//                 currentNumber = 0;
//                 currentOperator = (char === '+') ? 1 : -1;
//             } else if (!isNaN(char)) {

//                 currentNumber = currentNumber * 10 + parseInt(char, 10);
//             } else {
//                 console.log("Wrong value! + or - is required to have");
//                 return null;
//             }
//         }
//         result += currentOperator * currentNumber;

//         return result;
//     } else {
//         console.log("Wrong value! ");
//         return null;
//     }
// }

// let result = evaluateExpression("7+3-2");
// console.log(result); 

// String 14
// function concatenateStrings(N1, N2, S1, S2) {
//     if (Number.isInteger(N1) && Number.isInteger(N2) && typeof S1 === 'string' && typeof S2 === 'string') {

//         let result = S1.slice(0, N1);

//         result += S2.slice(-N2);

//         console.log("Yangi satr: " + result);
//         return result;
//     } else {
//         console.log("Wrong value. ");
//         return null;
//     }
// }

// concatenateStrings(3, 2, "abc", "defgh"); 

// String 15
// function duplicateCharacter(c, s) {
//     if (typeof c === 'string' && c.length === 1 && typeof s === 'string') {
//         let result = "";
//         for (const char of s) {
//             if (char === c) {
//                 result += c + c;
//             } else {
//                 result += char;
//             }
//         }
//         console.log("Natija: " + result);
//         return result;
//     } else {
//         console.log("Wrong value. ");
//         return null;
//     }
// }

// duplicateCharacter('o', "hello uzbkeistan"); 

// String 16
// function insertSubstringBeforeCharacter(c, s1, s2) {
//     if (typeof c === 'string' && c.length === 1 && typeof s1 === 'string' && typeof s2 === 'string') {
//         let result = "";
//         for (const char of s1) {
//             if (char === c) {
//                 result += s2;
//             }
//             result += char;
//         }
//         console.log("Natija: " + result);
//         return result;
//     } else {
//         console.log("Wrong value. ");
//         return null;
//     }
// }

// insertSubstringBeforeCharacter('me', "Hi  there", "0604"); 

// String 17
// function countOccurrences(s1, s2) {
//     if (typeof s1 === 'string' && typeof s2 === 'string') {
//         let count = 0;
//         let index = -1;

//         while ((index = s1.indexOf(s2, index + 1)) !== -1) {
//             count++;
//         }

//         console.log("S2 satri S1 satrida " + count + " marta takrorlangan.");
//         return count;
//     } else {
//         console.log("Wrong value. ;
//     }
// }

// countOccurrences("Great to have", "m"); 

// String 18
// function removeFirstOccurrence(s1, s2) {
//     if (typeof s1 === 'string' && typeof s2 === 'string') {
//         const index = s1.indexOf(s2);

//         if (index !== -1) {
//             const result = s1.slice(0, index) + s1.slice(index + s2.length);
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("Occurance is happendd");
//             return s1;
//         }
//     } else {
//         console.log("Wrong value.");
//         return null;
//     }
// }


// removeFirstOccurrence("Hereare", "me"); 
// removeFirstOccurrence("Ley", "ov"); 

// String 19
// function removeAllOccurrences(s1, s2) {
//     if (typeof s1 === 'string' && typeof s2 === 'string') {
//         let result = s1;

//         while (result.includes(s2)) {
//             // S2 satrini o'chirib tashlash
//             result = result.replace(s2, '');
//         }

//         if (result !== s1) {
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("S2 satri S1 satrida uchmadi. S1 satr o'zgarishsiz qoldirildi.");
//             return s1;
//         }
//     } else {
//         console.log("Wrong value. ");
//         return null;
//     }
// }

// // Test
// removeAllOccurrences("Me", "Hello there"); 
// removeAllOccurrences("how are you", "man"); 

// String 20
// function replaceFirstOccurrence(s1, s2, s3) {
//     if (typeof s1 === 'string' && typeof s2 === 'string' && typeof s3 === 'string') {
//         const index = s1.indexOf(s2);

//         if (index !== -1) {
//             const result = s1.slice(0, index) + s3 + s1.slice(index + s2.length);
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("S2 satri S1 satrida uchmadi. S1 satr o'zgarishsiz qoldirildi.");
//             return s1;
//         }
//     } else {
//         console.log("Wrong value.");
//         return null;
//     }
// }

// replaceFirstOccurrence("hello", "There", "you");
// replaceFirstOccurrence("me is me", "ov", "you");

// String 21
// function replaceLastOccurrence(s1, s2, s3) {
//     if (typeof s1 === 'string' && typeof s2 === 'string' && typeof s3 === 'string') {
//         const index = s1.lastIndexOf(s2);

//         if (index !== -1) {
//             const result = s1.slice(0, index) + s3 + s1.slice(index + s2.length);
//             console.log("Natija: " + result);
//             return result;
//         } else {
//             console.log("S2 satri S1 satrida oxirida uchmadi. S1 satr o'zgarishsiz qoldirildi.");
//             return s1;
//         }
//     } else {
//         console.log("Wrong value. ");
//         return null;
//     }
// }

// replaceLastOccurrence("hello", "There", "you"); 
// replaceLastOccurrence("me is me", "ov", "you"); 

// String 22
// function findSameInitialAndFinalWords(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');

//         if (words.length > 1) {
//             const firstWord = words[0].toLowerCase();
//             const lastWord = words[words.length - 1].toLowerCase();

//             if (firstWord.charAt(0) === lastWord.charAt(0) && firstWord.slice(-1) === lastWord.slice(-1)) {
//                 console.log("Boshlanadigan va tugovchi so'zlar bir xil harflar bilan boshlanadi va tugaydi.");
//                 return true;
//             } else {
//                 console.log("Boshlanadigan va tugovchi so'zlar bir xil harflar bilan boshlanmaydi va tugaydi.");
//                 return false;
//             }
//         } else {
//             console.log("mIn 2 words should be inserted");
//             return false;
//         }
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// findSameInitialAndFinalWords("Salom hello");
// findSameInitialAndFinalWords("me"); 
// findSameInitialAndFinalWords("How good");        

// String23
// function findWordsWithTwoAs(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');
//         let count = 0;

//         for (const word of words) {
//             const uppercaseWord = word.toUpperCase();
//             const aCount = (uppercaseWord.match(/A/g) || []).length;

//             if (aCount === 2) {
//                 console.log("2 ta 'A' harfi bor so'z: " + word);
//                 count++;
//             }
//         }

//         if (count === 0) {
//             console.log("Satrda 2 ta 'A' harfi bor so'z yoq");
//         }

//         return count;
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// findWordsWithTwoAs("mercedes olaylik");  

// String 24
// function getMaxWordOfString(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');

//         let maxLength = 0;
//         let maxWord = "";

//         for (const word of words) {
//             if (word.length > maxLength) {
//                 maxLength = word.length;
//                 maxWord = word;
//             }
//         }

//         if (maxLength > 0) {
//             console.log("Eng uzun so'z: " + maxWord);
//             return maxWord;
//         } else {
//             console.log("Satrda so'z yoq");
//             return null;
//         }
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// getMaxWordOfString("mercedes eng yaxshi moshina");      

// String 25
// function printWordsWithDot(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');

//         if (words.length > 0) {
//             const result = words.join('.');
//             console.log(result);
//             return result;
//         } else {
//             console.log("No result");
//             return null;
//         }
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// printWordsWithDot(`mercedes yaxshi moshina`);         

// String 26
// function capitalizeFirstLetter(str) {
//     if (typeof str === 'string') {
//         const words = str.split(' ');

//         const result = words.map(word => {
//             if (word.length > 0) {
//                 return word.charAt(0).toUpperCase() + word.slice(1);
//             } else {
//                 return word;
//             }
//         }).join(' ');

//         console.log(result);
//         return result;
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// capitalizeFirstLetter(`mercedes yaxshi moshina`); 

// String 27
// function countPunctuationMarks(str) {
//     const marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];

//     if (typeof str === 'string') {
//         let count = 0;

//         for (const char of str) {
//             if (marks.includes(char)) {
//                 count++;
//             }
//         }

//         console.log("belgilar soni: " + count);
//         return count;
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// countPunctuationMarks(`bog'dagi mevalar, nok, anor, nok`); 
// countPunctuationMarks("Bu satrda tinish belgisi yo'q."); 

// String 28
// function getFileName(filePath) {
//     if (typeof filePath === 'string') {
//         const pathArray = filePath.split('/');
//         const fileNameWithExtension = pathArray[pathArray.length - 1];
//         const fileNameArray = fileNameWithExtension.split('.');

//         if (fileNameArray.length > 1) {
//             const fileName = fileNameArray.slice(0, -1).join('.');
//             console.log("Faylning nomi: " + fileName);
//             return fileName;
//         } else {
//             console.log("no accroding value");
//             return null;
//         }
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// getFileName("D:/Qudrat_c++/books/My_book.exe");
// getFileName("C:/Users/username/Documents/example.txt");

// String 29
// function getFileExtension(filePath) {
//     if (typeof filePath === 'string') {
//         const pathArray = filePath.split('/');
//         const fileNameWithExtension = pathArray[pathArray.length - 1];
//         const fileNameArray = fileNameWithExtension.split('.');

//         if (fileNameArray.length > 1) {
//             const fileExtension = fileNameArray[fileNameArray.length - 1];
//             console.log("kengaytma: " + fileExtension);
//             return fileExtension;
//         } else {
//             console.log("Kengaytma yoq");
//             return null;
//         }
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// getFileExtension("D:/Qudrat_c++/books/My_book.exe");
// getFileExtension("C:/Users/username/Documents/example.txt");

// String 30
// function getLastFolderName(filePath) {
//     if (typeof filePath === 'string') {
//         const pathArray = filePath.split('/');
//         const lastFolderName = pathArray[pathArray.length - 2] || "/"; // Agar papka tub bo'lsa "/" belgisini chiqaradi
//         console.log("Oxirgi papka nomi: " + lastFolderName);
//         return lastFolderName;
//     } else {
//         console.log("Wrong value. check again");
//         return null;
//     }
// }

// getLastFolderName("D:/Qudrat_c++/books/My_book.exe");
// getLastFolderName("/root/directory/file.txt");





























