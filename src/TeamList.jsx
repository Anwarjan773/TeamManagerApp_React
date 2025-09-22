// TeamList.js
function TeamList(props) {
  // Destructure the 'members' prop coming from the parent
  const { members } = props;

  return (
    <div>
      <h2>Current Team:</h2>
      <ul style={{ fontSize: "20px" }}>
        {members.map((member) => (
          <li key={member.id}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
