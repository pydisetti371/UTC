import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    console.log("submitttt")
    event.preventDefault();

    onUserAdd({ name, email });
    setName('');
    setEmail('');
    
  };
 console.log(name,email,"----")
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input value={name} id="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input value={email} id='email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
