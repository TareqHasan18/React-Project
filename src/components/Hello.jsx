function Hello({ person }) {
  //destructring props or just destructuring
  //const { name, message } = props; doesn't require anymore after declaring as param
  return (
    <h1>
      {person.message} {person.emoji} {person.name} {person.seatNumbers}
    </h1>
  );
}
export default Hello;
