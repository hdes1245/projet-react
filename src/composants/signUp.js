import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../styles/signUp.css'

const SignUp = () =>{
const [nom, setNom] = useState('');
const [prenom, setPrenom] = useState('');
const [email, setEmail] = useState('');
const [mot_de_passe, setmot_de_passe] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      nom,
      prenom,
      email,
      mot_de_passe,
    };

    try {
      const response = await axios.post('http://localhost:5000/data', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  };

    return(

    <div>

    
    <form onSubmit={handleSubmit}>
      
      <label>
        Nom:
        <input className= "input" type="text" value={nom} onChange={(e) => setNom(e.target.value)} required/>
      </label>

      <br />

      <label>
        Prénom:
        <input className="input" type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required/>
      </label>

      <br />

      <label>
        Email:
        <input className= "input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </label>

      <br />

      <label 
        htmlFor="password">Mot de passe :
        <input type="password" id="password" name="mot_de_passe" value={mot_de_passe} onChange={(e) => setmot_de_passe(e.target.value)} required />
      </label>

      <br/>
      <button type="submit">Enregistrer</button>
      <br/>
      <div>
    Vous avez déjà un compte?<Link to="/SignIn"> Connexion</Link>
    </div>
    </form>

    <br/>



    
    
    </div>
    )
} 


export default SignUp;