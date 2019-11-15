require('dotenv').config()
const router = require('express').Router();
const moment = require('moment')
const Firebaseconfig = require('../Firebaseconfig')


/* Connects Backend to firebase database */
const admin = require('./Firebase-admin')
/* ****** All Endpoints Begin With /api  ********* */



/*  User Registration  
  
  ***********************************Requires****************************** 
        email:string ;
        emailVerified:bool ;
       phoneNumber:[+][country code][areacode and phone number] example '+12065551212' or null;
       password:string ;
       displayName:string example 'John Smith' 
       imageURL:string or null
   *************************************************************************
*********************************Returns a userObj************************** */

/* If a post to endpoint /api/register is called */
router.post('/register',(req,res) =>{
  let user = req.body
  
 /* It fires a function that makes a call to the firebase auth database */ 
  admin.auth().createUser({
    email:user.email,
    emailVerified:false,
    phoneNumber:user.phoneNumber,
    password:user.password,
    displayName:user.displayName,
    imageURL:user.imageURL,
    disabled:false
  })

  /* It waits for the database call to finish if sucessful it then returns the userObj to the client */
  .then(userObj =>{
    res.status(201)
    .json({message:`Sucessfully created new users: ${userObj.displayName} @ ${moment().format('LLL')}`,
                             userObj:userObj})

  })

  /* If unsucessful it returns an error message to the client */
  
  .catch(error =>{
     res.status(401).json({message:`Error creating new user:${error}`})
  })
})


/* ************************** Update User ************************

          IF a Put request is  made to /api/:uid/update */
  
router.put('/:uid/updateuser',(req,res) =>{
 let uid = req.params.uid
 


 /* It fires a function that makes a call to the auth database */

admin.auth().updateUser(uid,{
  email: req.body.email,
  phoneNumber: req.body.phoneNumber,
  emailVerified: req.body.emailVerified,
  password: req.body.password,
  displayName: req.body.displayName,
  photoURL: req.body.photoURL,
  disabled: req.body.disabled
})

/* It waits for the database call to finish if sucessful it then returns the updatedUserObj to the client */

.then(updatedUserObj =>{
 res.status(200)
 .json({message:`Sucessfully updated user @ ${moment().format('LLL')}`
 ,updatedUserObj:updatedUserObj})
})

 /* If unsucessful it returns an error message to the client */

.catch(error =>{
   res.status(401)
   .json({message:'Error updating user',error:error})
})

})


/* ***************************** Login *****************************************
         
                If a post request is made to /api/login */
 
router.post('/login', (req, res) => {
    let { email, password } = req.body;

    // 1st it checks to  make sure email and password are entered
   
    if(!email || !password){

      /* IF email or password are missing it sends error message back to client */
   
    res.status(403).json(
          {message:'Please enter login information'}
          ) 
    }


    /* If email and password are present 
       it makes a call to firebase auth database to verfiy 
       the login info */

    Firebaseconfig.auth()
    .signInWithEmailAndPassword(email,password)

    /* IF verfied it returns a userObj to the client */
    
    .then(userObj =>{
    
    
  
        res.status(200)
        .json(
            {
              message:`${userObj.user.email} signed in @ ${moment().format('LLL')}`,
              accessToken:userObj.user.b.b,
              refreshToken:userObj.user.refreshToken,
              uid:userObj.user.uid
            }
              )
  
  })
  /* If not verfied it returns an error message to the client */
  .catch(error =>
    {
      res.status(404)
      .json(
        {
          message:error.message
        })
    })
})
// Auth event change listner



module.exports = router;