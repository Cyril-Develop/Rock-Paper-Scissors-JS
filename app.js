const allWeapons = document.querySelectorAll('.weapon');
const weaponContainer = document.querySelector('.game_weapons');
const gameWeaponInfo = document.querySelector('.game_weapon_container p');
const timer = document.querySelector('.countDown');
const playerChoice = document.querySelector('.player_choice');
const computerChoice = document.querySelector('.computer_choice');
const gameRestart = document.querySelector('.game_restart_info');
const btnRestart = document.querySelector('.game_restart_btn');

let count = 3;
let WeaponsArray = ['rock', 'paper', 'scissors'];

allWeapons.forEach(weapon => {
    weapon.addEventListener('click', startGame);
});

function startGame(e){

    const weaponSelectedByPlayer = e.target.getAttribute('data-weapon');
    const weaponSelectedByComputer = WeaponsArray[Math.floor(Math.random() * WeaponsArray.length)];

    weaponContainer.classList.add('moveLeft');
    gameWeaponInfo.classList.add('moveRight');

    const countDown = setInterval(() => {
        timer.classList.add('countDownAnim');
        timer.innerHTML = count;
        count--;
        if(count < 0){
            clearInterval(countDown);
            timer.style.display = 'none';
            displayWeaponsChosen(weaponSelectedByPlayer, weaponSelectedByComputer);
            showWhoWin(weaponSelectedByPlayer,weaponSelectedByComputer);
        }
    }, 1000);

};

function displayWeaponsChosen(weaponSelectedByPlayer, weaponSelectedByComputer){
    
    switch(weaponSelectedByPlayer){
        case 'rock':
            playerChoice.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
            break;
        case 'paper':
            playerChoice.innerHTML = '<i class="fa-regular fa-hand"></i>';
            break;
        case 'scissors':
            playerChoice.style.transform = 'rotate(90deg)';
            playerChoice.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
            break;
    };

    switch(weaponSelectedByComputer){
        case 'rock':
            computerChoice.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
            break;
        case 'paper':
            computerChoice.innerHTML = '<i class="fa-regular fa-hand"></i>';
            break;
        case 'scissors':
            computerChoice.style.transform = 'rotate(-90deg)';
            computerChoice.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
            break;
    };

};

function showWhoWin(weaponSelectedByPlayer,weaponSelectedByComputer){

    let playerWin = false;
    let computerWin = false;

    if(weaponSelectedByPlayer === 'rock' && weaponSelectedByComputer === 'scissors'){
        playerWin = true;
    }else if(weaponSelectedByPlayer === 'paper' && weaponSelectedByComputer === 'rock'){
        playerWin = true;
    }else if(weaponSelectedByPlayer === 'scissors' && weaponSelectedByComputer === 'paper'){
        playerWin = true;
    }else if(weaponSelectedByPlayer === weaponSelectedByComputer){
        draw = true;
    }else{
        computerWin = true;
    };

    if(playerWin){
        gameRestart.innerHTML = 'You win !';
    }else if(computerWin){
        gameRestart.innerHTML = 'You lose !';
    }else{
        gameRestart.innerHTML = 'Draw !';
    };

    setTimeout(() => {
        document.querySelector('.game_restart').classList.add('showRestart');
    }, 500);

};

btnRestart.addEventListener('click', () => {
    location.reload();
});
