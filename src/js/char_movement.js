 // local storage of player origin
 myStorage = localStorage;

 /* Dieser Abschnitt ist noch veraltet und muss neu geschrieben werden
 
 // Square-Counter (Wo ist die Figur)

 let place_counter_x = 1
 let place_counter_y = 1

 // delay for set time for movement animation
 let delay_duration = 50;
 function delay(time) {
     return new Promise(resolve => setTimeout(resolve, time));
 }

 // delay for set time for preventing movement
 function delay_movement(time) {
     return new Promise(resolve => setTimeout(resolve, time));
 }

 // delay for movement functions
 let can_char_move = true;
 async function prevent_move() {
     can_char_move = false;
     await delay_movement(101);
     can_char_move = true;
 }

*/

/* Dieser Abschnit kannn besser über SWITCH-case gemacht werden.

 // move to adjacent zones

 function move_to_house() {
     if ((place_counter_x === 8) && (place_counter_y === 6)) {
         console.log("ab ins Haus");
         localStorage.setItem('player_origin', 1);
         window.location.href = "kreischcraft2.html";
     }
 }

 function move_to_south() {
     if ((place_counter_x === 5) && (place_counter_y === 10)) {
         console.log("ab in in den Süden");
         localStorage.setItem('player_origin', 2);
         window.location.href = "kreischcraft3.html";
     }
 }
*/


/* Veraltet, nicht durchtgesehen!
 
 // move up
 async function move_up() {
     if (counter_arrow_up === banned_squares_up.length) {
         counter_arrow_up = 0;
         place_counter_y = place_counter_y - 1;
         run_y = run_y - 1;
         move_y = move_y_int + (move_value * run_y);
         console.log("x: " + place_counter_x + " y: " + place_counter_y);
         r.style.setProperty('--move_y', (move_y + (move_value / 3 * 2)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_back_moving_black.png";
         r.style.setProperty('--move_y', (move_y + (move_value / 3 * 1)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_back_standing_black.png";
         r.style.setProperty('--move_y', move_y + "px");
     }
 }
 // move down
 async function move_down() {
     if (counter_arrow_down === banned_squares_down.length) {

         counter_arrow_down = 0;
         place_counter_y = place_counter_y + 1;
         run_y = run_y + 1;
         move_y = move_y_int + (move_value * run_y);
         console.log("x: " + place_counter_x + " y: " + place_counter_y);
         r.style.setProperty('--move_y', (move_y - (move_value / 3 * 2)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_front_moving_black.png";
         r.style.setProperty('--move_y', (move_y - (move_value / 3 * 1)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_front_standing_black.png";
         r.style.setProperty('--move_y', move_y + "px");
     }
 }
 //  move right
 async function move_right() {
     if (counter_arrow_right === banned_squares_right.length) {

         counter_arrow_right = 0;
         place_counter_x = place_counter_x + 1;
         run_x = run_x + 1;
         move_x = move_x_int + (move_value * run_x);
         console.log("x: " + place_counter_x + " y: " + place_counter_y);
         r.style.setProperty('--move_x', (move_x - (move_value / 3 * 2)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_right_moving_black.png";
         r.style.setProperty('--move_x', (move_x - (move_value / 3 * 1)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_right_standing_black.png";
         r.style.setProperty('--move_x', move_x + "px");
     }
 }
 // move left
 async function move_left() {
     if (counter_arrow_left === banned_squares_left.length) {
         counter_arrow_left = 0;
         place_counter_x = place_counter_x - 1;
         run_x = run_x - 1;
         move_x = move_x_int + (move_value * run_x);
         console.log("x: " + place_counter_x + " y: " + place_counter_y);
         r.style.setProperty('--move_x', (move_x + (move_value / 3 * 2)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_left_moving_black.png";
         r.style.setProperty('--move_x', (move_x + (move_value / 3 * 1)) + "px");
         await delay(delay_duration);
         document.getElementById("player_img").src = "src/images/cat_left_standing_black.png";
         r.style.setProperty('--move_x', move_x + "px");
     }
 }

 // determine function for arrow keys

 document.onkeydown = checkKey;
 function checkKey(e) {
     console.log("x: " + move_x + " y: " + move_y);
     e = e || window.event;

     if ((e.keyCode == '38') && (can_char_move === true)) { // up arrow
         move_to_house();
         prevent_move();
         document.getElementById('player_img').src = "src/images/cat_back_standing_black.png";
         if ((place_counter_y > 1) && (place_counter_y <= number_of_squares)) {
             for (var i = 0; i < banned_squares_up.length; i++) {
                 if ((place_counter_x === banned_squares_up[i].x) && (place_counter_y === banned_squares_up[i].y)) {
                     console.log("out of bounds! (Arrow Down)");
                     counter_arrow_up = 0;
                     return;
                 }
                 else {
                     counter_arrow_up = counter_arrow_up + 1;
                     console.log(counter_arrow_up);
                     move_up();
                 }
             }
         }
         else {
             console.log("oben raus");
         }
     }
     else if ((e.keyCode == '40') && (can_char_move === true)) { // down arrow
         move_to_south()
         prevent_move();
         document.getElementById('player_img').src = "src/images/cat_front_standing_black.png";
         if ((place_counter_y >= 1) && (place_counter_y < number_of_squares)) {
             for (var i = 0; i < banned_squares_down.length; i++) {
                 if ((place_counter_x === banned_squares_down[i].x) && (place_counter_y === banned_squares_down[i].y)) {
                     console.log("out of bounds! (Arrow Down)");
                     counter_arrow_down = 0;
                     return;
                 }
                 else {
                     counter_arrow_down = counter_arrow_down + 1;
                     console.log(counter_arrow_down);
                     move_down();
                 }
             }
         }

         else {
             console.log("unten raus");
         }
     }
     else if ((e.keyCode == '37') && (can_char_move === true)) { // left arrow
         prevent_move();
         document.getElementById('player_img').src = "src/images/cat_left_standing_black.png";
         if ((place_counter_x > 1) && (place_counter_x <= number_of_squares)) {
             for (var i = 0; i < banned_squares_left.length; i++) {
                 if ((place_counter_x === banned_squares_left[i].x) && (place_counter_y === banned_squares_left[i].y)) {
                     console.log("out of bounds! (Arrow Left)");
                     counter_arrow_left = 0;
                     return;
                 }
                 else {
                     counter_arrow_left = counter_arrow_left + 1;
                     console.log(counter_arrow_left);
                     move_left();
                 }
             }
         }
         else {
             console.log("links raus");
         }
     }
     else if ((e.keyCode == '39') && (can_char_move === true)) { // right arrow
         prevent_move();
         document.getElementById('player_img').src = "src/images/cat_right_standing_black.png";
         if ((place_counter_x >= 1) && (place_counter_x < number_of_squares)) {
             for (var i = 0; i < banned_squares_right.length; i++) {
                 if ((place_counter_x === banned_squares_right[i].x) && (place_counter_y === banned_squares_right[i].y)) {
                     console.log("out of bounds! (Arrow Right)");
                     counter_arrow_right = 0;
                     return;
                 }
                 else {
                     counter_arrow_right = counter_arrow_right + 1;
                     console.log(counter_arrow_right);
                     move_right();
                 }
             }
         }
         else {
             console.log("rechts raus");
         }
     }
 }

 */
