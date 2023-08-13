import './App.css';
import { Rate } from 'antd';

function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Rate allowHalf defaultValue={2.5} />
    </div>
  );
}

export default App;
