import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBump } from '@nivo/bump'
import { ResponsiveFunnel } from '@nivo/funnel';
import { useState } from 'react';
import React from 'react';
import './App.css'

function App() {
  const [v1, setv1] = useState(50);
  const [v2, setv2] = useState(50);
  const [v3, setv3] = useState(50);
  const [v4, setv4] = useState(50);
  const [v5, setv5] = useState(50);
  const data =
    [
      {
        "id": "s1",
        "value": v1,
      },
      {
        "id": "s2",
        "value": v2,
      },
      {
        "id": "s3",
        "value": v3,
      },
      {
        "id": "s4",
        "value": v4,
      },
      {
        "id": "s5",
        "value": v5,
      }
    ]
  const data1 =
    [{
      id: "g1",
      "data": [
        { x: 's1', y: v1 },
        { x: 's2', y: v2 },
        { x: 's3', y: v3 },
        { x: 's4', y: v4 },
        { x: 's5', y: v5 },
      ],
    }
    ]

  return (
    <div className="container">
      <div className="line">
        <div className="item">
          <div className='title'>
            Horizontal Bar Chart
          </div>
          <ResponsiveBar
            layout='horizontal'
            colors={{ scheme: 'set3' }}
            data={data}
            keys={["value"]}
            indexBy="id"
            margin={{ top: 70, right: 25, bottom: 50, left: 40 }}
            // colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }} />
        </div>
        <div className="item">
        <div className='title'>
            Pie Chart
          </div>
          <ResponsivePie
            data={data}
            margin={{ top: 70, right: 30, bottom: 30, left: 30 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
        <div className="item">
        <div className='title'>
            Line Chart
          </div>
          <ResponsiveLine
            data={data1}
            margin={{ top: 80, right: 50, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
          />
        </div>
      </div>
      <div className='line'>
        <div className="item">
        <div className='title'>
            Bump Chart
          </div>
        <ResponsiveBump
        data={data1}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        margin={{ top: 100, right: 50, bottom: 40, left: 60 }}
        axisRight={null}
    />
        </div>
        <div className="item">
        <div className='title'>
            Funnel Chart
          </div>
        <ResponsiveFunnel
        data={data}
        margin={{ top: 70, right: 20, bottom: 20, left: 20 }}
        valueFormat=">-.4s"
        colors={{ scheme: 'spectral' }}
        borderWidth={20}
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        beforeSeparatorLength={30}
        beforeSeparatorOffset={20}
        afterSeparatorLength={30}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
        </div>
        <div className="item">
        <div className='title'>
            Vertical Bar Chart
          </div>
        <ResponsiveBar
            data={data}
            keys={["value"]}
            colors={{ scheme: 'paired' }}
            indexBy="id"
            margin={{ top: 70, right: 25, bottom: 50, left: 40 }}
            // colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }} />
        </div>

      </div>
      <div className='input'>
      s1:<input value={v1} onChange={(e) => setv1(e.target.value)} />
      s2:<input value={v2} onChange={(e) => setv2(e.target.value)} />
      s3:<input value={v3} onChange={(e) => setv3(e.target.value)} />
      s4:<input value={v4} onChange={(e) => setv4(e.target.value)} />
      s5:<input value={v5} onChange={(e) => setv5(e.target.value)} />
      </div>
    </div>
  );
}
export default App;
