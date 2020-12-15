const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const config = require("./config.json");

function createWindow() {
  const win = new BrowserWindow({
    width: config.width,
    height: config.height,
    frame: false,
    titleBarStyle: 'hidden',

    // para poder usar web-packets como "const electron = window.require("electron")"
    // dentro dos arquivos node
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // descomentar a próxima linha para ativar o console
  //win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

