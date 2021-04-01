import React, { useState} from 'react';
import Header from '../header/index';
import Game from '../game/index';
import Footer from '../footer/index';

const App = () => {

const [gameBalance, updateBalance] = useState(99.99);

    const onUpdateGameBalance = (value) => {
            updateBalance(gameBalance + value);
    }
        return(
            <div>
                <Header balance={gameBalance}/>
                <Game onUpdateBalance={onUpdateGameBalance}/>
                <Footer />
            </div>
        )
    
}
export default App;