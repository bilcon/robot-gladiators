<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fightOrSkip = function() {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // validate prompt answer
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return fightOrSkip();
  }

  // convert promptFight to all lowercase so we can check with less options
  promptFight = promptFight.toLowerCase();

  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      // stop while() loop using break; and enter next fight

      // return true if player wants to leave
      return true;
    }
  }
  return false;
};


// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;

  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove player's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
=======
=======
>>>>>>> feature/random
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

<<<<<<< HEAD
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
=======

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
    
  while (playerInfo.health > 0 && enemy.health > 0) {
>>>>>>> feature/objects
=======
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = Math.floor(Math.random() * 60);
var enemyAttack = 12;

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
>>>>>>> feature/random
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
<<<<<<< HEAD
<<<<<<< HEAD
    if (promptFight === "skip" || promptFight === "SKIP") {
=======
    if (promptFight === 'skip' || promptFight === 'SKIP') {
>>>>>>> feature/objects
=======
    if (promptFight === 'skip' || promptFight === 'SKIP') {
>>>>>>> feature/random
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
<<<<<<< HEAD
<<<<<<< HEAD
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
=======
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
>>>>>>> feature/objects
=======
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
>>>>>>> feature/random
        break;
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
=======
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    // generate random damage value based on player's attachk power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
>>>>>>> feature/random
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
<<<<<<< HEAD

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
=======
>>>>>>> feature/random
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
<<<<<<< HEAD
    playerHealth = playerHealth - enemyAttack;
=======
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
>>>>>>> feature/random
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
<<<<<<< HEAD
>>>>>>> feature/initial-game
=======
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    // generate random damage value based on player's attachk power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
>>>>>>> feature/objects
=======
>>>>>>> feature/random
  }
};

// function to start a new game
var startGame = function() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // check player stats
    console.log(playerInfo);

    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyInfo array
      var pickedEnemyObj = enemyInfo[i];

      // set health for picked enemy
      pickedEnemyObj.health = randomNumber(40, 60);

      console.log(pickedEnemyObj);

      // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
      fight(pickedEnemyObj);

      // if player is still alive after the fight and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

=======
  // reset player stats
  playerInfo.reset();

  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, // comma!
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    }
  };

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj= enemyInfo[i];

      // reset enemyhealth before starting new fight
      pickedEnemyObj.health= randomNumber(40, 60);

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
>>>>>>> feature/objects
=======
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = randomNumber(40, 60);

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
>>>>>>> feature/random
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  // after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
=======
  // play again
  startGame();

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
>>>>>>> feature/objects
=======
  // play again
  startGame();

  // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
>>>>>>> feature/random
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

<<<<<<< HEAD
<<<<<<< HEAD
  // check localStorage for high score, if it's not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  // if player has more money than the high score, player has new high score!
  if (playerInfo.money > highScore) {
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
  } 
  else {
    alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
=======
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfomoney + '.');
=======
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
>>>>>>> feature/random
  } else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert('Thank you for playing Robot Gladiators! Come back soon!');
<<<<<<< HEAD
>>>>>>> feature/objects
=======
>>>>>>> feature/random
  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
<<<<<<< HEAD
<<<<<<< HEAD
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );

  // convert answer from prompt to an actual number
  shopOptionPrompt = parseInt(shopOptionPrompt);

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
=======
=======
>>>>>>> feature/random
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 'REFILL':
    case 'refill':
<<<<<<< HEAD
      if (playerInfo.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
=======
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
>>>>>>> feature/random
    }
    else {
        window.alert("You don't have enough money!");
    }

      break;
    case 'UPGRADE':
    case 'upgrade':
<<<<<<< HEAD
      if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
=======
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
>>>>>>> feature/random
    }
    else {
        window.alert("You don't have enough money!");
    }

      break;
    case 'LEAVE':
    case 'leave':
      window.alert('Leaving the store.');
      // do nothing, so function will end
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      // call shop() again to force player to pick a valid option
<<<<<<< HEAD
>>>>>>> feature/objects
=======
>>>>>>> feature/random
      shop();
      break;
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
=======
=======
>>>>>>> feature/random
// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

<<<<<<< HEAD
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
>>>>>>> feature/objects
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
<<<<<<< HEAD
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
=======
>>>>>>> feature/objects
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];
// start first game when page loads
startGame();
<<<<<<< HEAD
=======
for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealt before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
};

  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight (pickedEnemyName);
  //call fight function with enemy-robot
  fight(enemyNames[i]);

  //start the game when the page loads
  var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // play again
    startGame();
    // function to end the entire game
    var endGame = function() {
      // if player is still alive, player wins!
      if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }
      // ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");

      if (playAgainConfirm) {
     // restart the game
    startGame();
    } 
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
    }
  };

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

>>>>>>> feature/initial-game
=======
>>>>>>> feature/objects
=======
// start first game when page loads
startGame();
>>>>>>> feature/random
