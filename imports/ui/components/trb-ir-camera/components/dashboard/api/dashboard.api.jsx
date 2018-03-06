
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Rx from "rxjs/Rx";
//import {Observable} from "rxjs/Observable";
//import { browserHistory } from 'react-router';

export default function Dashboard_Api(_optional) {
    return (WrappedComponent) => {
        class $Dashboard_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    conneted : false,
                    scrutation : false,
                    posX : 0,
                    posY : 0,
                    temperatureValue : 0
                }
                this.reloadPicture=this.reloadPicture.bind(this)
                this.startScrutation=this.startScrutation.bind(this)
                this.stopScrutation=this.stopScrutation.bind(this)
                this.getTemperature=this.getTemperature.bind(this)
                this.setTemperaturePosition=this.setTemperaturePosition.bind(this)
                this.source
                this.subscription
            }
            componentDidMount() {
               this.reloadPicture()
               this.source = Rx.Observable
                    .interval(200)
            }
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {
               this.subscription && this.subscription.unsubscribe()
            }

            testMethod(test) {
                return test
            }
            
            reloadPicture(){
                Meteor.call("getPicture", (err, res)=>{
                  if(err){
                    return 
                  }
                  else {
                    document.getElementById("ir-photo").src="data:image/jpg;base64, "+res.data.base64
                    document.getElementById("download").href = "data:image/jpg;base64, "+res.data.base64
                    this.setState({
                      connected : true
                    })
                  }
                    
                })
            }
            
            startScrutation(){
                this.setState({
                    scrutation : true
                })
                this.subscription = this.source.subscribe(
                     (x) => {
                         console.log(this.state.posX)
                        this.reloadPicture()
                        this.getTemperature(this.state.posX, this.state.posY)
                    },
                    function (err) {
                        console.log('Error: ' + err);
                    },
                    function () {
                        console.log('Completed');
                    });
            }
            
            stopScrutation(){
                this.subscription.unsubscribe()
                this.setState({
                    scrutation : false
                })
            }
            
            getTemperature(posX, posY){
                 Meteor.call("getTemperature", posX, posY, (err, res)=>{
                    //console.log(err)
                    //console.log(res)  
                    this.setState({
                        temperatureValue : res.data.value
                    })
                })
            }
            
            setTemperaturePosition(event){
                let pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("ir-photo").offsetLeft;
                let pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("ir-photo").offsetTop;
                //console.log(pos_x, pos_y)
                //this.getTemperature(pos_x, pos_y)
                //console.log(pos_x)
                this.setState({
                    posX : pos_x,
                    posY : pos_y
                })
            }
            
            downloadImage(){
                /*let pom = document.createElement('a');
                pom.setAttribute('href', 'data:application/octet-stream,' + encodeURIComponent(text));
                pom.setAttribute('download', filename);
                pom.style.display = 'none';
                document.body.appendChild(pom);
                pom.click();
                document.body.removeChild(pom);    */
            }
       

            render() {
                return <WrappedComponent
				{...this.props}
                connected = {this.state.connected}
				reloadPicture = {this.reloadPicture}
                scrutation = {this.state.scrutation}
                startScrutation = {this.startScrutation}
                stopScrutation = {this.stopScrutation}
                getTemperature = {this.getTemperature}
                temperatureValue={this.state.temperatureValue}
                setTemperaturePosition={this.setTemperaturePosition}
				/>
            }
        }
        $Dashboard_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Dashboard_Api
    }
}
    