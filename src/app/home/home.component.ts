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

  private workExperience: String[];
  private workExperienceKeyVal = new Map();
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

    this.workExperience = [
      'Sr. Manager / Facebook / Aug, 2013 – present',
      'Manager / Amazon / July, 2012 – Aug, 2013',
      'Executive / MySpace / Apr, 2010 – Mar, 2011',
      'Sr. Executive / Google / May, 2011 – June, 2012'
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
    this.workExperienceKeyVal.set('Sr. Manager / Facebook / Aug, 2013 – present', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor dapibus ipsum ut efficitur. Aliquam feugiat nec sem dapibus blandit. Nam non faucibus urna, at pulvinar nisl. Aliquam erat volutpat. Ut eget aliquet diam. In et Lorem ipsum dolor sit    amet, consectetur adipiscing elit. Nam porttitor dapibus ipsum ut efficitur.');
    this.workExperienceKeyVal.set('Manager / Amazon / July, 2012 – Aug, 2013', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor dapibus ipsum ut efficitur. Aliquam feugiat nec sem dapibus blandit. Nam non faucibus urna, at pulvinar nisl. Aliquam erat volutpat. Ut eget aliquet diam. In et Lorem ipsum dolor sit   amet, consectetur adipiscing elit. Nam porttitor dapibus ipsum ut efficitur.');
    this.workExperienceKeyVal.set('Executive / MySpace / Apr, 2010 – Mar, 2011', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor dapibus ipsum ut efficitur. Aliquam feugiat nec sem dapibus blandit. Nam non faucibus urna, at pulvinar nisl. Aliquam erat volutpat. Ut eget aliquet diam. In et Lorem ipsum dolor sit   amet, consecteturgdfgdjf jfghjadj gfagdhf asgfgasjd fgasgfj vfjg safsagf sfagf gyfgdjf gfsfgdaga gfsgfjgaj fgsfgsfg gffasgf sfdgfgjg ygfsagfj fsafdgjuasv sadfsfd sdafgtfdsa sfdafuyfdgwuy sfafufasuyf adipiscing elit. Nam    porttitor dapibus ipsum ut efficitur.');
    this.workExperienceKeyVal.set('Sr. Executive / Google / May, 2011 – June, 2012', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor dapibus ipsum ut efficitur. Aliquam feugiat nec sem dapibus blandit. Nam non faucibus urna, at pulvinar nisl. Aliquam erat volutpat. Ut eget aliquet diam. In et Lorem ipsum dolor sit   amet, consectetur adipiscing elit. Nam porttitor dapibus ipsum ut efficitur.');
  }

  private getValue(key) {
    return this.keyValue.get(key);
  }

  private getExpValue(key) {
    return this.workExperienceKeyVal.get(key);
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

  dropExperience(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.workExperience, event.previousIndex, event.currentIndex);
  }

}
