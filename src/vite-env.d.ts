/// <reference types="vite/client" />

import { API } from './../electron/preload/index';

declare global {
  interface Window { api: typeof API }
}