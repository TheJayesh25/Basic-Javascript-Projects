const changeColor = (id) => {
    // const color = document.querySelector(`#${id}`);
    if (id === 'reset'){
        // console.log(id);
        const elem = document.querySelector(`body`);
        elem.style.backgroundColor = "white";
    }
    else{
        // console.log(id);
        const color = document.querySelector(`body`);
        color.style.backgroundColor = id;
    }

}