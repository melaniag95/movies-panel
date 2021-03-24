import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  visualizzaDettaglio(e){
    e.preventDefault();
    this.route.navigate(['movies', this.movie.imdbID, 'detail']);
  }

}
