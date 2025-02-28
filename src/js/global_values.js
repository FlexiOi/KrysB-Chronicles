// set banned squares

let banned_squares_right = [{
    x: 5,
    y: 1
}
];
let banned_squares_left = [{
    x: 3,
    y: 3
}
   
];
let banned_squares_down = [{
    x: 4,
    y: 2
}
 ];
let banned_squares_up = [{
    x: 4,
    y: 4
}
 ];

// get root
var r = document.querySelector(':root');
var rs = getComputedStyle(r);

// set map values
size_map = 820;
number_of_squares = 10;
move_value = size_map / number_of_squares;

// get move_x
let move_x = rs.getPropertyValue('--move_x');
move_x = move_x.replace("px", "");
move_x_int = parseInt(move_x);

// get move_y
let move_y = rs.getPropertyValue('--move_y');
move_y = move_y.replace("px", "");
move_y_int = parseInt(move_y);