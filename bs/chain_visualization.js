main_counter = 1;
side_counter = 1;

function spawn_block() {
    blocks = document.getElementById('blocks');
    let block = document.createElement('div');
    let prev_hash = main_chain.chain[main_counter].prevblock_stamp;
    let block_time = main_chain.chain[main_counter].block_time;
    function input_data() {
        var input = document.getElementById('block_data').value;
        return input;
    };
    if (input_flag != 0) {
        block_data = input_data();
    } else {
        block_data = main_chain.chain[main_counter].block_data;
    }
        
    let block_hash = main_chain.chain[main_counter].stamp;
    html = `<div class='block_index' id='block_index` + main_counter + `'>BLOCK ` + main_counter + `</div>
        <div class='prev_hash'>
            <span class='block_part'>PREVIOUS BLOCK HASH:</span><br>`
            + prev_hash +
        `</div>
        <div class='block_time'>
            <span class='block_part'>TIMESTAMP:</span><br>`
             + block_time +
        `</div>
        <div class='block_data'>
            <span class='block_part'>DATA:</span><br>`
            + block_data +
        `</div>
        <div class='block_hash'>
            <span class='block_part'>HASH:</span><br>`
            + block_hash +
        `</div>`;
    block.id = 'block' + main_counter;
    main_counter += 1;
    block.classList.add('block');
    block.innerHTML = html;
    blocks.appendChild(block);
}

position_flag = 0;
function spawn_sideblock() {
    side_blocks = document.getElementById('side_blocks');
    let block = document.createElement('div');
    let prev_hash = side_chain.side_chain[side_counter].prevblock_stamp;
    let block_time = side_chain.side_chain[side_counter].block_time;
    function input_data() {
        var input = document.getElementById('block_data').value;
        return input;
    };
    if (input_flag != 0) {
        block_data = input_data();
    } else {
        block_data = side_chain.side_chain[side_counter].block_data;
    }
        
    let block_hash = side_chain.side_chain[side_counter].stamp;
    html = `<div class='block_index' id='block_index` + side_counter + `'>BLOCK ` + side_counter + `</div>
        <div class='prev_hash'>
            <span class='block_part'>PREVIOUS BLOCK HASH:</span><br>`
            + prev_hash +
        `</div>
        <div class='block_time'>
            <span class='block_part'>TIMESTAMP:</span><br>`
             + block_time +
        `</div>
        <div class='block_data'>
            <span class='block_part'>DATA:</span><br>`
            + block_data +
        `</div>
        <div class='block_hash'>
            <span class='block_part'>HASH:</span><br>`
            + block_hash +
        `</div>`;
    block.id = 'side_block' + side_counter;
    
    side_counter += 1;
    block.classList.add('block');
    block.innerHTML = html;
    if (position_flag == 0) {
        side_blocks.style.left = (document.getElementById('blocks').lastChild).offsetLeft + 284 + 'px'; 
        position_flag += 1;
    }
    side_blocks.appendChild(block);
}




chains = document.getElementById("chains");
let zoom_param = 1;
function zooming_out(on_off) {
    if (on_off == 0) {
        if (zoom_param >= 0.1) {
        zoom_out = setInterval(function() {
                chains.style.transition = 50 + 'ms';
                chains.style.transform = 'scale(' + zoom_param + ')';
                zoom_param -= 0.01;
            }, 50);
        }
    } else {
        clearInterval(zoom_out);
    }
}
function zooming_in(on_off) {
    if (on_off == 0) {
        zoom_in = setInterval(function() {
                chains.style.transition = 50 + 'ms';
                chains.style.transform = 'scale(' + zoom_param + ')';
                zoom_param += 0.01;
            }, 50);
    } else {
        clearInterval(zoom_in);
    }
}


