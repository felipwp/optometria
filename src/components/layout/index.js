import React from 'react';
import TitleBar from '../titlebar';

export default class Layout extends React.Component {

    componentDidMount(){
        console.log('mounted from layouts')
    }

    render() {
        return (
            <React.Fragment>
                <TitleBar></TitleBar>
                <main >
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
  
}

