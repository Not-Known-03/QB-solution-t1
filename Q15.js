// todo Write a JSON script by entering user detail of three different person having same age group in string format method. Print the following result in object (1) User Details (2) Name of 2nd person and his/her age.

var userdetails = `{
	"person1": { "name": "Khushil", "age": "18" },
	"person2": { "name": "shagun", "age": "12" },
	"person3": { "name": "shivani", "age": "81" }
}`;
userdetails=JSON.parse(userdetails)
console.log(userdetails);
console.log(userdetails.person2);
