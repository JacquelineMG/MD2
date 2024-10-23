// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"],
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"],
    pet: "Charlie the Cat"
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"],
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"],
  }
];

/* construct a function that takes in:
  - contact data array
  - name of contact
  - specific field/property of friend we want back

  The function will take these parameters and return the name and specified field of the first friend listed in the contact's friends list.
  If the contact requested or if the field requested is not found, function returns "Not found"
  e.g. findFriend(contacts, "Abbott", "phone") === { name: "Costello", phone: "767 676 7676" }
*/


const findFriend = (data, contact, property) => {
  let friend = "";
  let info = "";

  for (const d of data) {
    if (d.name === contact) {
      friend = d.friends[0];
    }
  }
  for (const d of data) {
    if (d.name === friend) {
      info = d[property];
    }
  }
  if (!friend || !info) return "Not found";

  return { name: friend, [`${property}`]: info };
};

// TEST CASES:
console.log(findFriend(contacts, "Abbott", "phone"));
console.log(findFriend(contacts, "Buster", "email"));
console.log(findFriend(contacts, "Bob", "phone"));
console.log(findFriend(contacts, "Costello", "birthday"));
console.log(findFriend(contacts, "Laurel", "pet"));
