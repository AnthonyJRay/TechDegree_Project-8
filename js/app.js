
const modalContent = document.querySelector('.modal-content');


  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api?nat=us&results=12', true)

  xhr.onload = function(){
    if(this.status == 200){
      const users = JSON.parse(this.responseText);
      let results = users.results;
      console.log(results);

      // Main Content
      let output = '';
      for(let i in results) {
        output +=
        '<div class="user" id='          +[i]+'>'  +
        '<img class ="userImg" src='     +results[i].picture.large+ '>' +
        '<ul class="userInfo">'          +
        '<li><h3>'                       +results[i].name.first+' '+results[i].name.last+'</h3></li>'+
        '<li>'                           +results[i].email+'</li>'+
        '<li class="city">'              +results[i].location.city+'</li>'+
        '</ul>'                          +
        '</div>';
       
      };
      document.getElementById('usersList').innerHTML = output;
        

      // Modal Content
      let randomUser = '';
        for(let i in results) {
          randomUser +=
          '<div class="modal-user">'    + 
          '<img class="modal-img" src=' + results[i].picture.large + '>' +
          '<h4 class="modal-name">'     + results[i].name.first+' '+results[i].name.last + '</h4>' +
          '<ul class="modal-info">'     +
          '<li class="modal-email">'    + results[i].email + '</li>' +
          '<li class="modal-city">'     + results[i].location.city + '</li>' +
          '</ul>'                       +
          '<hr>'                        +
          '<ul class="modal-contact">'  +
          '<li class="modal-address">'  + results[i].location.street+' '+results[i].location.city+','+results[i].location.state + '</li>'
          '<li class="modal-cell">'     + results[i].cell + '</li>'  +
          '<li class="modal-birthday">' + results[i].dob.age + '</li>' +
          '</div>';
        };
      
      modalContent.innerHTML = randomUser;

        // Click on a card to open Modal
      const modal = document.querySelector('.modal');
      const card = document.querySelectorAll('.user');
        for(let i = 0; i < card.length; i++){         
        card[i].addEventListener('click', () => {     
          modal.style.display = 'block';             
        });
      };                                            
        
      // Click anywhere to close Modal
        document.getElementById('myModal').addEventListener('click', () => { 
          if(modal.style.display = 'block'){
            modal.style.display = 'none';
          }
        });
    
    };
  }
  xhr.send();


