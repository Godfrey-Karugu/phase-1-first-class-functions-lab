// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function( arr){
 return [arr[0],arr[1]];
}

const  returnLastTwoDrivers = function(arr){
  return [arr[arr.length-2], arr[arr.length-1]];

}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){

  return function (fare){ fare * num;
  }
}



let ans = createFareMultiplier(2);

function fareDoubler(fare){
  let ans = createFareMultiplier(2);
}

let tripleFare = createFareMultiplier(3)

function fareTripler(){

}


function selectDifferentDrivers(arr=drivers,aFuction){

  

}