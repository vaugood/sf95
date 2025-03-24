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
}
