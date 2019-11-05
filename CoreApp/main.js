const { app, BrowserWindow, Menu } = require('electron')
const shell = require('electron').shell
let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
    
  })


  win.loadURL(`file://${__dirname}/dist/CoreApp/index.html`)

  var app1Window=new BrowserWindow({
    width:400,
    height:400,
    show:false
  })
  app1Window.loadURL(`file://${__dirname}/projects/app1/src/app/app.component.html`)
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
  app1Window.on('closed',function(){
   
  })
///projects/app1/src/index.html
  var menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
        submenu: [
            {label:'App1',
          click(){
            app1Window.show()
          }},//Modificar por los valores que quiera
            {label:'App2'},
            {label:'Salir',
          click(){app.quit()}}
        ]
    }
])
Menu.setApplicationMenu(menu); 
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
