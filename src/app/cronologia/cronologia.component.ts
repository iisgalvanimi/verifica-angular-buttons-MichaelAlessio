
import { Component, Input, OnInit } from '@angular/core';
@Component({
selector: 'app-cronologia',
templateUrl: './cronologia.component.html',
styleUrls: ['./cronologia.component.css']
})
export class CronologiaComponent implements OnInit {
@Input() ultimo:string[] = [];
constructor() { }
ngOnInit(): void {
}
}
