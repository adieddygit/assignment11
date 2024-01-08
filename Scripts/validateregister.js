try{
    function validateregister(){
      let firstname = document.forms.register.firstname.value;

      if(!firstname){
        document.getElementById('firstnameErr').innerHTML = "Firstname is required!";
        document.forms.register.firstname.focus();
        return false;
      }
      else{
        document.getElementById('firstnameErr').innerHTML = "";
      }
    }
}
catch(err){
  window.alert(err.message);
}