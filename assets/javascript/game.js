// Each character needs to start with HP and Atk power to battle
var characters = {
    luke: {
        hp: 100,
        atk: 10,
    },

    maul: {
        hp: 100,
        atk: 10,
    },

    vader: {
        hp: 150,
        atk: 10,
    },

    obi: {
        hp: 120,
        atk: 10,
    }
};


// Just an array to store characters before relocating them during the game
var charactersArray = Object.keys(characters)
//console.log("Show me characters ", charactersArray)


//Stores the one character chosen by the player
var chosenCharacter;


//This will help determine who's here and not defending yet
var enemiesArray = [];


//Variable array for 'Defender'
var defenderArray = [];


// Tracking HP during the player's battles
var chosenCharacterHp;


// Tracking Atk during the player's battles
var chosenCharacterAtk;


// Tracking Opponent's HP during the player's battles
var defenderHp;


// Tracking Opponent's Atk during the player's battles
var defenderAtk;


//These locations will show the character pictures
var characterImages = {
    "luke":"./assets/images/luke-skywalker.jpg",
    "maul":"./assets/images/darth-maul.jpg",
    "vader":"./assets/images/darth-vader.jpg",
    "obi":"./assets/images/obi-wan.jpg"
};


//Add pictures of characters to DOM
for (a=0; a < Object.values(characterImages).length; a++) {
    $("#startingCharacters").append("<img src=" + Object.values(characterImages)[a] + " id=" + Object.keys(characterImages)[a] + ">")
};


//Set the CSS class for each character image to "characterImgs"
 $("#startingCharacters").children("img").attr("class", "characterImgs");



//On.Click event for the player to choose their character
//How am I going to prevent them from hopping around after another click?
if ($("#startingCharacters").on("click", function(event) {
    console.log("event.target.id", event.target.id);

     // Characters need to be put into the enemiesToAttack array for separation
    function waitingToDefend (name) {
    // For preventing the chosenCharacter from being placed in the enemiesArray
    if (name !== event.target.id) {
       enemiesArray.push(name);
    }
    
}

    if (event.target.id === "luke") {
        $("#luke").appendTo("#chosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        chosenCharacter = event.target.id;
        chosenCharacterHp = characters.luke.hp;
        chosenCharacterAtk = characters.luke.atk;
        charactersArray.forEach(waitingToDefend);
        console.log("Enemiers Array Test ", enemiesArray);
        console.log("Luke HP: " + characters.luke.hp)
    }
    
  

    else if (event.target.id === "maul") {
        $("#maul").appendTo("#chosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        chosenCharacter = event.target.id;
        chosenCharacterHp = characters.maul.hp;
        chosenCharacterAtk = characters.maul.atk;
        charactersArray.forEach(waitingToDefend);
        console.log("Enemiers Array Test ", enemiesArray);
        console.log("Maul HP: " + characters.maul.hp)
    }


     
    else if (event.target.id === "vader") {
        $("#vader").appendTo("#chosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        chosenCharacter = event.target.id;
        chosenCharacterHp = characters.vader.hp;
        chosenCharacterAtk = characters.vader.atk;
        charactersArray.forEach(waitingToDefend);
        console.log("Enemiers Array Test ", enemiesArray);
        console.log("Vader HP: " + characters.vader.hp)
    }



     
    else if (event.target.id === "obi") {
        $("#obi").appendTo("#chosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        chosenCharacter = event.target.id;
        chosenCharacterHp = characters.obi.hp;
        chosenCharacterAtk = characters.obi.atk;
        charactersArray.forEach(waitingToDefend);
        console.log("Enemiers Array Test ", enemiesArray);
        console.log("Obi HP: " + characters.obi.hp)
    };
}));


//On.Click event for the player to choose which enemy to attack first
    //Move this character to the zone "Defender"
    //Should prevent additional defenders until this one is defeated
if  ($("#enemiesToAttack").on("click", function(event) {

    if (defenderArray.length === 0) {
     
            //Moves the enemy to being a defender
        if  (event.target.id === "luke") {
            $("#luke").appendTo("#defenderDiv");
            defenderArray.push(event.target.id);
            defenderHp = characters.luke.hp;
            defenderAtk = characters.luke.atk;
            //Color the defender's background black
            $("#defenderDiv").children("img").attr("class", "defenderImgs");
            console.log("defender luke")
            }
        
        
                //Moves the enemy to being a defender
        else if (event.target.id === "maul") {
                $("#maul").appendTo("#defenderDiv");
                defenderArray.push(event.target.id);
                defenderHp = characters.maul.hp;
                defenderAtk = characters.maul.atk;
                //Color the defender's background black
                $("#defenderDiv").children("img").attr("class", "defenderImgs");
                console.log("defender maul");
            }
        
        
        
                //Moves the enemy to being a defender 
        else if (event.target.id === "vader") {
                $("#vader").appendTo("#defenderDiv");
                defenderArray.push(event.target.id);
                defenderHp = characters.vader.hp;
                defenderAtk = characters.vader.atk;
                //Color the defender's background black
                $("#defenderDiv").children("img").attr("class", "defenderImgs");
                console.log("defender vader")
            }
        
        
        
            //Moves the enemy to being a defender 
        else if (event.target.id === "obi") {
                $("#obi").appendTo("#defenderDiv");
                defenderArray.push(event.target.id);
                defenderHp = characters.obi.hp;
                defenderAtk = characters.obi.atk;
                //Color the defender's background black
                $("#defenderDiv").children("img").attr("class", "defenderImgs");
                console.log("defender obi")
            }
        }
    }));



//An attack button for your character to attack the defender
$("#attackButton").on("click", function() {
    chosenCharacterHp = chosenCharacterHp - defenderAtk;
    defenderHp = defenderHp - chosenCharacterAtk;
    chosenCharacterAtk = chosenCharacterAtk + Math.floor(Math.random() * 10);
    $("#playerHp").html("<p>Player's remaining HP: " + chosenCharacterHp + "</p>");
    $("#playerAtk").html("<p>Player's Attack power: " + chosenCharacterAtk + "</p>");
    $("#defenderHp").html("<p>Defender's remaining HP: " + defenderHp + "</p>");
    $("#defenderAtk").html("<p>Defender's Attack power: " + defenderAtk + "</p>");


    console.log("Defender Array ", defenderArray);
    console.log("Chosen Character HP / Atk ", chosenCharacterHp + " / " + chosenCharacterAtk);
    console.log("Defenders HP / Atk ", defenderHp + " / " + defenderAtk)
    //console.log()
 
});
    //Attack button should only work when another character has been choosen as the Defender
        //Otherwise, a message appears to say 'No enemy here'
    //"You attacked 'Darth Maul' for (random number of damage)" -> amount will increase each time you attack
    //"'Darth Maul' attacked you back for (Set amount of dmg or random amount of dmg?)"
    //Decrease both player's HP according to the amount of damage

//If any character's HP goes <= 0, they die/lose
    //Attack button stops working
    //If the defender dies, their picture disappears
        //"You have defeated 'Luke Skywalker, you can choose to fight another enemy"
    
//After you've defeated all 3 enemies, you've won the game
    //None of the character pictures should still be showing
    //A message appears, "You Won! GAME OVER!"