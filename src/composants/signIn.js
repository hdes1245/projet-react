import '../styles/form.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const SignIn = () =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, mot_de_passe: password });
      console.log(response.data); // 'HomePage' or 'utilisateur introuvable'
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Adresse e-mail :</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        id="password"
        name="mot_de_passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Se connecter</button><br/>
      Pas encore de compte?<Link to="/SignUp">  S'enregistrer</Link>
    </form>

    
    </div>
    
    
  );
} 


export default SignIn;