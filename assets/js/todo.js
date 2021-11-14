class TodoList {
    constructor() {
        this.data = [];
    }
    getTodo() {
        return localStorage.getItem("todolist");
    }

    saveTodo(postdata) {
        var oldData = localStorage.getItem("todolist");
        if(oldData === null) {
          this.data.push(postdata);
          localStorage.setItem("todolist", JSON.stringify(this.data));
        } else {
          oldData = JSON.parse(oldData);
          if(oldData && oldData.length > 0) {
            for(var i=0;i<oldData.length;i++) {
              this.data.push(oldData[i]);
            }
          }
          this.data.push(postdata);
          localStorage.setItem("todolist", JSON.stringify(this.data));
        }
    }

    deleteTodo(id) {
      var oldData = localStorage.getItem("todolist");
      oldData = JSON.parse(oldData);
      if(oldData && oldData.length > 0) {
        for(var i=0;i<oldData.length;i++) {
          if(id != i) {
              this.data.push(oldData[i]);
          }
        }
      }
      localStorage.setItem("todolist", JSON.stringify(this.data));
    }
}
