/*
 * JavaScript
 */

//alert("here");

blocks = document.getElementsByClassName("myblock"); //get all the blocks (global)

function get_rand_off(){
	return Math.floor(Math.random() * 5) - 2 //rand from -2 to 2
	//return Math.floor(Math.random() * 7) - 3 //rand from -3 to 3
	//return Math.floor(Math.random() * 11) - 5 //rand from -5 to 5
}

function update_blocks() { 
	for (var i=0; i<blocks.length; i++){
		//console.log("In update blocks");
    	b_curr=blocks[i]; 
    	//console.log(b_curr)
    	//console.log(b_curr.offsetLeft); 
    	//console.log(b_curr.offsetTop);
    	var got_rand_left = get_rand_off();
    	var got_rand_top = get_rand_off();
    	//console.log(got_rand);
    	var upd_int_left=b_curr.offsetLeft + got_rand_left;
    	var upd_str_left=upd_int_left.toString()+"px";
    	b_curr.style.left=upd_str_left;
	
	    var upd_int_top=b_curr.offsetTop + got_rand_top;
    	var upd_str_top=upd_int_top.toString()+"px";
    	b_curr.style.top=upd_str_top;
	}
}

window.setInterval(update_blocks,30);
//window.setTimeout(update_blocks,1000);

