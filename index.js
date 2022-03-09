
let daysWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

let namesMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yao','Kofi','Kwame']

let namesFemale = ['Akosua','Adwoa','Abena','Akua','Yaa','Afua','Amma']



// communicating with the form

let form = document.getElementById('btn');


form.addEventListener ('click', function(event){

    event.preventDefault();

    blaise()

});


function blaise(){

    if (dob.value == ""){
        alert ('Please Enter Date of Birth');
        return false;
    }

    let odhisBaba = document.getElementById('dob').value;

    let dateOfbirth = new Date (odhisBaba);
     let day  = dateOfbirth.getDay();

var jw = document.getElementById ('result');

     var gender = document.getElementsByName('gender');

     for (let i of gender){
         if (i.value === "Male"){
             jw.innerText = (`Your Akan Name is  ${namesMale[day]}`);
           } else{
             jw.innerText=(`Your Akan Name is  ${namesFemale[day]}`);
         };
     };


    

  

};
