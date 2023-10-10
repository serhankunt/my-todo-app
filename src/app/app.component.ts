import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styles: [`
    .action-buttons button {
      display: block;
      margin-bottom: 5px; /* Butonlar arasında boşluk bırakmak için */
    }
  `],
  template: `
    <h1>My todo App</h1>
    <input id="input" [(ngModel)]="work" type="text">
    <button (click)="addToDo()">Save</button>
    <hr>
    <ul>
        <li *ngFor="let todo of todos; let i = index">{{todo}}
          <div class="action-buttons"><button (click)= "deleteToDo(i)">Sil</button>
          <button  (click)="startUpdate(i)">Güncelle</button></div>
          <div *ngIf="updatingIndex === i ">
            <input [(ngModel)]="updatedToDo" type="text">
            <button (click)="updateToDo()">Güncellemeyi Tamamla</button>
          </div>
        
        </li>
        
    </ul>`,
})
export class AppComponent {
  work:string = "";
  todos :string[] = [];
  updatingIndex : number | null =null ;
  updatedToDo : string = "";
  

  addToDo(){
    this.todos.push(this.work);
    this.work = '';
  }
  deleteToDo(index:number){
    this.todos.splice(index,1);
    this.work='';
  }
  startUpdate(index:number){
    this.updatingIndex = index;
    this.updatedToDo = this.todos[index];
  }
  updateToDo(){
   if(this.updatingIndex !==null){
    this.todos[this.updatingIndex]= this.updatedToDo;
    this.updatingIndex = null;
    this.updatedToDo = "";

   }
  }
}
