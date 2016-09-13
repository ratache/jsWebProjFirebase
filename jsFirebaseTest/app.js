(function(){
		  // Initialize Firebase
		  const config = {
			apiKey: "AIzaSyBpO-1bKJSeuzMrVT3hF_Dc_b9N2HFule8",
			authDomain: "jsfirebasetest.firebaseapp.com",
			databaseURL: "https://jsfirebasetest.firebaseio.com",
			storageBucket: "jsfirebasetest.appspot.com",
		  };
		  firebase.initializeApp(config);
		  
		  //Get Elements
		  const txtEmail = document.getElementById('txtEmail');
		  const txtPassword = document.getElementById('txtPassword');
		  const btnLogin = document.getElementById('btnLogin');
		  const btnSignUp = document.getElementById('btnSignUp');
		  const btnLogOut = document.getElementById('btnLogOut');
		  
		  //Add login event
		  btnLogin.addEventListener('click', e=> {
			//Get email and pass
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();
			//Sign in
			const promise = auth.signInWithEmailAndPassword(email, pass);
			promise.catch(e => console.log(e.message));
		  });
		  
		  btnSignUp.addEventListener('click', e=>{
			//Get email and pass
			//Todo CHECK FOR REAL EMAIL
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();
			//Sign in
			const promise = auth.createUserWithEmailAndPassword(email, pass);
			promise.catch(e => console.log(e.message));
		  });
		  
		  btnLogOut.addEventListener('click', e=>{
			firebase.auth().signOut();
		  });
		  
		  //Add a realtime listener
		  firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser)
			{
				console.log(firebaseUser);
				btnLogOut.classList.remove('hide');
			}else{
				console.log('not logged in');
				btnLogOut.classList.add('hide');
			}
		  });
}());

