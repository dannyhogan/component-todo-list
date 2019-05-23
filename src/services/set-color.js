function setColor(app) {
    const colorData = localStorage.getItem('color');
    const color = JSON.parse(colorData);
    app.style.background = color;

}

export default setColor;