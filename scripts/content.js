const url = window.location.href;
if(url.includes("problemset/problem")){
    console.log(url);
    const regex = /\d{1,4}\/[A-Z]\d?/
    const pid = url.match(regex);
    if(pid){
        window.localStorage.setItem('pid', pid[0]);
    }
}else if(url.includes("problemset/submit")){
    const pid = localStorage.getItem('pid');
    if(pid){
        const submitButton = document.querySelector('input[name="submittedProblemCode"]');
        submitButton.value = pid.replace('/', '');
        const scroller = document.querySelector('.ace_scroller');
        if (scroller) {
            scroller.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        }
        window.localStorage.removeItem('pid');
    }
}
