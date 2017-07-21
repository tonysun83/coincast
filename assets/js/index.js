
import $ from 'jquery';

var React = require('react')
var ReactDOM = require('react-dom')

var ExchangesList = React.createClass({
    loadExchangesFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadExchangesFromServer();
        setInterval(this.loadExchangesFromServer, 
                    this.props.pollInterval)
    },

    render: function() {
        if (this.state.data) {
            console.log('DATA!')
            var exchangeNodes = this.state.data.map(function(exchange){
                return <li> {exchange.name} </li>
            })
        }
        return (
            <div>
                <h1>Hello React!</h1>
                <ul>
                    {exchangeNodes}
                </ul>
            </div>
        )
    }
})

ReactDOM.render(<ExchangesList url='/exchanges/' pollInterval={1000} />, 
    document.getElementById('react-app'))