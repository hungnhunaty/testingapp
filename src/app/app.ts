import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularProject');
  message = "Hello World!";
  count = 0;

  users = ['Khoa', 'Uyen', 'Hoang', 'Long']

  handleEvent(event: Event){
    console.log(event.type);
  }

  answer1: string = 'Có';
  answer2: string = 'Không';

  setColor: boolean = true;
  handleYesAnswer(event: Event){
    if(event.type == "mouseenter"){
      this.answer2 = "Có";
      this.answer1 = "Không";
      this.setColor = true;
    }
    else if(event.type == "mouseleave"){
      this.answer2 = "Không";
      this.answer1 = "Có";
      this.setColor = false;
    }
  }

  showAlert(){
    alert("Cảm ơn bé đã trả lời thiệt lòng hí hí hí 🎉🎉🎉 😎😎😎");
  }
}
