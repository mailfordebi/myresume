import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { UtilComponent } from '../util/util.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private name: String = "Debi Prasad Pradhan";
  private mailId: String = "mailfordebi@gmail.com"
  private phoneNo: String = "(+91)-9985393129"
  private address: String = "Madhapur, Hyderabad";
  private s1: String = '<div class="img-div">' + UtilComponent.getImage() + '</div><div class="content-div"><h2>' + this.name + '</h2><p><a href="mailto:' + this.mailId + '">' + this.mailId + '</a></p><p>' + this.phoneNo + '</p><p>' + this.address + '</p></div>';
  private s2: String = '<div><h2>' + this.name + '</h2><p><a href="mailto:' + this.mailId + '">' + this.mailId + '</a></p><p>' + this.phoneNo + '</p><p>' + this.address + '</p></div><div class="img-right-div">' + UtilComponent.getImage() + '</div>';
  private objective: String = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";
  private isLeftSideObjective: boolean = true;
  private isRightSideObjective: boolean = false;
  private resumeInfo: any = [];
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private keyValue = new Map();
  private skill1: String[];
  private skill2: String[];
  private skill3: String[];
  private skill4: String[];
  private timePeriods: String[];
  constructor() { }

  ngOnInit() {
    this.init();
  }
  private init() {
    this.timePeriods = [
      this.s1, ''
    ];
    this.skill1 = [
      'Java',
      'HTML',
      'CSS',
      'JS'

    ];
    this.skill2 = [
      'Spring',
      'Hibernate',
      'Rest'

    ];

    this.skill3 = [
      'Angular',
      'Typescript',
      'Services'
    ];

    this.skill4 = [
      'Web Services',
      'Micro Services',
      'Eclipse'
    ];

    this.fillKeyValue();
  }

  private fillKeyValue() {
    this.keyValue.set('Java', 90);
    this.keyValue.set('HTML', 20);
    this.keyValue.set('CSS', 30);
    this.keyValue.set('JS', 40);
    this.keyValue.set('Spring', 50);
    this.keyValue.set('Hibernate', 60);
    this.keyValue.set('Web Services', 70);
    this.keyValue.set('Rest', 80);
    this.keyValue.set('Micro Services', 90);
    this.keyValue.set('Angular', 85);
    this.keyValue.set('Typescript', 75);
    this.keyValue.set('Services', 65);
    this.keyValue.set('Eclipse', 55);
  }

  private getValue(key) {
    return this.keyValue.get(key);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    if (event.currentIndex == 1) {
      this.timePeriods[0] = '';
      this.timePeriods[1] = this.s2;
      this.isLeftSideObjective = false;
      this.isRightSideObjective = true;
    }
    if (event.currentIndex == 0) {
      this.timePeriods[0] = this.s1;
      this.timePeriods[1] = '';
      this.isLeftSideObjective = true;
      this.isRightSideObjective = false;
    }
  }

  dropSkills(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
