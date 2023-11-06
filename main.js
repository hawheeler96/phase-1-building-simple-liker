// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')
const hiddenClass = 'hidden'

const likeButton = document.getElementsByClassName('like-glyph')
for (const button of likeButton) {
  button.addEventListener('click', handleHeartClick)
}

function handleHeartClick(e) {
  mimicServerCall()
    .then(() => handleSuccess(e.target)) //adding e.target because we need to use target in handle success function, if just handlesuccess would return whole mock server message
    .catch(handleError)
}
 
function handleSuccess (heartSpan) {
  if (heartSpan.textContent === EMPTY_HEART) {
    heartSpan.textContent = FULL_HEART;
    heartSpan.classList.add('activated-heart');
  }
  else {
    heartSpan.textContent = EMPTY_HEART;
    heartSpan.classList.remove('activated-heart');
  }
}

function handleError(message) {
  modal.classList.remove(hiddenClass)//allows error message to be seen
  modalMessage.textContent = message; //gives message
  setTimeout(()=> modal.classList.add(hiddenClass), 3000) //rehides error after 3 sec 
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
