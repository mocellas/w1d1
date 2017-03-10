/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

function joinList(list) {
  var toReturn = "";
  if (list.length < 1) {
    return "";
  } else if (list.length == 1) {
    return list[0];
  } else {
    for (var i = 0; i < list.length; i++) {
      toReturn += list[i]
      if (i < list.length - 1) {
        toReturn += ", "
      }
    }
    return toReturn;
  }
}

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
 // a custom function written by you (you must define it too!)

joinList(conceptList);
// Write your code here...
// for (var i=0; i > conceptList.length; ++i);
// {
//   console.log("Value at index" [' + i + '] "is:" [conceptList[i] + ]);
// }



