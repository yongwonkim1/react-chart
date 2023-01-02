import { ResponsiveBar } from '@nivo/bar';
import { useState } from 'react';
import React from 'react';
import './App.css'

function App() {
  const [hotdog, setHotdog] = useState(184);
  const [burger, setBurger] = useState(195);
  const [sandwich, setSandwich] = useState(49);
  const [data, setData] = useState([
    {
      "country": "기존",
      "hot dog": 184,
      "hot dogColor": "hsl(174, 70%, 50%)",
      "burger": 195,
      "burgerColor": "hsl(110, 70%, 50%)",
      "sandwich": 49,
      "sandwichColor": "hsl(311, 70%, 50%)"
    },
    {
      "country": "이후",
      "hot dog": 184,
      "hot dogColor": "hsl(174, 70%, 50%)",
      "burger": 195,
      "burgerColor": "hsl(110, 70%, 50%)",
      "sandwich": 49,
      "sandwichColor": "hsl(311, 70%, 50%)"
    },
    
      ]);
      function handleButtonClick() {
        setData([
          {
            "country": "기존",
            "hot dog": 184,
            "hot dogColor": "hsl(174, 70%, 50%)",
            "burger": 195,
            "burgerColor": "hsl(110, 70%, 50%)",
            "sandwich": 49,
            "sandwichColor": "hsl(311, 70%, 50%)"
          },
          {
            "country": "이후",
            "hot dog": hotdog,
            "hot dogColor": "hsl(174, 70%, 50%)",
            "burger": burger,
            "burgerColor": "hsl(110, 70%, 50%)",
            "sandwich": sandwich,
            "sandwichColor": "hsl(311, 70%, 50%)"
          }
        ])
      };
  return (
    
    
    <div className="container">
      <div className="topcon">
      <div className="item">
      <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich"]}
      indexBy="country"
      margin={{ top: 20, right: 10, bottom: 30, left: 40 }}
      // colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    />
      </div>
      <div className="item">
      <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich"]}
      indexBy="country"
      margin={{ top: 20, right: 10, bottom: 30, left: 40 }}
      // colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    />
      </div>
      <div className="item">
      <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich"]}
      indexBy="country"
      margin={{ top: 20, right: 10, bottom: 30, left: 40 }}
      // colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    />
      </div>
      </div>
    <input value={hotdog} onChange={(e) => setHotdog(e.target.value)} />
    <input value={burger} onChange={(e) => setBurger(e.target.value)} />
    <input value={sandwich} onChange={(e) => setSandwich(e.target.value)} />
    <button onClick={handleButtonClick}>Update data</button>
    
    </div>
  );
}
export default App;
