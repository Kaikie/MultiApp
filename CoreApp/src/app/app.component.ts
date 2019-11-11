import { Component } from '@angular/core';
import{IpcRenderer, IpcMain, ipcMain} from 'electron';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoreApp';
}

