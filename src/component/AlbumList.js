import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component{
  state = {albums:[]};

componentWillMount(){
    axios.get('https://gist.githubusercontent.com/rithin-jose/e6fe693afe068d7ca2ac8190ce4d45e5/raw/7ad88d2e61d7af71fa148ddb15c574239a917d1f/test.json')
    .then(response => this.setState({albums: response.data})); 
}
renderAlbum(){
    return this.state.albums.map(albums => <AlbumDetail key={albums.title} album={albums}/>);
}

render(){
        return(
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}

