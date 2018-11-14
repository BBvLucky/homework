// export const displayComponent = () => {
//     const component = document.createElement('button');
//     component.innerHTML = 'Нажми меня';
//     document.querySelector('body').appendChild(component);

// }
export class displayDate {
    createElem() {
        const component = document.createElement('button');
        component.innerHTML = 'Нажми меня';
        document.querySelector('body').appendChild(component);
    }
    showDate() {
        console.log(new Date())
    }
}