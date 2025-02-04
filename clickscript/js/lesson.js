code = `<div class="header" style="top: 0; left: 0; position: fixed; width: 100%; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
<style>
    .display {
        height: 50px;
    }
    .display .exit {
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 10px;
        width: fit-content;
        height: fit-content;
        margin-left: 10px;
        font-size: 30px;
        color: black;
        text-decoration: none;
    }
    .display .exit:hover {
        background-color: rgb(223, 223, 223);
    }
    .progress {
        transform: translateY(-20px);
        width: 500px;
        margin: auto;
    }
    .progress-bar-empty {
        position: absolute;
        width: 500px;
        padding: 5px;
        background-color: lightgray;
        border-radius: 10px
    }
    .progress-bar-filling {
        position: absolute;
        width: 0px;
        padding: 5px;
        background-color: rgb(7, 147, 147);
        border-radius: 10px
    }
</style>
<div class="display" style="background-color: white; box-shadow: rgb(57, 57, 57) 0 -2px 10px;">
    <a href="../../clickscript.html" class="exit">x</a>
    <div class="progress">
        <div class="progress-bar-empty"></div>
        <div class="progress-bar-filling"></div>
    </div>
</div>
</div>`;
var div = document.createElement('div');
div.innerHTML = code;
document.body.appendChild(div);

div = document.createElement('div.footer');
div.innerHTML = `<div class="footer"><div class="next">Next</div></div>`;
document.body.appendChild(div);


const doc = document;
const nextButton = doc.querySelector('.next');
const progressBar = doc.querySelector('.progress-bar-filling');
var contentParent = doc.querySelector('.sections');
var content = contentParent.querySelectorAll('.section');
var index = 0;

content.forEach(e => contentParent.removeChild(e));
next();

doc.addEventListener('keypress', () => {
    next();
});
nextButton.addEventListener('click', () => {
    next();
});

function next() {
    if (index < content.length) {
        updateProgress();
    }
    contentParent.appendChild(content[index++]);
    if (index == content.length) {
        nextButton.addEventListener('click', () => {
            window.location.href = '../../clickscript.html';
        });
        nextButton.innerHTML = `Finish Lesson`;
    }
}

function updateProgress() {
    var progress = index / (content.length - 1);
    var width = progress * 500;
    progressBar.style.width = width + 'px';
    console.log('progress updated: ' + progress);
}

