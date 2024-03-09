const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const phone = document.getElementById('phone');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
const sendData =(sRate, count) =>{

    if(sRate === count){
        alert("registration sucess");
        swal("Good job!" + username, "Your Registration Sucessfull ", "success");
        location.assign("https://www.facebook.com/");

        
    }
}

const sucessMsg= () =>{
    let formCon = document.getElementsByClassName('form-control');
    var count =formCon.length-1;
    for(var i=0; i < form.length;i++){
        if(formCon[i].className==='form-control sucess'){
            var sRate = 0 + i;
                sendData(sRate , count);
        }
        else{
            return false;
        }
    }
}

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;

    var dot = emailVal.lastindexOf('.');
    if ( atSymbol + 2 >=  dot ) return false;

    if (dot === emailVal.length - 1) return false;


        return true;
 
}



const validate = () => {


    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    }

    else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username cannot be 2 character');
    }
    else {
        setSucessMsg(username);
    }

    /////email///////////


    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    }

    // else if (!isEmail(emailVal)) {
    //     setErrorMsg(email, 'not valid email');
    // }
    else {

        setSucessMsg(email);
    }



    if (phoneVal === "") {
        setErrorMsg(phone, 'phone cannot be blank');
    }

    else if(phoneVal==="0000000000"){
        setErrorMsg(phone, 'Please enter valid number');
       }

   else if(phoneVal.length===10 ) {
       setSucessMsg(phone);
   }

  

else{
    setErrorMsg(phone, 'Wrong Format Re-enter!');
}
    

if (passwordVal === "") {
    setErrorMsg(password, 'password cannot be blank');
}

else if(passwordVal.length<=6) {
    setErrorMsg(password, 'password atleast 6 digits long');
}

else if(!passwordVal.includes('@')){
    setErrorMsg(password, 'password must contain @ or _');
}
else if(passwordVal.includes('1234')){
    setErrorMsg(password, 'weak password');

}
else if( passwordVal.charAt(0).toUpperCase() + passwordVal.slice(1) != passwordVal){
    setErrorMsg(password, 'Password starts with upper-case');
}
else if(! passwordVal.match(/[0-9]+/)){
    setErrorMsg(password, 'Password must contains number');
}

else{
    setSucessMsg(password);
}

//-------confirm password---//

if (cpasswordVal === "") {
    setErrorMsg(cpassword, 'password cannot be blank');
}

else if(passwordVal===cpasswordVal){
    setSucessMsg(cpassword);
}
else{
    setErrorMsg(cpassword,'Wrong input! please re-enter');
    alert("Re-enter Confirm Password");
}

sucessMsg();


}




function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;


}

function setSucessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control sucess";
}