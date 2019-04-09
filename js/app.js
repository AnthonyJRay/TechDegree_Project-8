let randomUsers = [];
const modalContent = document.querySelector('.modal-content');

function loadUsers(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api?nat=us&results=12', true)

  xhr.onload = function(){
    if(this.status == 200){
      const users = JSON.parse(this.responseText);
      let results = users.results;
      console.log(results);

      
      let output = '';
      let randomUser = '';
      for(let i in results) {
        output +=
        '<div class="'+"user "+"user-"+[i]+'">'+
        '<img class ="userImg" src=' +results[i].picture.large+ '>' +
        '<ul class="userInfo">'+
        '<li><h3>'+results[i].name.first+' '+results[i].name.last+'</h3></li>'+
        '<li>'+results[i].email+'</li>'+
        '<li class="city">'+results[i].location.city+'</li>'+
        '</ul>'+
        '</div>';
        
        
          randomUser += {
          image: results[i].picture.large,
          name: results[i].name.first+' '+results[i].name.last,
          email: results[i].email,
          cell: results[i].cell,
          address: results[i].location.street+' '+results[i].location.city+','+results[i].location.state,
          birthdate: results[i].dob.age
      };
        randomUsers.push(randomUser);
      };
      document.getElementById('usersList').innerHTML = output;
      const modal = document.querySelector('.modal');
      const card = document.querySelectorAll('.user');

        for(let i = 0; i < card.length; i++){         // Loop through Nodelist
        card[i].addEventListener('click', () => {     // Add click even to each item in Nodelist
          modal.style.display = 'block';             // Change Modal display property to 'block'
          modalContent.innerHTML = randomUsers;
        });
      };                                            //End of Modal Click Event
    };
  //  for (let i =0; i < randomUsers.length; i++) {
  //     console.log(randomUsers[i]);
  //     modalContent.innerHTML = randomUsers[i];
  //  }
  }
  xhr.send();
}
loadUsers()








