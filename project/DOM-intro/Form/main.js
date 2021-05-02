const submitClicked=function()
{
  let getName=document.getElementById("nameText").value;
  let desiredSalary=document.getElementById("desiredSalary").value;
  let birthdayText=document.getElementById("birthdayText").value;
  let phoneText=document.getElementById("phoneText").value;
  const textToShow=document.getElementById("textToShow")
  
if(getName.length<=2){
  textToShow.style.color="#6F1E51"
  textToShow.innerHTML="Name must be longer than 2 characters"
  textToShow.style.fontWeight = "900";
  
}
 if(parseInt(desiredSalary)<=10000 || parseInt(desiredSalary)>=16000 ){
  textToShow.style.color="#6F1E51"
  textToShow.innerHTML="Salary must be greater than 10,000 but less than 16,000"
  textToShow.style.fontWeight = "900";
 }
if(birthdayText==""){
  textToShow.style.color="#6F1E51"
  textToShow.innerHTML="Birthday may not be null"
  textToShow.style.fontWeight = "900";
}
if(phoneText.length!=10)
{
  textToShow.style.color="#6F1E51"
  textToShow.innerHTML="Phone must be 10 digits long"
  textToShow.style.fontWeight = "900";
}
else{
  //=======================Form Extension=======================
  document.getElementsByClassName("container")[0].style.display="none"
  document.body.innerHTML="Welcome " + getName +" ..."
//========================================================================

}

}