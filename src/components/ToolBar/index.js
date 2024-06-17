import cx from "classnames";
import React, { useContext } from "react";
import {
  FaArrowRight,
  FaEraser,
  FaPaintBrush,
  FaRegCircle,
  FaSlash,
  FaFont,
  FaUndoAlt,
  FaRedoAlt,
  FaDownload,
} from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TOOL_ITEMS } from "../../constant";
import boardContext from "../../store/board-context";
import classes from "./index.module.css";


function ToolBar() {
    const{activeToolItem,changeToolHandler,undo,redo}=useContext(boardContext);
    
    const handleDownloadClick=()=>{
      const canvas=document.getElementById("canvas");
      const data=canvas.toDataURL("image/png");
      const anchor=document.createElement('a');
      anchor.href=data;
      anchor.download="board.png";
      anchor.click();
    }
    
    
    return (
        <div className={classes.container}>
          {/* 1 */}
          <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.BRUSH,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.BRUSH)}
        >
          <FaPaintBrush />
        </div>
        {/* 2 */}
          <div className={
          cx(classes.toolItem,{[classes.active]:activeToolItem===TOOL_ITEMS.LINE
          })}
          onClick={()=>changeToolHandler(TOOL_ITEMS.LINE)} 
          >
          <FaSlash/>
          </div>
          {/* 3 */}
          <div className={
          cx(classes.toolItem,{[classes.active]:activeToolItem===TOOL_ITEMS.RECTANGLE})}
          onClick={()=>changeToolHandler(TOOL_ITEMS.RECTANGLE)} 
          >
          <LuRectangleHorizontal/>
          </div>
          {/* 4 */}
        <div className={
        cx(classes.toolItem,{[classes.active]:activeToolItem===TOOL_ITEMS.CIRCLE})}
        onClick={()=>changeToolHandler(TOOL_ITEMS.CIRCLE)} 
        >
        <FaRegCircle/>
        </div>
        {/* 5 */}
        <div className={
        cx(classes.toolItem,{[classes.active]:activeToolItem===TOOL_ITEMS.ARROW})}
        onClick={()=>changeToolHandler(TOOL_ITEMS.ARROW)} 
        >
        <FaArrowRight/>
        </div>
        {/* 5 */}
        <div className={
        cx(classes.toolItem,{[classes.active]:activeToolItem===TOOL_ITEMS.ERASER})}
        onClick={()=>changeToolHandler(TOOL_ITEMS.ERASER)} 
        >
        <FaEraser/>
        </div>

        <div className={
        cx(classes.toolItem,{[classes.active]:activeToolItem===TOOL_ITEMS.TEXT})}
        onClick={()=>changeToolHandler(TOOL_ITEMS.TEXT)} 
        >
        <FaFont/>
        </div>

        <div className={classes.toolItem}
        onClick={()=>undo()} 
        >
        <FaUndoAlt/>
        </div>

        <div className={classes.toolItem}
        onClick={()=>redo()} 
        >
        <FaRedoAlt/>
        </div>

        <div className={classes.toolItem}
        onClick={()=>handleDownloadClick()} 
        >
        <FaDownload/>
        </div>
        

        </div>
        
        
    )
}

export default ToolBar
