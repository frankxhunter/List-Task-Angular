import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  listTasks: string[] = [];
  newTask = '';
  
  private _tasksServices = inject(TasksService)

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    this.listTasks = this._tasksServices.getTasks();
  }
  deleteTask(index: number){
    this._tasksServices.deleteTask(index)
    this.refresh();
  }
  addTask(){
    if(this.newTask){
      this._tasksServices.addTask(this.newTask)
      this.newTask = ''
      this.refresh();
    }
  }

}

