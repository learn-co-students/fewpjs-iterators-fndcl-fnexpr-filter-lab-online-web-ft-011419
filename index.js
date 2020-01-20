// Code your solution here
function findMatching(drivers,string) {

return drivers.filter( n => {
  return n.toUpperCase() === string.toUpperCase()
} )

}
 function fuzzyMatch(drivers ,string){
   return drivers.filter( n => {
//let answer = n[0]
     return n.toLowerCase().indexOf(string.toLowerCase())  === 0
   } )

 }
function matchName (drivers, string){
  return drivers.filter ( n=> n.name=== string )
}
