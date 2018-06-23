//Maybe do an object to store character names with their HP
//Variable for each character's starting HP
var characterHP = {
    "luke":"100",
    "maul":"100",
    "vader":"150",
    "obi":"120"
}

//console.log("Char HP Test Maul: " + characterHP.maul)

var characterAtk = {
    "luke":"10",
    "maul":"10",
    "vader":"10",
    "obi":"10"
}

//Variables to hold the character names
    //meh don't need it?
        /*var lukeSkywalker = 100;

        var darthMaul = 100;

        var darthVader = 150;

        var obiWanKenobi = 120;
        */



//Variable array for available characters
    //????

//Variable array for 'Enemies Available to Attack'
var enemiesToAttack = {};

//Testing to see if anyone has moved to #defenderDiv
var defenderOccupant = $("#defenderDiv").children("img").length;
console.log("defenderOccupant be 0: ", defenderOccupant)


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


//Character HP needs to display with each picture
    //$(".characterImages").text("100")

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
if ($("#startingCharacters").on("click", function(event) {
    if (event.target.id === "luke") {
        $("#luke").appendTo("#choosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        console.log("choosen luke");
        console.log("Luke HP: " + characterHP.luke)
    }

    
    // if ($("#luke").on("click", function() {
    //     $("#luke").appendTo("#choosenCharacter");
    //     $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
    //     console.log("choosen luke");
    //     console.log("HP: " + characterHP.luke)
    // }))



     
    else if (event.target.id === "maul") {
        $("#maul").appendTo("#choosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        console.log("choosen maul");
        console.log("Maul HP: " + characterHP.maul)
    }



     
    else if (event.target.id === "vader") {
        $("#vader").appendTo("#choosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        console.log("choosen vader");
        console.log("Vader HP: " + characterHP.vader)
    }



     
    else if (event.target.id === "obi") {
        $("#obi").appendTo("#choosenCharacter");
        $("#startingCharacters").children("img").appendTo("#enemiesToAttack");
        console.log("choosen obi");
        console.log("Obi HP: " + characterHP.obi)
    };
}));

        /*
        if ($("#luke").on("click", function() {
            $("#luke").appendTo("#choosenCharacter");
            $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
        }));*/
        /*
        if ($("#maul").on("click", function() {
            $("#maul").appendTo("#choosenCharacter");
            $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
        }));

        if ($("#vader").on("click", function() {
            $("#vader").appendTo("#choosenCharacter");
            $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
        }));

        if ($("#obi").on("click", function() {
            $("#obi").appendTo("#choosenCharacter");
            $("#startingCharacters").children("img").appendTo("#enemiesToAttack")
        }));*/

//On.Click event for the player to choose which enemy to attack first
    //Move this character to the zone "Defender"
    //Should prevent additional defenders until this one is defeated
if  ($("#enemiesToAttack").on("click", function(event) {
     
        //Moves the enemy to being a defender
    if  (event.target.id === "luke") {
        $("#luke").appendTo("#defenderDiv");

        //Color the defender's background black
        $("#defenderDiv").children("img").attr("class", "defenderImgs");
        console.log("defender luke")


            // if ($("#luke").on("click", function() {
            //     $("#luke").appendTo("#defenderDiv");

            //     //Color the defender's background black
            //     $("#defenderDiv").children("img").attr("class", "defenderImgs");
            //     console.log("defender luke")
            // }));
        }
    
    
            //Moves the enemy to being a defender
    else if (event.target.id === "maul") {
            $("#maul").appendTo("#defenderDiv");
            
            //Color the defender's background black
            $("#defenderDiv").children("img").attr("class", "defenderImgs");
            console.log("defender maul");
            defenderOccupant = $("#defenderDiv").children("img").length;
            console.log("defenderOccupant be 1: ", defenderOccupant)
            console.log("defenderOccupant is 1? ", defenderOccupant === 1)
        }
    
    
    
            //Moves the enemy to being a defender 
    else if (event.target.id === "vader") {
            $("#vader").appendTo("#defenderDiv");

            //Color the defender's background black
            $("#defenderDiv").children("img").attr("class", "defenderImgs");
            console.log("defender vader")
        }
    
    
    
        //Moves the enemy to being a defender 
    else if (event.target.id === "obi") {
            $("#obi").appendTo("#defenderDiv");

            //Color the defender's background black
            $("#defenderDiv").children("img").attr("class", "defenderImgs");
            console.log("defender obi")
        }
                //Trash console.log("test2 ", $("#defenderDiv").children("img").length)
    }));


//Variable to store the 'Defender' character HP
    //var defendersHP = characterHP[$("#defenderDiv").children("img")[0].id];
    
    if (true) {
        var defendersHP = characterHP[$("#defenderDiv").children("img")[0].id];
        var characterAtk = characterAtk[$("#choosenCharacter").children("img")[0].id];
        console.log("First def HP Check ", defendersHP)
    };
            
    

//An attack button for your character to attack the defender
    //Why isn't the attack button subtracting HP from the defender???
$("#attackButton").on("click", function() {
    defendersHP = defendersHP - characterAtk;
    console.log("defenders HP ", defendersHP);
    //defendersHP = characterHP[$("#defenderDiv").children("img")[0].id] - 
    console.log("After attack: " + characterHP[$("#defenderDiv").children("img")[0].id]);
    console.log("Dude Attacking: " + $('#choosenCharacter').children("img")[0].id);
    console.log("Dude Atk Amt: " + characterAtk[$("#choosenCharacter").children("img")[0].id])
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