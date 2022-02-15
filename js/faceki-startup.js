const client_id='af7d4790-04a9-11ec-aecf-1dca4d5eaaf0';
const client_email='demo@faceki.com';
const BASE_URL = "https://app.faceki.com/";
const pathUrl = window.location.pathname;
const baseUrl = window.location.origin;
const pathUrlArray1 = pathUrl.split("/");
const pathUrlArray = pathUrlArray1.filter(function (el) {
    return el != '';
});
const newPath=pathUrlArray.join("/");
localStorage.setItem("client_id",client_id);
localStorage.setItem("client_email",client_email);
function getToken(type){
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
        if(type=='login'){
            showFacekiLoginWindow(type,res.token)
        }else if(type == 'signup'){
            showFacekiSignUpWindow(type,res.token)
        }
    })
}

function showFacekiLoginWindow(type,token){
    url = baseUrl+'/'+newPath+"/faceki-sign-in.html?route=login&auth="+token
    window.location.replace(url);
}

function showFacekiSignUpWindow(type,token){
    url = baseUrl+'/'+newPath+"/faceki-sign-up.html?route=signup&auth="+token
    window.location.replace(url);
}

