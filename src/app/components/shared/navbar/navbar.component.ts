import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  
  buscarHeroe(dato:string) {
    this.router.navigate(['/search', dato]);
  }
}