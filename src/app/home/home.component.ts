import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  trendingMovies: any;
  popularMovies: any;
  theatreMovies: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
   
  }

  getTrendingMovies() {
    this.http.get("https://run.mocky.io/v3/cd3bd65a-0e83-4d68-99b2-c3e679be1d40").subscribe((res:any) => {
      this.trendingMovies = res;
      console.log(this.trendingMovies);
    })
  }

  
  getTheatreMovies() {
    this.http.get("https://run.mocky.io/v3/344eafd6-adf4-4d42-b6c9-9224d89c23fa").subscribe((res:any) => {
      this.theatreMovies= res;
      console.log(this.theatreMovies);
    })
  }
  
  getPopularMovies() {
    this.http.get("https://run.mocky.io/v3/64ca32ef-3443-4713-95e7-aee8a9c716d2").subscribe((res:any) => {
      this.popularMovies = res;
      console.log(this.popularMovies);
    })
  }


 goToMovie(type: string, id: string) {
  this.router.navigate(['movie', type, id]);
}
 

}