function show_position() {
    console.log(move_x_int +" + "+move_y_int);
}

 document.addEventListener("keydown", check_key);

 function check_key(e) {
    
        // defining contitions for movement

        let xCondition = move_x_int / move_value;
        let yCondition = move_y_int / move_value;


    


    let pressedkey = e.key;
     switch (pressedkey) 
     {
        case "ArrowUp":
            if (yCondition>0)
            {
            direction = "negative"; 
            document.getElementById('character1_ID').src = "src/images/cat_back_standing_black.png";
            move_character1("y", move_y_int, "src/images/cat_back_moving_black.png", "src/images/cat_back_standing_black.png");
            move_y_int = move_y_int - move_value;
            yCondition--;
            console.log("x: "+xCondition+" - y: "+yCondition);
            break;
        }
        else
        {
            console.log("out of bounds");
            break;
        }
        case "ArrowDown":

            direction = "positive"
            if (yCondition<9) 
        {
            document.getElementById('character1_ID').src = "src/images/cat_front_standing_black.png";
            move_character1("y", move_y_int, "src/images/cat_front_moving_black.png", "src/images/cat_front_standing_black.png");
            move_y_int = move_y_int + move_value;
            yCondition++;
            console.log("x: "+xCondition+" - y: "+yCondition);
            break;
        }
        else
        {
            console.log("out of bounds");
            break;
        }
        case "ArrowLeft":
            
            if (xCondition>0) 
        {
            direction = "negative"; 
            document.getElementById('character1_ID').src = "src/images/cat_left_standing_black.png";
            move_character1("x", move_x_int, "src/images/cat_left_moving_black.png", "src/images/cat_left_standing_black.png");
            move_x_int = move_x_int - move_value;
            xCondition--;
            console.log("x: "+xCondition+" - y: "+yCondition);
            break;
        }
        else
        {
            console.log("out of bounds");
            break;
        }
        case "ArrowRight":
            
            if ( xCondition<9) 
        {
            direction = "positive"
            document.getElementById('character1_ID').src = "src/images/cat_right_standing_black.png";
            move_character1("x", move_x_int, "src/images/cat_right_moving_black.png", "src/images/cat_right_standing_black.png");
            move_x_int = move_x_int + move_value;
            xCondition++;
            console.log("x: "+xCondition+" - y: "+yCondition);
            break;
        }
        else
        {
            console.log("out of bounds");
            break;
        }
     }
 }


//move animation


let delay_duration = 50;
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function move_character1(axis, position, moving_image, standing_image) {

    let move_property = axis === "x" ? "--move_x" : "--move_y";
    let intermediate_position = position;
    let directionMultiplier = (direction === "positive") ? 1 : -1;
    

    // fluent motion part

    intermediate_position = position + ((move_value / 3 )*directionMultiplier);

    document.documentElement.style.setProperty(move_property, intermediate_position + "px");
    document.getElementById("character1_ID").src = moving_image;

    await delay(delay_duration);

    intermediate_position = intermediate_position + ((move_value / 3 )*directionMultiplier);
    document.documentElement.style.setProperty(move_property,  intermediate_position + "px");

    await delay(delay_duration);

    // back to standing still
    intermediate_position = intermediate_position + ((move_value / 3 )*directionMultiplier);
    
    document.getElementById("character1_ID").src = standing_image;
    document.documentElement.style.setProperty(move_property, intermediate_position + "px");
}