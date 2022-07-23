//filter function
const filterOdds = (...args) => {args.filter(eo => {eo % 2 === 0} )}
// find the minimum of an array
const findMin = (...args) => {Math.min(...args)}
//merge arguments 1 and 2
const mergeObjects = ( in1 , in2) => ({...in1,...in2})
//double and return args
const double = (arr,...args) => [...arr, ...args.map(eo => {eo *2})]
// slice and dice functions on sNd.js