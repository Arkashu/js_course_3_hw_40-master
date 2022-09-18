'use strict';
( function (){
    document.querySelector('#form').addEventListener('submit', (event) => {
            event.preventDefault();
            const {target: form} = event;
             const inputs = form.querySelectorAll('input, select, textarea');
            const formData = {};
            for (const item of inputs) {
            const {name, value} = item;
            formData[name] = value;
        }
        localStorage.setItem('userInfo', JSON.stringify(formData))
        window.open('http://localhost:63342/js_course_3_hw_40-master/js_course_3_hw_40-master/ulList.html?_ijt=ov0nlc59qsv05abc0lejeuocd&_ij_reload=RELOAD_ON_SAVE')
        
   }
   )
})()
