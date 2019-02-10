counter = 1;

function spawn_block() {
    blocks = document.getElementById('blocks');
    let block = document.createElement('div');
    let prev_hash = test_chain.chain[counter].prevblock_stamp;
    let block_time = test_chain.chain[counter].block_time;
    function input_data() {
        var input = document.getElementById('block_data').value;
        return input;
    };
    if (input_flag != 0) {
        block_data = input_data();
    } else {
        block_data = test_chain.chain[counter].block_data;
    }
        
    let block_hash = test_chain.chain[counter].stamp;
    html = `<div class='block_index' id='block_index` + counter + `'>BLOCK ` + counter + `</div>
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
    block.id = 'block' + counter;
    counter += 1;
    block.classList.add('block');
    block.innerHTML = html;
    blocks.appendChild(block);
}

let zoom_param = 1;
function zoom_out() {
    if (zoom_param >= 0.05) {
        blocks.style.transition = 400 + 'ms';
        blocks.style.transform = 'scale(' + zoom_param + ')';
        zoom_param -= 0.05;
    }    
}
function zoom_in() {
    blocks.style.transition = 400 + 'ms';
    blocks.style.transform = 'scale(' + zoom_param + ')';
    zoom_param += 0.05;
}

