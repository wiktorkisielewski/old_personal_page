main_counter = 1;
side_counter = 1;

var i = 0;
function type_it(text) {
    if (i < text.length) {
        this.innerHTML += text.charAt(i);
        i++;
        setTimeout(type_it, 50);
    }
}; 

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

function merge() {
    merge_conector = document.createElement('div');
    merge_conector.classList.add('merge_conector');
     main_end = blocks.offsetLeft + blocks.offsetWidth;
     side_end = side_blocks.offsetLeft + side_blocks.offsetWidth;
        if (main_end >= side_end) {
            side_blocks.appendChild(merge_conector);
            merge_conector.style.width = (main_end - side_end) + 'px';
            side_blocks.lastChild.classList.add('side_merge');
        } else if (side_end >= main_end) {
            blocks.appendChild(merge_conector);
            merge_conector.style.width = (side_end - main_end) + 'px';
        }
    main_chain.create_block(new block, 'Merged from:' + side_chain.side_chain[((side_chain.side_chain.length) - 1)].stamp);
    spawn_block();
}




chains = document.getElementById("chains");
let zoom_param = 1;
function zooming_out(on_off) {
    if (on_off == 0) {
        if (zoom_param >= 0.1) {
        zoom_out = setInterval(function() {
                blocks.style.transition = 50 + 'ms';
                blocks.style.zoom =  zoom_param;
                side_blocks.style.transition = 50 + 'ms';
                side_blocks.style.zoom =  zoom_param;
                zoom_param -= 0.001;
            }, 5);
        }
    } else {
        clearInterval(zoom_out);
    }
}
function zooming_in(on_off) {
    if (on_off == 0) {
        zoom_in = setInterval(function() {
                blocks.style.transition = 50 + 'ms';
                blocks.style.zoom =  zoom_param;
                side_blocks.style.transition = 50 + 'ms';
                side_blocks.style.zoom =  zoom_param;
                zoom_param += 0.001;
            }, 5);
    } else {
        clearInterval(zoom_in);
    }
}




