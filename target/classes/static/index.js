// alert("hi")
console.log("hi")

data = {
    "name":"jane",
    "gender":"Female"
}

data.name

var users = [
    {
        "name":"jane",
        "gender":"Female",
        "img":"jane.png"
    },
    {
        "name":"john",
        "gender":"Male",
        "img":"john.png"
    }
]

var id = 0;

function toggle_user(){
    id = (id+1)%2 ;// to switch between users
    var user_image = document.getElementById("user_img");
    user_image.src = users[id].img;
    var user_gender = document.getElementById("user_gen");
    user_gender.innerHTML = users[id].gender;
    var user_name = document.getElementById("user_nam");
    user_name.innerHTML = users[id].name;
}

function random_user(){
    fetch("https://randomuser.me/api/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var userData = data.results[0];
        var user_image = document.getElementById("user_img");
        user_image.src = userData.picture.large;
        var user_gender = document.getElementById("user_gen");
        user_gender.innerHTML = userData.gender;
        var user_name = document.getElementById("user_nam");
        user_name.innerHTML = userData.name.first + " " + userData.name.last;
    })
    // handle error
    .catch(function(err){
        console.log(err);
    })
}   