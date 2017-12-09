import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	course$;

	constructor(db : AngularFireDatabase) {
		this.course$ = db.list('/courses');
	}
}
