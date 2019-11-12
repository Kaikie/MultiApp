import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { ipcRenderer } from 'electron';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private router:Router) { 
    ipcRenderer.on('navigate',(event,data)=>{
    this.router.navigate([data["route"]])
    
  }
  
}
}