document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM is fully loaded');

    const btn = document.getElementById('document-loaded-Event');
    btn.addEventListener('click', () =>{
        console.log('clicked');
    })

});

document.addEventListener('load', (event) => {
    console.log('The page is fully loaded');
    const logo = document.getElementById('')
});

document.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});

document.addEventListener('unload', (event) => {
    // send analytic data
});