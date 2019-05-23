import Component from './Component.js';

class Filter extends Component {
    
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('#textFilter');

        input.addEventListener('input', () => {
            this.props.onFilter({ 
                task: input.value
            });
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <div id="filters">
                <section>
                    <input type="text" id="textFilter" placeholder="Search todo list:">
                </section>
                <section>
                    <input type="checkbox">Complete
                    <input type="checkbox">Incomplete
                </section>
            </div>
        `;
    }
}

export default Filter;