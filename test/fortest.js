// code already tested these are just for notes
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}
//output
// I love Carrots
// I love Peas
// I love Lettuce
// I love Tomatoes

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

// Output
// I am 0
// I am 1
// I am 2
// I am 3
// I am 4

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
listLoop(friends)
// Output
// Sarah
// Greg
// Cindy
// Jeff
