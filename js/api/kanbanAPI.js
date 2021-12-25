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
}
/* 
- to read from the local storage directly
- const json = localStorage.getItem("kanban-data"); --> to get the items of kanban dash data
- if (!json) ---> this means if this is the user's first time in their browser
    - return the default data:
        - will need 3 columns (code line 18)
            - id: 1 --> the in progress column which will contain an empty items array
        - now copy and paste the id & items to make additional columns w/ different names
            - video made only 3, I'm making 4
- default data is code line 18 - 35
*/