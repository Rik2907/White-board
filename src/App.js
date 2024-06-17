import Board from "./components/Board";
import ToolBar from "./components/ToolBar";
import ToolBox from "./components/ToolBox";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/toolboxProvider";
function App() {
  return (
    <BoardProvider>
      <ToolboxProvider>
          <ToolBar/>
          <ToolBox/>
          <Board/>
      </ToolboxProvider>
    </BoardProvider>
  )
 }
 
 export default App
 