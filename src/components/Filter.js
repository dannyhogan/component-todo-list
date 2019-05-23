import Component from './Component.js';

class Filter extends Component {
    
    render() {
        const dom = this.renderDOM();

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <section>
                <input type="text" id="filter" placeholder="Search todo list:">
            </section>
        `;
    }
}

export default Filter;