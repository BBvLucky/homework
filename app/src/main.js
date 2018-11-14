import './style.scss'
import '../../dist/index.html'
import { showName } from './show_devs_name.js'
import { displayDate as dispDate } from './disp_component'

showName()

const showDate = new dispDate
showDate.createElem()
const button = document.querySelector('button')

button.onclick = function () {
    showDate.showDate()
}