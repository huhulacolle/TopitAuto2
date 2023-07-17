import { contextBridge, IpcRenderer, ipcRenderer } from "electron";

const system = {
  googleScrap: (search: string): Promise<any> => {
    return ipcRenderer.invoke("googleScrap", search);
  },
  getMusic: (): Promise<string> => {
    return ipcRenderer.invoke("getMusic");
  },
  getMessage: (): any => {
    return ipcRenderer.listeners("getMessage");
  },
  download: (): Promise<string> => {
    return ipcRenderer.invoke("download");
  },
  test: (): Promise<string> => {
    return ipcRenderer.invoke("test");
  }
}

export const API = {
  system: system,
}

contextBridge.exposeInMainWorld("api", API);