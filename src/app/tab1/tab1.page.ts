import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [FormsModule, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  count = 0
  name = ""

  constructor() {}

  onIncrement() {
    console.log('click')
    console.log(this.name)
    this.count++
  }

  onReset() {
    console.log('reset')
    this.count = 0
  }
}
