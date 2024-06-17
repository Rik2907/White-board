import { createContext } from "react";

const boardContext=createContext({
    activeToolItem:"",
    toolActionType:"",
    elements:[],
    histroy:[[]],
    index:0,
    boardMouseDownHandler:()=>{},
    changeToolHandler:()=>{},
    boardMouseMoveHandler:()=>{},
    boardMouseUp:()=>{},
});
export default boardContext;