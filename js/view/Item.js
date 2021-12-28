export default class Item{
    constructor (id, content) {
        this.elements = {};
		this.elements.root = Item.createRoot();
		this.elements.input = this.elements.root.querySelector(".kanban__item-input");

       
		this.elements.root.dataset.id = id;
		this.elements.input.textContent = content;
		this.content = content;


        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim();

            console.log(this.content);
            console.log(newContent);
        };


        this.elements.input.addEventListener("blur", onBlur);
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

- code line 13:
    - const onBlur = () => { ---->
        - this will give the user the ability to update the content of a single item
*/