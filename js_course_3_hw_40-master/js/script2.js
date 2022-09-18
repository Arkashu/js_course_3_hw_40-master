'use strict';
( function (){
    document.addEventListener('DOMContentLoaded', (evt) => {
        const h1Creator = document.createElement('h1');
        h1Creator.innerText = 'User information:';
        document.body.append(h1Creator);
        if (localStorage){
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const ul = document.createElement('ul');
            for (const ulKey in userInfo) {
                const li = document.createElement('li');
                li.innerText = ulKey + ' : ' + userInfo[ulKey];
                ul.append(li)
            }
            document.body.append(ul)
        } else {
            alert('Error! No information!')
        }
    })
})()