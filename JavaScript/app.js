

const texts =['Welcome, scroll down...','git commit -a...', 'Compiling....','Squashing bugs...','Caclulating...', 'Coding...'];
let count = 0;
let index =0;
let currentText = '';
let letter = '';

(function type() {

  if(count === texts.length){
    count =0;
  }
  currentText = texts[count];
  letter = currentText.slice(0,++index);
  
  document.querySelector('.typing').textContent = letter;
  if(letter.length == currentText.length){
    count++;
    index=0;
  }
  setTimeout(type,400);

})();



const mobileBtn = document.getElementById('mobile-cta')
      nav = document.querySelector('nav')
      mobileBtnExit = document.getElementById('mobile-exit');

      mobileBtn.addEventListener('click', ()=> {
        nav.classList.add("menu-btn");
      })
      mobileBtnExit.addEventListener('click', ()=> {
        nav.classList.remove("menu-btn");
      })






  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAOxk1wYmg82KvV1qBJ4VvSkX02E_D7O3E",
    authDomain: "personal-contact-form-49974.firebaseapp.com",
    projectId: "personal-contact-form-49974",
    storageBucket: "personal-contact-form-49974.appspot.com",
    messagingSenderId: "625739193190",
    appId: "1:625739193190:web:a6a6f3e3a01abf506686a7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //referance contactinfor collections
  let contactInfo = firebase.database().ref("infos");


      //listen for submit
      document.querySelector(".contact-form").addEventListener("submit",
      submitForm);

      function submitForm(e){
        e.preventDefault();
        //get input values
        let name = document.querySelector(".name").value;
        let email = document.querySelector(".email").value;
        let message = document.querySelector(".message").value;
        

        saveContactInfo(name, email, message);

        document.querySelector(".contact-form").reset();


        sendEmail(name,email,message);
      }

      //save info firebase
      function saveContactInfo(name,email,message){
        let newContactInfo = contactInfo.push();

        newContactInfo.set({

          name: name,
          email: email,
          message: message,
        });

        retriveInfos();
      }

      //retrieve infos
      function retriveInfos(){
        let ref = firebase.database().ref("infos");
         ref.on("value", gotData);
      }
      

      function gotData(data){
        let info = data.val();
        let keys = Object.keys(info);

        for(let i = 0; i < keys.length; i++){
          let infoData = keys[i];
          let name = info[infoData].name;
          let email = info[infoData].email;
          let message = info[infoData].message;
          console.log(name, email, message);
        }
      }

      //send email info 
      function sendEmail(name,email, message){
        Email.send({
          Host: "smtp.gmail.com",
          Username: 'pipproductions91@gmail.com',
          Password : "hfjtpiesqkwtcfby",
          To: 'allenbradley91@hotmail.com',
          From: 'pipproductions91@gmail.com',
          Subject: `${name} sent you a message`,
          Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

        }).then((message) => alert("Mail sent successfully"))
      }

      
     



  


        
  