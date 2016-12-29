import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})

export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
    console.log('UserComponent loaded');
    this.name = 'Srinivas Vemavarapu';
    this.email = 'srinivas.vemavarapu@bnymellon.com';
    this.address = {
        street:'Dhanori, Lohegaon Road',
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
        //console.log(posts);
        this.posts = posts;
    });
  }

  toggleHobbies(){
      console.log('toggleHobbies() -- click');
      if(this.showHobbies == true){
          this.showHobbies = false;
      }else{
          this.showHobbies = true;
      }
  }

  addHobby(hobby){
      console.log('addHobby() -- click ' + hobby);
      this.hobbies.push(hobby);
  }

  deleteHobby(i){
      console.log("deleteHobby() -- click");
      this.hobbies.splice(i, 1);
  }
}

interface address{
    street: string;
    city: string;
    state: string;
    country: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}