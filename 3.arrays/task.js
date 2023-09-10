function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])
    console.log(result)
      return result
  }
compareArrays([8, 9], [6]) // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]) // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]) // true
//
function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, item, index, arr) => {
        acc += item
         if (index === arr.length - 1) {
             return acc / arr.length;
         }
           return acc;
       }, 0)
       return result;
}

console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0