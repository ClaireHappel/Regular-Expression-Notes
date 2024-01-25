
// Breaking Down Regular Expressions: Negative Lookahead and Negative Lookbehind

//     ',1,,,two,3,,' is our input string- all characters such as ',' also count as characters, and can be reached with regEX
//       |
//       |          .replace() is a method that takes 2 parameters, one is a pattern that it will check for within the string, the other is a replacement that will take the place of the pattern
//       |           |   the syntax for the method is as follows: .replace(pattern, replacement)
//       |           |
//       |           |      /(?![^,])(?<![^,])/g is indicating the specified patterns to check for and where to check for them
//       |           |       |
//       |           |       |                    NA is indicating the specified replacement
//       |           |       |                     |
//   ____|_______  __|____  _|_________________  __|_
',1,,,two,3,,'.replace(/(?![^,])(?<![^,])/g, 'NA')  // => 'NA,1,NA,NA,two,3,NA,NA' (this is the string that will be the output)


//   We can further break down this chunk of regEx to make it make more sense:

//   the first forward slash '/' indicates the start of an expression
//    |                                                                 ?! is a negative lookahead, which is looking for a character not followed by a specified value
//    |                                                                   |   ex: q(?!u) would look for q's that were not followed by u's
//    |                                                                   |
//    |                                                                   |   [^,] is a negated set because of the '^' , looking for any character besides ','
//    |                                                                  _|_  _|_
//    |   (?![^,]) is the first group. to break it up further, spaces: ( ?!  [^,] )
//    |      |
//    |      |                                                                        ?<! is a negative lookbehind, which is looking for a character not preceded by specified value
//    |      |                                                                         |  ex: (?<!a)b would look for b's not preceded by a's
//    |      |                                                                         |
//    |      |                                                                         |   [^,] is a negated set because of the '^' , looking for any character besides ','
//    |      |                                                                        _|_   _|_
//    |      |       (?<![^,]) is the second group. to break it up further, spaces: ( ?<!  [^,] )
//    |      |         |
//    |      |         |
//    |      |         |      the last slash '/' indicates the end of a regular expression, 'g' is flag causing a global search- meaning you're looking at ALL instances of the pattern and not just one.
//    |      |         |       |
//   _|_  ___|___   ___|___   _|_
    (/   (?![^,])  (?<![^,])  /g)


//if you are having difficulty thinking on why the output looks the way it does- consider the following:

//input:                     ',1,,,two,3,,'
//spaces for empty strings:  '  ,1,  ,  ,two,3,  ,  '
//output:                    'NA,1,NA,NA,two,3,NA,NA'