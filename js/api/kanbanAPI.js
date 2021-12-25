/* 
- This js file will contain all the local storage components
*/

export default class kanbanAPI{
    static getItems(columnId){
        const column = read().find(column => column.id == columnId);

        if (!column) {
            return [];
        }
        return column.items;
    }
    static insertItem(columnId, content){
        const data = read();
        const column = data().find(column => column.id == columnId);
        const item = {
            id: Math.floor(Math.random() * 1000000),
            content /* would be content: content, but the short hand method is just "content"*/
        };

        if (!column) {
            throw new Error("Column does not exist.");
        }

        column.items.push(item);
        save(data);
    }
}
/* 
- code line 5 
    - will allow us to import the class into the other js files
- line 6 will contain a bunch of static methods
- will contain functions to interact w/ the local storage directly
- code line 5:
    - dealing with the api that will be getting all of the items inside a particular column
    - static getItems(columnId){} --> static will get items then pass through column Id 
        - this will simply get a reference to the column which the user is trying to receive
    - const column = read().find() --> read from the local storage
        - we will get an array from the find method below
        - grab each column and heck is the column.Id equal to the column Id is being passed into
        - if so, it is going to find it and put it inside the const.
    - column Id is in the read function, i.e. code line 32
    - if (!column) {return [];} --> if there's no column:
        - return an empty array
    - return column.items; --> if item is found, then all is good and return that items array
    - static insertItem(columnId, content){ -->
        - this is so that when you are inserting an item here, you need to know what the column id is
        - const data = read(); --> this will read the data and help find the column which the user is trying to insert into
        - const column = data().find(column => column.id == columnId);
            - this part will be saving the data const into the local storage
            - basically saying data. find (get me) the column wiht the same id which we are passing into the method here
    - const item = { --> the new item to be inserted
        - id: Math.floor(Math.random() * 1000000), --> 
            - this is going to generate a random Id using this method times 1million
            - usually in a real world application, you would generate this id on the server side
                - for this project, we will use client-side javascript
        - content --> w.e the user passes in
    - if (!column) {} --> if the column doesn't exist, an error message will be thrown out
    -  column.items.push(item); --> everything goes well and the column does exist
        - add that item to the bottom of the list
    - save(data); --> this will save the data back to the local storage
*/

function read(){
    const json = localStorage.getItem("kanban-data");

    if (!json){
        return[
            {
                id: 1, 
                items: []   
            },
            {
                id: 2, 
                items: []   
            },
            {
                id: 3, 
                items: []   
            },
            {
                id: 4, 
                items: []   
            },
        ];
    }
    /* 
- to read from the local storage directly
- const json = localStorage.getItem("kanban-data");
    - to get the items of kanban dash data
- if (!json) ---> this means if this is the user's first time in their browser
    - return the default data:
        - will need 3 columns (code line 18)
            - id: 1 --> the in progress column which will contain an empty items array
        - now copy and paste the id & items to make additional columns w/ different names
            - video made only 3, I'm making 4
    - default data is code line 18 - 35 and will load when the user is loading the kanban board for the first time
*/
    return JSON.parse(json);
    /* 
    - this section is when the user is returning to their session or their board
    */
}

function save(data){
    localStorage.setItem("kanban-data", JSON.stringify(data));
}
/* 
- this is the save function starting at code line 54
- the purpose is of this function is returning the data from function read
- localStorage.setItem("kanban-data", JSON.stringify(data));
    - is saying that the local storage will pass through the kanban data through to the JSON stringify then the data and finally save that data.
*/
