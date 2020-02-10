import React, {Component} from 'react';
import Chart from './components/Chart'
import './App.css';


class App extends Component {

  state = {
    chartData: {}
  }

  componentWillMount(){
    this.getChartData()
  }

  getChartData(){
    this.setState({
      //fetch here
      chartData:  {labels: ['Boston', 'Worchester', 'Springfeild', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[
        {
          label: 'Populations',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor:[
            "rgb(255, 166, 249)",
            "rgb(161, 202, 237)",
            "rgb(247, 219, 141)",
            "rgb(131, 247, 166",
            "rgb(196, 141, 247)",
            "rgb(247, 150, 141)"
          ]
        }
      ]
    }
    })
  }
  
render(){
  return (
    <div className="App">
        <Chart location={'Massachuetts'} chartData={this.state.chartData} legendPosition='bottom'/>
        <Chart location={'Colorado'} chartData={this.state.chartData} legendPosition='top'/>
    </div>
  );
}
}

export default App;
