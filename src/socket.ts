import { io } from "socket.io-client";
import { backend } from "./URLS";

// "undefined" means the URL will be computed from the `window.location` object
const URL = backend;

export const socket = io(URL, { autoConnect: false });
