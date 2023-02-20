
var rdcode=(id)=>{
    return document.getElementById(id);
}

var myform = rdcode('myform');
var fname= rdcode('firstname');
var lname= rdcode('lastname');
var sts= rdcode('status');
var data= rdcode('data');

var parsedString= JSON.parse(localStorage.getItem('data'));


myform.addEventListener('submit',(event)=>{

    event.preventDefault();

    if(fname.value==''){
        fname.style.border= '1px solid red';
        return;
    }
    else{
        fname.style.border= 'none';
    }


    if(lname.value==''){
        lname.style.border= '1px solid red';
        return;
    }
    else{
        lname.style.border= 'none';
    }


    if(fname.value != '' && lname != '')
    {
        var obj={};

        obj['firstname']=fname.value;
        obj['lastname']=lname.value;

        localStorage.setItem('data',JSON.stringify(obj));
        
       sts.textContent='plzz wait. form is submitting....'; 
       
       setTimeout(()=>{
        sts.textContent="Form Sucessfully Submitted !";
       },3000)
    }

})


data.textContent=`The FirstName is: ${parsedString.firstname} AND Last Name is: ${parsedString.lastname}`;





