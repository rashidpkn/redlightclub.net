import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS ,CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,} from "chart.js";
import { useSelector } from 'react-redux';
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        )

function Graph({date,view}) {
  const { isDarkMode } = useSelector(state => state.util)
    

        const options = {
          elements: {
              point: {
                  radius: 0
              }
          },
          animations: {
              radius: {
                  duration: 400,
                  loop: (context) => context.active
              }
          },
          hoverRadius: 8,
          hoverBackgroundColor: isDarkMode ? '#3b82f6' : " #6418C3",
          interaction: {
              mode: "nearest",
              intersect: false,
              axis: "x"
          },
          plugins: {
              tooltip: {
                  enabled: true
              },
              legend: {
                  display: false
                }
          }
      };

      
       const data = {
        labels:date,
        datasets: [
          {
              label: 'Views ',
              data: view,
              borderColor: isDarkMode ? '#3b82f6' : " #6418C3",
              tension: 0.4,
              borderWidth: 5,
              filler:true,
          }
      ],
      };

  return (
    <div className="graph h-full w-full">
        <Line className='w-full'  options={options} data={data} />
    </div>
    
  )
}

export default Graph