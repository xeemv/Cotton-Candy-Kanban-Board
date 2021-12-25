import kanbanAPI from "./api/kanbanAPI.js";
/* 
- importing the api class file
- import kanbanAPI from "./api/kanbanAPI."; --> how it will import like
    - ** you must add .js at the of the ./api/kanbanAPI part. **

- when testing this out, the console log will not print anything
- per tutorial, will need to comment out everything in the html file from code line 18 - 36
    - basically anything under the kanban class
- in your browser:
    - look for storage or check under application for storage
    - look for 'local Storage'
    - ** at this point, there is no key in the local storage which we need to add.**


- test:
- first test: console.log(kanbanAPI.getItems(1));
- second test: console.log(kanbanAPI.insertItem(2, "I am new!"));
    - console printed: Object { id: 154128, content: "I am new!" }
                        content: "I am new!"
​                       id: 154128
*/
