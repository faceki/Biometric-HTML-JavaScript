const pathUrl = window.location.pathname;
const baseUrl = window.location.origin+"/";
const pathUrlArray1 = pathUrl.split("/");
const pathUrlArray = pathUrlArray1.filter(function (el) {
    return el != '';
});
pathUrlArray.pop();
const newPath=pathUrlArray.join("/");
const client_id=localStorage.getItem("client_id");
const client_email=localStorage.getItem("client_email");

function onSignupFormNext(){
        const BASE_URL = "https://app.faceki.com/";
        data = JSON.stringify({
            client_id: client_id,
            email: client_email,
        })
        fetch(BASE_URL+'getToken', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:data
        }).then(response=>{
            return response.json()
        }).then(function(res){
            localStorage.setItem("firstname", document.querySelector('#fname').value);
            localStorage.setItem("lastname", document.querySelector('#lname').value);
            localStorage.setItem("email_id", document.querySelector('#email_id').value);
            localStorage.setItem("mobile_number", document.querySelector('#mobile_number').value);
            localStorage.setItem("type","signup");
            if(document.querySelector('#fname').value!='' &&
                document.querySelector('#lname').value!='' &&
                document.querySelector('#email_id').value!='' &&
                document.querySelector('#mobile_number').value!=''){
                url = baseUrl+'/'+newPath+"/faceki-sign-in.html?route=signup&auth="+res.token;
                window.location.replace(url);
            }else{
                alert("fill all information.")
            }
           
        });
    
}
