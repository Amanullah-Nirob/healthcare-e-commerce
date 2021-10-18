import initializeAuthintication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword ,updateProfile ,signOut ,createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthintication()

const UseFirebase = () => {
const auth = getAuth();
const [user,setUser]=useState({})
const [error,setError]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [name,setName]=useState('')
const [isLoged,setIsLoged]=useState(false)

const [isLoadding,setIsLoading]=useState(true)


// emailfunction
const emailfunction=(event)=>{
    setEmail(event.target.value);
}

// passwordFunction
const passwordFunction=(event)=>{
    setPassword(event.target.value);
}



// formSubmitFunction
const formSubmitFunction=(event)=>{
    event.preventDefault()
    isLoged?loginwithEmailPasswordFunction(email,password):
    registationFunction(email,password)
    updateNameFunction()
    setUser(user)
   
}





const loginwithEmailPasswordFunction=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
}


// registation function
const registationFunction=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
     
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
    setError('')
}



//  updateNameFunction
const updateName=(e)=>{
 setName(e.target.value);
}

const updateNameFunction=()=>{
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
      setError('')
}

const checkBoxFunction=(event)=>{
  setIsLoged(event.target.checked);
}


// googleLoginFunction
const googleLoginFunction=()=>{
    setIsLoading(true)
    const googleprovider = new GoogleAuthProvider();
  return  signInWithPopup(auth, googleprovider)

  .catch((error) => {
    const errorMessage = error.message;
     setError(errorMessage)
  })
  
  .finally(()=>{
    setIsLoading(false)
  });


}
// logOutFunction
const logOutFunction=()=>{
    setIsLoading(true)
    signOut(auth).then(() => {
        setUser({})
    })
    .finally(()=>{
        setIsLoading(false)
    })
}


useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false)
      });
      return unsubscribe
},[])


return{
    googleLoginFunction,
    formSubmitFunction,
    user,
    logOutFunction,
    error,
    emailfunction,
    passwordFunction,
    updateName,
    checkBoxFunction,
    isLoged,
    isLoadding

}




};

export default UseFirebase;