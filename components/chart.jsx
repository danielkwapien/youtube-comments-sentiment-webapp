import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2';



const ChartComponent = ({ fetchedData }) => {

    // Calculate the total sum of values
    const totalSum = Object.values(fetchedData).reduce((acc, value) => acc + value, 0);

    // Threshold for grouping into "others"
    const threshold = 0.02 * totalSum;

    // Temporary storage for small values
    let othersSum = 0;
    const newLabels = [];
    const newValues = [];

    // Filter and group data
    Object.entries(fetchedData).forEach(([key, value]) => {
        if (value < threshold) {
            othersSum += value;
        } else {
            newLabels.push(key);
            newValues.push(value);
        }
    });

    // Add 'others' category if needed
    if (othersSum > 0) {
        newLabels.push('Others');
        newValues.push(othersSum);
    }

    const data = {
        labels: newLabels, // Assuming fetchedData holds your proportions data
        datasets: [{
          data: newValues,
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