import React, { useState } from 'react';

const Timer = () => {
  const [seconds , setSeconds] = useState(0);
  const [minutes , setMinutes] = useState(0);
  

    return(
      <div className="flex justify-center">
      <div className="card glass w-96">
        <div className="card-body">
          <h2 className="card-title">Time Remaining</h2>
          <div className="text-center">
            <span className="text-6xl font-bold">10:00</span>
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Reset Timer</button>
          </div>
        </div>
      </div>
    </div>
  )

}

const ToDoList = () => {

};






function App() {
    return(
      <Timer />
    );
}

export default App;
