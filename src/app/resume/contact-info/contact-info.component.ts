import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @Input() contactInfo;
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private http: HttpClient
  ) {}

  onSubmit() {
    const body = new HttpParams()
    .set('form-name', 'contact')
    .append('name', this.contactForm.value.name)
    .append('email', this.contactForm.value.email)
    .append('subject', this.contactForm.value.subject)
    .append('message', this.contactForm.value.message);
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {
        alert('Your message has been sent!');
      },
      err => {
        if (err instanceof ErrorEvent) {
          // client side error
          console.log(err.error.message);
        } else {
          // backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            console.log('Your message has been sent!');
            alert('Your message has been sent!');
          } else {
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          }
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
