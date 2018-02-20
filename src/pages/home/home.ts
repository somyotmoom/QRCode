import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }  
  
  encodeText(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodeData).then((encodedData) => {

        console.log(encodedData);
        this.encodedData = encodedData;

    }, (err) => {
        console.log("เกิดข้อผิดพลาด : " + err);
    });                 
}

scan(){
  this.options = {
      prompt : "สแกนรหัส QR Code ของคุณ "
  }
  this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
  }, (err) => {
      console.log("เกิดข้อผิดพลาด : " + err);
  });         
}    

}
