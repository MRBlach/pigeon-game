<<<<<<< HEAD

=======
confirm('Click your mouse to make the pigeon jump.\n\nAvoid the taxi.')
>>>>>>> 6a0fc91a1f71958a75eaf4ea02af773c75df5980

let character = document.getElementById('character');
let taxi1 = document.getElementById('taxi1');
let taxi2 = document.getElementById('taxi2');

function loadGame() {
  confirm('Click your mouse to make the pigeon jump.\n\nAvoid the taxi.');

  taxi1.classList.add('animateTaxi1');
  taxi2.classList.add('animateTaxi2')
}

function jump() {
  if(character.classList != 'animatePigeon') {
    character.classList.add('animatePigeon');
    character.style.backgroundImage = "url('img/pigeon-flap.png')"
    setTimeout(function(){
      character.classList.remove('animatePigeon');
      character.style.backgroundImage = "url('img/pigeon.png')"
    }, 500);
  }
}

let checkDead = setInterval(function() {
  let characterTop =
  parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let taxi1Left =
  parseInt(window.getComputedStyle(taxi1).getPropertyValue('left'));
  let taxi2Left =
  parseInt(window.getComputedStyle(taxi2).getPropertyValue('left'));

  if(taxi1Left < 100 && taxi1Left > 80 && characterTop >= 268) {
    taxi1.style.animation = 'none';
    taxi1.style.display = 'none';
    gameOver()
   }
  
  else if( taxi2Left < 100 && taxi2Left > 80 && characterTop >= 268) {
    taxi2.style.animation = 'none';
    taxi2.style.display = 'none';
    gameOver()
  }
  
}, 10);

function gameOver() {
  alert('Game Over!\n\nPress OK to restart game.')
  location.reload();
}
