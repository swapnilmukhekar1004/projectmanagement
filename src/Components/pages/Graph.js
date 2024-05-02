import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Function to destroy the previous chart instance
    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };

    // Create a new chart instance
    const createChart = () => {
      const ctx = chartContainer.current.getContext('2d');
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      };

      const options = {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Sales'
            }
          }
        }
      };

      // Create a new chart instance
      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });

      // Set the new chart instance to the state
      setChartInstance(newChartInstance);
    };

    // Destroy the previous chart instance if exists
    destroyChart();

    // Create a new chart instance
    createChart();

    // Clean up function to destroy the chart instance on component unmount
    return () => {
      destroyChart();
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Graph;
