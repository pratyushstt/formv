var checkbox=0;
var checkScore=[0,0,0,0,0,0,0,0];
function checkFunc(){
    checkbox=(checkbox==0)?1:0;
    if(checkbox==1 && sumArr(checkScore)==8){
        document.getElementById("submitBtn").disabled=false;
    }
    else{
        document.getElementById("submitBtn").disabled=true;
    }
}

function sumArr(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum = sum + x[i];
    }
    return sum;
}

const fn = document.getElementById("inputFname");
const ln = document.getElementById("inputLname");
const em = document.getElementById("inputEmail");
const pw = document.getElementById("inputPassword");
const ad = document.getElementById("inputAddress");
const ct = document.getElementById("inputCity");
const st = document.getElementById("inputState");
const zp = document.getElementById("inputZip");

let inp;

fn.onblur=function(){
    console.log("First Name-"+fn.value);
    inp=fn.value;
    var flag=0;
    for(let i=0; i<inp.length; i++)
    if(!((inp.charAt(i)>='A' && inp.charAt(i)<='Z') || (inp.charAt(i)>='a' && inp.charAt(i)<='z') || inp.charAt(i)==' ')){
        flag=1;
        document.getElementById("msg-fn").innerHTML="Only letters accepted!";
        break;
    }
    else{
        flag=0;
    }
    
    if(inp.length<=1){
        flag=1;
        document.getElementById("msg-fn").innerHTML="This field is required";
    }
    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-fn-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-fn-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-fn").innerHTML="";
        checkScore[0]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-fn-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-fn-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[0]=0;
    }
};

ln.onblur=function(){
    console.log("Last Name-"+ln.value);
    inp=ln.value;
    var flag=0;
    for(let i=0; i<inp.length; i++)
    if(!((inp.charAt(i)>='A' && inp.charAt(i)<='Z') || (inp.charAt(i)>='a' && inp.charAt(i)<='z') || inp.charAt(i)==' ')){
        flag=1;
        document.getElementById("msg-ln").innerHTML="Only letters accepted!";
        break;
    }
    else{
        flag=0;
    }

    if(inp.length<=1){
        flag=1;
        document.getElementById("msg-ln").innerHTML="This field is required!";
    }
    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-ln-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-ln-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-ln").innerHTML="";
        checkScore[1]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-ln-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-ln-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[1]=0;
    }
};

em.onblur=function(){
    console.log("Email-"+em.value);
    inp=em.value;
    var flag=0;

    if(inp.includes('@') && inp.charAt(0)!='@'){
        if((inp.split('@')[1]).includes('.'))
        flag=0;
        else{
            flag=1;
            document.getElementById("msg-em").innerHTML="Invalid email address";
        }
    }
    else{
        flag=1;
        document.getElementById("msg-em").innerHTML="Invalid email address";
    }

    if(inp.length<=1){
        flag=1;
        document.getElementById("msg-em").innerHTML="This field is required!";
    }

    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-em-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-em-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-em").innerHTML="";
        checkScore[2]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-em-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-em-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[2]=0;
    }
};

pw.onblur=function(){
    console.log("Password-"+pw.value);
    inp=pw.value;
    var flag=0;
    
    if(inp.length<=7){
        flag=1;        
        document.getElementById("msg-pw").innerHTML="Minimum 8 characters required";
    }
    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-pw-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-pw-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-pw").innerHTML="";
        checkScore[3]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-pw-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-pw-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[3]=0;
    }
};

ad.onblur=function(){
    console.log("First Address-"+ad.value);
    inp=ad.value;
    var flag=0;
    
    if(inp.length<=1){
        flag=1;
        document.getElementById("msg-ad").innerHTML="This field is required!";
    }

    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-ad-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-ad-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-ad").innerHTML="";
        checkScore[4]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-ad-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-ad-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[4]=0;
    }
};

ct.onblur=function(){
    console.log("City-"+ct.value);
    inp=ct.value;
    var flag=0;

    for(let i=0; i<inp.length; i++)
    if(!((inp.charAt(i)>='A' && inp.charAt(i)<='Z') || (inp.charAt(i)>='a' && inp.charAt(i)<='z') || inp.charAt(i)==' ')){
        flag=1;
        document.getElementById("msg-ct").innerHTML="Only letters allowed!";
        break;
    }
    else{
        flag=0;
    }
    
    if(inp.length<=1){
        flag=1;
        document.getElementById("msg-ct").innerHTML="This field is required!";
    }
    
    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-ct-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-ct-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-ct").innerHTML="";
        checkScore[5]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-ct-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-ct-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[5]=0;
    }
};

st.onblur=function(){
    console.log("State-"+st.value);
    inp=st.value;
    var flag=0;

    for(let i=0; i<inp.length; i++)
    if(!((inp.charAt(i)>='A' && inp.charAt(i)<='Z') || (inp.charAt(i)>='a' && inp.charAt(i)<='z') || inp.charAt(i)==' ')){
        flag=1;
        document.getElementById("msg-st").innerHTML="Only letters allowed";
        break;
    }
    else{
        flag=0;
    }
    
    if(inp.length<=1){
        flag=1;
        document.getElementById("msg-st").innerHTML="This field is required!";
    }

    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-st-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-st-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-st").innerHTML="";
        checkScore[6]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-st-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-st-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[6]=0;
    }
};

zp.onblur=function(){
    console.log("ZipCode-"+zp.value);
    inp=zp.value;
    var flag=0;

    for(let i=0; i<inp.length; i++)
    if(!(inp.charAt(i)>='0' && inp.charAt(i)<='9')){
        flag=1;
        document.getElementById("msg-zp").innerHTML="Only numbers allowed";
        break;
    }
    else{
        flag=0;
    }
    
    if(inp.length<=1){
        flag=1;
        document.getElementById("msg-zp").innerHTML="This field is required!";
    }
    if(flag==0){
        console.log("Valid");
        document.getElementById("msg-zp-1").className="bi bi-x-circle-fill text-danger d-none";
        document.getElementById("msg-zp-2").className="bi bi-check-circle-fill text-success";
        document.getElementById("msg-zp").innerHTML="";
        checkScore[7]=1;
    }
    else{
        console.log("Invalid");
        document.getElementById("msg-zp-1").className="bi bi-x-circle-fill text-danger";
        document.getElementById("msg-zp-2").className="bi bi-check-circle-fill text-success d-none";
        checkScore[7]=0;
    }
};