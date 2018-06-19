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


//Randomize the amount of HP for each character (between 100 and 200 maybe?)
    //I think they're supposed to be set to the values in the video
    //Only come back to this if you need it or delete it


//On.Click event for the player to choose their character
$(".selectCharacter").on("click", function() {

    //Move other characters from the character bay to the zone "Enemies Available to Attack"
        // if (Luke is choosen) {Move other characters to array enemiesToAttack}
        // elseif (Darth Maul is choosen) {Move other characters to array enemiesToAttack}
    
        //Color the character background's red
});

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