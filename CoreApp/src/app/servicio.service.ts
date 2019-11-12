import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private router:Router) { 
    const {ipcRenderer}=require('electron');
    ipcRenderer.on('navigate',(event,data)=>{
    this.router.navigate([data["route"]])
    
  })
  
}
}