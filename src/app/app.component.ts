import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
	courses : any[];
	subscribtions : Subscription;

	constructor(db : AngularFireDatabase) {
		this.subscribtions = db.list('/courses').subscribe(
			(response) => {
				this.courses = response;
			}
		);
	}

	ngOnDestroy() {
		this.subscribtions.unsubscribe();
	}
}
