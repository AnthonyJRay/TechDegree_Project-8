

// Load Random Users
function loadUsers(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api?nat=us&results=12', true)

  xhr.onload = function(){
    if(this.status == 200){
      const users = JSON.parse(this.responseText);
      console.log(users.results);

      let output = '';
      for(let i in users.results) {
        output +=
        '<div class="'+"user "+"user-"+[i]+'">'+
        '<img class ="userImg" src=' +users.results[i].picture.large+ '>' +
        '<ul class="userInfo">'+
        '<li><h3>'+users.results[i].name.first+' '+users.results[i].name.last+'</h3></li>'+
        '<li>'+users.results[i].email+'</li>'+
        '<li class="city">'+users.results[i].location.city+'</li>'+
        '</ul>'+
        '</div>';
      }
      document.getElementById('usersList').innerHTML = output;
    }
  }
  xhr.send();
}
loadUsers()



