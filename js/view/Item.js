export default class Item{
    constructor (id, content) {
        this.elements = {};
		this.elements.root = Item.createRoot();
		this.elements.input = this.elements.root.querySelector(".kanban__item-input");

       
		this.elements.root.dataset.id = id;
		this.elements.input.textContent = content;
		this.content = content;
    }

    static createRoot(){
        const range = document.createRange();


        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban__item" draggable="true">
                <div class="kanban__item-input" contenteditable></div>
            </div>
        `).children[0];
    }
}


/*
- creating a root like the column.js file

- code line 12 - 18 is taken from column.js file.
    - however, changed line 13 - 15
        - this will contain the content editable input
    - draggable="true" from line 13 --> will help w/ drag n drop functionality

- code line 5:
    - this.elements.input = this.elements.root.querySelector(".kanban__item-input"); -->
        - is the kanban item input to get a reference to that particular html element
*/