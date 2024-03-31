import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qrData: any;
  qrError: any;
  qrLoaded: boolean = false;
  constructor() {}

  ngOnInit() {
    this.qrData = '';  // Initialize qrData
  }

  generateQR() {
    if (this.qrData.length === 0) {
      this.qrError = 'Please enter a URL.';
      return;
    }

    this.qrError = '';  // Clear any previous errors
    this.qrLoaded = true;
  }
}
