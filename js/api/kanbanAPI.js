/* 
- This js file will contain all the local storage components
*/

export default class kanbanAPI{

}
/* 
- code line 6 will allow us to import the class into the other js files
- line 6 will contain a bunch of static methods
- will contain functions to interact w/ the local storage directly
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
