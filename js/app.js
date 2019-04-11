let index = document.querySelectorAll('[data-index]');
let currentUser = [];

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomuser.me/api?nat=us&results=12', true);

  xhr.onload = function(){
    if(this.status == 200){
      const users = JSON.parse(this.responseText);
      let results = users.results;

      let output = '';
      for(let i in results) {
        const indexValue = [i];
        const userPic = results[i].picture.large;
        const firstName = results[i].name.first;
        const lastName = results[i].name.last;
        const userEmail = results[i].email;
        const userCity = results[i].location.city;
        const userState = results[i].location.state;
        const userStreet = results[i].location.street;
        const userPost = results[i].location.postcode;
        const userCell = results[i].cell;
        const userDOB = `Birthday: ` + results[i].dob.date.substring(5,7) + '/' + results[i].dob.date.substring(8,10) + '/' + results[i].dob.date.substring(0,4);
        output +=
        `<div class = user data-index=${indexValue}>`  +
        `<img class = userImg src= ${userPic}>` +
        `<ul class = userInfo>`+
        `<li><h3 class = userName>${firstName} ${lastName}</h3></li>`+
        `<li class = userEmail>${userEmail}</li>`+
        `<li class =city>${userCity}</li>`+
        `</ul>`+
        `</div>`;

      currentUser.push(results);
      document.getElementById('usersList').innerHTML = output;  

        const modalContent = document.querySelector('.modal-content');
        const modal = document.querySelector('.modal');
        const card = document.querySelectorAll('.user');
          for(let i = 0; i < card.length; i++) {         
            card[i].addEventListener('click', () => {
                modal.style.display = "block";
                modalContent.innerHTML = 
                `<span class="close">&times;</span>` +
                card[i].innerHTML +`
                <hr id= modal-hr>
                <p class= modal-cell>${userCell}</p>
                <p class= modal-address>${userStreet}  ${userCity}, ${userState} ${userPost}</p>
                <p class= modal-dob>${userDOB}</p>
                ` 
                document.querySelector('.close').addEventListener('click', () => {
                  modal.style.display = "none";
                });       
            });
          }       
      } 
    }
  };
xhr.send();

  

  

       

        
