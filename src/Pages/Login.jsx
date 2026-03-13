import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    const [nom, setNom] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const seConnecter = () => {
        if (nom.trim() !== "" && password.trim() !== "") {
            navigate("/home")
        } else {
            alert("Veuillez remplir tous les champs")
        }
    };

    return <div className="min-h-screen flex flex-col flex-wrap gap-10 items-center justify-center">
    <h1 className="font-bold text-4xl">Bienvenue dans eCommerce</h1>
    <div className="flex flex-col flex-wrap w-96 bg-gray-50 p-5 border-gray-500 border-2 rounded-3xl">
        <h1 className="text-center font-bold">Connexion</h1>
        <label htmlFor="nom">Nom</label>
        <input 
         type="text"
         id="nom"
         value={nom}
         onChange={(e) => setNom(e.target.value)} 
         className="text-center w-full mb-10 border-gray-300 border-2 rounded-3xl"
         />
        <label htmlFor="password">Mot de passe</label>
        <input 
         type="password" 
         id="password"
         className="text-center w-full mb-10 border-gray-300 border-2 rounded-3xl"
         value={password}
         onChange={(e) => setPassword(e.target.value)}/>
        <button className="bg-light pl-5 pr-5 pb-1 self-center font-bold border-gray-300 border-2 rounded-3xl hover:bg-dark" 
         onClick={seConnecter}>Connexion</button>
    </div>
    </div>
}
export default Login