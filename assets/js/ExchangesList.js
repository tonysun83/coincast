import React from 'react'
import $ from 'jquery'

class ExchangesList extends React.Component {
  constructor(props) {
    super();
    this.state = {data: []};
  }
  loadExchangesFromServer () {
    $.ajax({
      url: this.props.url,
      datatype: 'json',
      cache: false,
      success: function(data) {
          this.setState({data: data});
      }.bind(this)
    })
  }

  componentDidMount () {
      this.loadExchangesFromServer();
      setInterval(this.loadExchangesFromServer.bind(this), this.props.pollInterval)
  }

  render () {
    if (this.state.data) {
        console.log('DATA!')
        var exchangeNodes = this.state.data.map(function(exchange){
            return <li> {exchange.name} </li>
        })
    }
    return (
        <div>
            <h1>Exchanges List</h1>
            <ul>
                {exchangeNodes}
            </ul>
        </div>
    )
  }
}

export default ExchangesList

