import Component from './Component.js';

class ColorPicker extends Component {

    render() {
        const dom = this.renderDOM();
        const changeColor = this.props.changeColor;
        const colorPicker = dom.querySelector('input');

        colorPicker.addEventListener('change', () => {
            const colorData = JSON.stringify(colorPicker.value);
            localStorage.setItem('color', colorData);
            changeColor();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section id="color">
                <label>Select a color!
                    <input type="color">
                </label>
            </section>
        `;
    }
}

export default ColorPicker;