import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2';


const ChartComponent = ({ fetchedData }) => {
    const data = {
        labels: Object.keys(fetchedData), // Assuming fetchedData holds your proportions data
        datasets: [{
          data: Object.values(fetchedData),
          backgroundColor: [
            // Define your desired colors for each slice here (optional)
          ]
        }]
      };
    const options = {
      // Optional chart customization options
    };
  
    return (
      <div>
        <h1>Chart of Proportions</h1>
        <Pie data={data} options={options} />
      </div>
    );
  };
  
  export default ChartComponent;