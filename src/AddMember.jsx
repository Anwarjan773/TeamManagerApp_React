// AddMember.js
import { useState } from "react";

function AddMember(props) {
  // 1. LOCAL STATE: This component owns the form input state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  // 2. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!name || !role) return; // Basic validation

    // 3. CALL THE FUNCTION PROP: Send the new member data UP to the parent
    props.onAddMember({ name, role });

    // 4. Reset the local form state
    setName("");
    setRole("");
  };

  return (
    <div>
      <h2>Add a New Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            padding: "4px",
            fontSize: "18px",
            marginRight: "5px",
          }}
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Updates local state
        />
        <input
          style={{
            padding: "4px",
            fontSize: "18px",
            marginRight: "5px",
          }}
          type="text"
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)} // Updates local state
        />
        <button
          style={{
            padding: "4px",
            fontSize: "18px",
            marginRight: "5px",
            backgroundColor: "lightGray",
            outline: "none",
            cursor: "pointer",
          }}
          type="submit"
        >
          Add Member
        </button>
      </form>
    </div>
  );
}

export default AddMember;
