export class Init {
    load() {
      if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
        console.log('No Todos Found... Creating...');
        let todos:any = [];
  
        localStorage.setItem('todos', JSON.stringify(todos));
        return 
      } else {
        console.log('Found Todos...');
      }
    }
  }