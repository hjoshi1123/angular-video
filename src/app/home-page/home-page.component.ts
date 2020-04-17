import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { NguCarouselConfig } from '@ngu/carousel';
import videojs from 'video.js';
import { NguCarousel, NguCarouselStore, NguCarouselConfig } from '@ngu/carousel';



@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    //   styleUrls: ['./app.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
    title = 'Angular demo app';

    imgags = [
        '../../assets/Images/BMF-Logo.png',
        '../../assets/Images/BMF-Logo.png',
        '../../assets/Images/BMF-Logo.png',
        '../../assets/Images/BMF-Logo.png'
    ];
    public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
    public carouselTiles = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    };
    public carouselTile: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
        slide: 3,
        speed: 250,
        point: {
            visible: true
        },
        load: 2,
        velocity: 0,
        touch: true,
        easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };

    constructor() { }
    ngAfterViewInit() {
        var myPlayer = videojs('my-video');

        myPlayer.src({ type: 'video/mp4', src: '../../assets/Videos/eighteen-mb-video-sample.mp4' });
        // myPlayer.ready(function() {
        //    // tech() will error with no argument
        //    var tech = myPlayer.tech({IWillNotUseThisInPlugins: true});
        // });
    }

    ngOnInit() {
        this.carouselTileItems.forEach(el => {
            this.carouselTileLoad(el);
        });




    }

    onChangeVideo(vidIdx: number) {
        var myPlayer = videojs('my-video');
        if (vidIdx == 1) {
            myPlayer.src({ type: 'video/mp4', src: '../../assets/Videos/eighteen-mb-video-sample.mp4' });
        } else if (vidIdx == 2) {
            myPlayer.src({ type: 'video/mp4', src: '../../assets/Videos/big-buck-bunny.mp4' });
        } else if (vidIdx == 3) {
            myPlayer.src({ type: 'video/mp4', src: '../../assets/Videos/1280.mp4' });
        }
    }

    public carouselTileLoad(j) {
        // console.log(this.carouselTiles[j]);
        const len = this.carouselTiles[j].length;
        if (len <= 30) {
            for (let i = len; i < len + 15; i++) {
                this.carouselTiles[j].push(
                    this.imgags[Math.floor(Math.random() * this.imgags.length)]
                );
            }
        }
    }

    // ngOnInit() {
    //     this.carouselTile = {
    //       grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    //       slide: 1,
    //       speed: 400,
    //       interval: {
    //         timing: 3000,
    //         initialDelay: 1000
    //       },
    //       point: {
    //         visible: true
    //       },
    //       load: 2,
    //       loop: true,
    //       touch: true
    //     };
    //   }

    /* It will be triggered on every slide*/
    onmoveFn(data: NguCarouselStore) {
        console.log(data);
    }

}
