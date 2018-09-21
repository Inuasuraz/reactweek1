import React, { Component } from 'react';
import Image from './Image';
import 'bulma/css/bulma.css';
import Columns from './Columns';

class MyApp extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <Columns class="columns">

                        <Columns class="column">
                            <Image src={require('./img/VivoV11.jpeg')} alt="VivoV11" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/oppoF9.png')} alt="OppoF9" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/iphoneX.png')} alt="IphoneX" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/oppoF9.png')} alt="OppoF9" />
                        </Columns>

                    </Columns>
                </section>

            </div >
        );
    }
};

export default MyApp;