import { contextBridge, ipcRenderer } from "electron";
import { GOOGLE_IMG_SCRAP, GOOGLE_QUERY } from "google-img-scrap";
import Results from "google-img-scrap/types/results";

const system = {
  download: (search: string): Promise<Results> => {
    return ipcRenderer.invoke("googleScrap", search);
  }
}

export const API = {
  system: system,
}

contextBridge.exposeInMainWorld("api", API);