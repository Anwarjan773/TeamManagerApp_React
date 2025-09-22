// App.js
import { useState } from "react";
import TeamList from "./TeamList";
import AddMember from "./AddMember";

function App() {
  // I take a parent state which store data
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Anwar Jan", role: "Developer" },
    { id: 2, name: "Israr Khan", role: "Designer" },
  ]);
  // This function shows how to update the state
  const addNewMember = (newMember) => {
    // Create a new member object with a unique ID
    const memberWithId = { ...newMember, id: Math.random().toString() };
    // Update the state by adding the new member to the existing array
    setTeamMembers([...teamMembers, memberWithId]);
  };

  // 3. PASSING PROPS: The parent passes state and functions down to children
  return (
    <div className="app">
      <h1>Team manager App</h1>
      <h2>Our Awesome Team</h2>

      <TeamList members={teamMembers} />

      <AddMember onAddMember={addNewMember} />
    </div>
  );
}

export default App;
