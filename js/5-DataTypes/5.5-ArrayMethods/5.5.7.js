// Map to objects

function mapUser(users) {
  return users.map(item => ({
    id: item.id,
    fullName: item.name + item.surname,
  }));
}

const john = { name: 'John', surname: 'Smith', id: 1 };
const pete = { name: 'Pete', surname: 'Hunt', id: 2 };
const mary = { name: 'Mary', surname: 'Key', id: 3 };

const users = [john, pete, mary];

const mappedUsers = mapUser(users);

// eslint-disable-next-line no-restricted-syntax
for (const mapedUser of mappedUsers) {
  console.log(`Mapped = ${mapedUser.id} : ${mapedUser.fullName}`);
}
