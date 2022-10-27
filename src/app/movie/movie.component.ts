import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  type= "";
  id= "";
  url="";
  movies: any;
  movie: any;
  mytexts:any;
  date: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {

    
    
    this.type = this.route.snapshot.params["type"];
    this.id= this.route.snapshot.params["id"]
    if (this.type === "trending") {
      this.url = "https://run.mocky.io/v3/cd3bd65a-0e83-4d68-99b2-c3e679be1d40"
    }
    if(this.type === "theatre") {
      this.url = "https://run.mocky.io/v3/344eafd6-adf4-4d42-b6c9-9224d89c23fa"
    }
    if (this.type === "popular") {
      this.url ="https://run.mocky.io/v3/64ca32ef-3443-4713-95e7-aee8a9c716d2"
    }
    this.getMovie();
    this.date = new Date();
    
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies
      console.log(this.movies);
      let index = this.movies.findIndex((movie: {id: string}) => movie.id == this.id)
      if (index > -1) {
        this.movie = this.movies[index]
      }
      
    })

  }

  CommentForm = new FormGroup({
    username: new FormControl('' , [Validators.required, Validators.minLength(2)]),
    review: new FormControl('',[Validators.required] ),
    
});


onSubmit() {
    console.log(this.CommentForm.value, 'form');
    this.mytexts = this.CommentForm.value;
    this.CommentForm.reset();
}
  
}

