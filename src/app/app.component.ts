import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	course$ : FirebaseListObservable<any[]>;
	singleCourse$;

	constructor(private db : AngularFireDatabase) {
		this.course$ = db.list('/courses');
		this.singleCourse$ = db.object('/courses/1');
	}

	addItem( course : HTMLInputElement ) {
		this.course$.push(course.value).then(function(){

		})
		course.value = '';
	}

	updateItem(course) {
		this.db.object('/courses/'+course.$key).set(course.$value +" Update");
	}

	deleteItem(course) {
		this.db.object('/courses/' + course.$key).remove().then(
			(response) => console.log('deleted')
		)
	}
}
