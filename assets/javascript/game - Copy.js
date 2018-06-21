//Variables to hold the character names
var obiWanKenobi = 120;

var lukeSkywalker = 100;

var darthSidious = 150;

var darthMaul = 100;
    //Maybe do an object to store character names with their HP
    //Variable for each character's starting HP


//Variable array for available characters
    //????

//Variable array for 'Enemies Available to Attack'
var enemiesToAttack = {};


//Variable to store the 'Defender' character
var enemyDefender = {};


//Variable for Your Character's Attack Power
var playerAttackPower = {};

//Object of character pictures
var characterImages = {
    "luke":"./assets/images/luke-skywalker.jpg",
    "maul":"./assets/images/darth-maul.jpg",
    "vader":"./assets/images/darth-vader.jpg",
    "obi":"./assets/images/obi-wan.jpg"
}


//Add pictures of characters to DOM
for (a=0; a < Object.values(characterImages).length; a++) {
    $("#startingCharacters").append("<img src=" + Object.values(characterImages)[a] + " id=" + Object.keys(characterImages)[a] + ">")
};


//Set the CSS class for each character image to "characterImgs"
 $("#startingCharacters").children("img").attr("class", "characterImgs");


//Randomize the amount of HP for each character (between 100 and 200 maybe?)
    //I think they're supposed to be set to the values in the video
    //Only come back to this if you need it or delete it


//On.Click event for the player to choose their character
/*
$("#startingCharacters").on("click", function() {
console.log("Bananas")
    //Move other characters from the character bay to the zone "Enemies Available to Attack"
    if ($("#luke")) {console.log("Batman")}
        // if (Luke is choosen) {Move other characters to array enemiesToAttack}
        // elseif (Darth Maul is choosen) {Move other characters to array enemiesToAttack}
    
        //Color the character background's red
});*/
//How am I going to prevent them from hopping around after another click?
if ($("#startingCharacters").on("click", function() {
     
        $("#luke").appendTo("#choosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
    }));
    console.log("Spongebob")
;

if ($("#startingCharacters").children("#maul")) {
    $("#maul").on("click", function() {
        $("#maul").appendTo("#choosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
    });
    console.log("Maul cop")
};
/*
if ($("#luke").on("click", function() {
    $("#luke").appendTo("#choosenCharacter");
    $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
}));*/
/*
if ($("#maul").on("click", function() {
    $("#maul").appendTo("#choosenCharacter");
    $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
}));*/

if ($("#vader").on("click", function() {
    $("#vader").appendTo("#choosenCharacter");
    $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
}));

if ($("#obi").on("click", function() {
    $("#obi").appendTo("#choosenCharacter");
    $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
}));

//On.Click event for the player to choose which enemy to attack first
    //Move this character to the zone "Defender"
    //Color the character's background black

//An attack button for your character to attack the defender
$("#attackButton").on("click", function() {

});
    //Attach button should only work when another character has been choosen as the Defender
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