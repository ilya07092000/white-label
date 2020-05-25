document.addEventListener('click', showContent);

function showContent() {
    let btn = event.target.dataset.show;
    event.preventDefault();
    if(!btn) return;

    let activeBlocks = document.querySelectorAll('.active');
    for(let item of activeBlocks) {
        item.classList.remove('active')
    }
    let blockId = document.querySelector(btn);
    blockId.classList.add('active');
}