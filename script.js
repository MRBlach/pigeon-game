// confirm('Click your mouse to make the pigeon jump.\n\nAvoid the taxi.')

let character = document.getElementById('character');
let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');

function jump() {
  if(character.classList != 'animate') {
    character.classList.add('animate');
    character.style.backgroundImage = "url('img/pigeon-flap.png')"
    setTimeout(function(){
      character.classList.remove('animate');
      character.style.backgroundImage = "url('img/pigeon.png')"
    }, 500);
  }
}

let checkDead = setInterval(function() {
  let characterTop =
  parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let block1Left =
  parseInt(window.getComputedStyle(block1).getPropertyValue('left'));
  let block2Left =
  parseInt(window.getComputedStyle(block2).getPropertyValue('left'));

  if(block1Left < 100 && block1Left > 80 && characterTop >= 268) {
    block1.style.animation = 'none';
    block1.style.display = 'none';
    gameOver()
   }
  
  else if( block2Left < 100 && block2Left > 80 && characterTop >= 268) {
    block2.style.animation = 'none';
    block2.style.display = 'none';
    gameOver()
  }
  
}, 10);

function gameOver() {
  alert('Game Over!\n\nPress OK to restart game.')
  window.location = '/'
}