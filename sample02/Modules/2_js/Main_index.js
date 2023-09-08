$(function() {
    $(".tabcontent > div").hide();
    $(".tabnav a")
        .click(function() {
            $(".tabcontent > div").hide().filter(this.hash).fadeIn();
            $(".tabnav a").removeClass("active");
            $(this).addClass("active");
            return false;
        })
        .filter(":eq(0)")
        .click();
});

function TextWriter() {
    this.words = ["World!", "Code!", "Dev!"];
    this.index = 0;
    this.text = "";
    this.element = document.getElementsByClassName("content")[0];
    this.timeType = 100;
    this.timeDelete = 150;
    this.timeAwait = 1000;
    this.isDeleting = false;
}

TextWriter.prototype.typetype = function() {
    let idx = this.index % this.words.length;
    let currWord = this.words[idx];
    let speed = this.timeType;

    if (this.isDeleting) {
        speed = this.timeDelete;
        this.text = currWord.substring(0, this.text.length - 1);

        if (this.text.length === 0) {
            speed = 500;
            this.isDeleting = false;
            this.index = (this.index + 1) % this.words.length;
        }
    } else {
        this.text = currWord.substring(0, this.text.length + 1);

        if (this.text === currWord) {
            speed = this.timeAwait;
            this.isDeleting = true;
        }
    }

    this.element.innerHTML = `<span class="text">${this.text}</span>`;

    setTimeout(() => this.typetype(), speed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
    window.TextWriter = TextWriter;
    const t = new TextWriter();
    t.typetype();
}