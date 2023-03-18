// You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

// You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

// There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

// Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

// Return the minimum number of minutes needed to pick up all the garbage.

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let lastG = -1,
    lastP = -1,
    lastM = -1;
  let garbageSum = 0,
    travelSum = 0;

  for (let [i, house] of garbage.entries()) {
    if (house.includes("G")) lastG = i;
    if (house.includes("P")) lastP = i;
    if (house.includes("M")) lastM = i;
    garbageSum += house.length;
  }

  for (let [i, house] of garbage.entries()) {
    if (lastG >= i) travelSum += travel[i - 1] ? travel[i - 1] : 0;
    if (lastP >= i) travelSum += travel[i - 1] ? travel[i - 1] : 0;
    if (lastM >= i) travelSum += travel[i - 1] ? travel[i - 1] : 0;
  }

  return travelSum + garbageSum;
};