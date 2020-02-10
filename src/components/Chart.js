import React, {Component} from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{

    state = {
        chartData: this.props.chartData        
    }


      static defaultProps ={
          displayTitle:true,
          displayLegend: true,
          legendPosition: 'right',
          location: 'city'
      }

    render(){
        return(
            <div className='chart'>
            <Bar
                data={this.state.chartData}
                options={{
                    title: {
                        display:this.props.displayTitle,
                        text: 'Largest Cities In '+this.props.location
                        
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                }}
            />
            </div>
        )
    }
}

export default Chart;
