// Exclude backreferences

const room = {
  number: 23,
};

const meetup = {
  title: 'Conference',
  occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(JSON.stringify(meetup, (key, value) => ((key !== '' && value === meetup) ? undefined : value)));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
