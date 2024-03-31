import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2';



const ChartComponent = ({ fetchedData }) => {
    const data = {
        labels: Object.keys(fetchedData), // Assuming fetchedData holds your proportions data
        datasets: [{
          data: Object.values(fetchedData),
          backgroundColor: [
            'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'grey', 'black', 'white'
          ]
        }]
      };

    const options = {
    };
  
    return (
      <div>
        <h1>Chart of Proportions</h1>
        <Pie data={data} options={options} />
      </div>
    );
  };
  
  export default ChartComponent;