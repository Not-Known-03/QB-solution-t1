// todo Write a function 'FirstAndLast' that takes in an array, and returns an object
// todo with:
// todo 1) the first element of the array as the object's key, and
// todo 2) the last element of the array as that key's value.
// todo (Example input: ['ABC', 'DEF', 'Employee', 'Manager']
// todo output: ABC : 'Manager')

function FirstAndLast(array)
{
    out={}
    out[array[0]]=array[array.length-1]
    return out
}
console.log(FirstAndLast(['ABC', 'DEF', 'Employee', 'Manager']))
