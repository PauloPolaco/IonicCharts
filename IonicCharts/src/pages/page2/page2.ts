import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2
{
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
  }

  onLink(url: string)
  {
    window.open(url);
  }
}
