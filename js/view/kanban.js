/*  
- this is the view of the kanban board or the user interface
    - what the user will interact with
*/

export default class kanban {
    constructor(root) {
        this.root = root;


        kanban.columns().forEach(column => {
            /* todo: create an instance of column class
                - basically this means that we need to have a new javascript class to define the user interface for an individual column that is displayed to the user.
            */
        });
    }

    static columns(){
        return[
            {
                id: 1,
                title: "Not Started"
            },
            {
                id: 1,
                title: "In Progress"
            },
            {
                id: 1,
                title: "Completed"
            },
        ]
    }


}

/*
- code line starting at line 6:
    - using root:
        - means we will take the kanban div container from the html file will be generated using this js file
            - the kanban div will hold all of the kanban 

- code line 8:
    - this.root = root; -->
        - just to keep a reference

- code line 11:
    - static method called columns that will return the array of every column the user has
        - along w/ the name and title
    - ** Per tutorial, it was mentioned that it would be better to retrieve the title from the server side
        - however, we are keeping it simple using the data stored in the local server **

*/