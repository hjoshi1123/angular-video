import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector : 'videoworkout',
  templateUrl: './videoworkout.component.html',
 styleUrls: ['./videoworkout.component.css']
})
export class VideoworkoutComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.product = videoPath[+params.get('videoId')];
    // });
  }

}
