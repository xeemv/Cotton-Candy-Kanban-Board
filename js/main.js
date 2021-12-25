import kanbanAPI from "./api/kanbanAPI.js";
/* 
- importing the api class file
- import kanbanAPI from "./api/kanbanAPI."; --> how it will import like
    - ** you must add .js at the of the ./api/kanbanAPI part. **
*/
console.log(kanbanAPI.getItems(1));
/*
- when testing this out, the console log will not print anything
- per tutorial, will need to comment out everything in the html file from code line 18 - 36
    - basically anything under the kanban class
- in your browser:
    - look for storage or check under application for storage
    - look for 'local Storage'
    - ** at this point, there is no key in the local storage which we need to add.**
*/