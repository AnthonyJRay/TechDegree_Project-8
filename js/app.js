

// Load Random Users
function loadUsers(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api?results=12', true)

  xhr.onload = function(){
    if(this.status == 200){
      const users = JSON.parse(this.responseText);
      console.log(users.results);

      let output = '';
      for(let i in users.results) {
        output +=
        '<div class="user">' +
        '<img class ="userImg" src=' +users.results[i].picture.large+ '>' +
        '<ul class="userInfo">'+
        '<li>'+users.results[i].name.first+' '+users.results[i].name.last+'</li>'+
        '<li>'+users.results[i].email+'</li>'+
        '<li>'+users.results[i].location.city+'</li>'+
        '</ul>';
      }
      document.getElementById('usersList').innerHTML = output;
    }
  }
  xhr.send();
}
loadUsers()



