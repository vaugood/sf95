import { LightningElement } from 'lwc';

export default class Desktop extends LightningElement {
    toggleStartButton() {
        const startMenuCnt = this.template.querySelector('.start-menu-container');
        const startCnt = this.template.querySelector('.start-button-container');
        const startBtn = this.template.querySelector('.start-button');
        const startBtnCnt = this.template.querySelector('.start-button-content');
        startMenuCnt.classList.toggle('active');
        startCnt.classList.toggle('active');
        startBtn.classList.toggle('active');
        startBtnCnt.classList.toggle('active');
    }

    initializeWindiv() {
        console.log('asdf')
        this.template.querySelector('.windivOrigin').innerHTML = "<div class='windiv'><div class='windiv-inner-container'><div class='windiv-header'>Leads<div class='closeWindiv' onclick='closeWindiv()'>x</div></div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum augue purus, euismod sit amet sollicitudin et, efficitur at orci. Ut lobortis tortor vitae mauris convallis pretium. In sit amet nisi libero. Integer rutrum mollis sapien eu eleifend. Aenean in dolor sit amet ante consequat gravida id ac velit. Nullam euismod mollis purus, at ultrices mi interdum eu. Sed accumsan interdum nulla vitae luctus. Sed scelerisque lectus erat, nec elementum nisi volutpat id. Nunc euismod arcu eleifend feugiat mollis. Nullam a porta libero. Fusce maximus purus risus, sit amet suscipit turpis volutpat sit amet. Proin luctus, risus nec dapibus vestibulum, massa erat venenatis risus, at sodales lectus augue ac velit.</p></div></div>";
        // toggleStartButton();
        dragElement(this.template.querySelector('.windiv'));
    }

    closeWindiv() {
        this.template.querySelector('.windivOrigin').innerHTML = '';
    }

    dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (this.template.querySelector('.windiv-header')) {
            this.template.querySelector('.windiv-header').onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            this.template.onmouseup = closeDragElement;
            this.template.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
            elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        }

        function closeDragElement() {
            this.template.onmouseup = null;
            this.template.onmousemove = null;
        }
    }
}
