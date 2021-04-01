import React, { useState, useEffect, useRef } from 'react';
import DataTable from '../dense-table/index';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import './game.css';

const Game = ({onUpdateBalance}) =>  {
    const [ id, updateId] = useState(null);
    const [ numbers, updateNumbers] = useState({first: null, second: null, third: null});
    const [ time, upadateTime] = useState(null);
    const [ history, updateHistory] = useState(null);
    const [start, updateStart] = useState(false);
    const [ mass, updateMass] = useState([]); 
    const  massRef = useRef(mass);
    const [ isOpenGameModal, toggleGameModal ] = useState(false);

    useEffect(() => {
        const { first, second, third } = numbers;
       
        if (first !== null && second !== null && third !== null) {
            if(first === 7 && second === 7 && third === 7 ){
                onUpdateBalance(10.0);
            } else if (first === second === third) {
                onUpdateBalance(5.0);
            } else if (first === second || 
                second === third ||
                first === third) {
                onUpdateBalance(0.5);
            }
            const time = new Date();
            const objMass = {
                id: massRef.current.length + 1,
                time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
                history: `${first}${second}${third}` 
            };
            massRef.current.push(objMass);
           updateMass([...massRef.current]);
            console.log(mass);
        }    
    }, [numbers]);

    useEffect(() => {
        massRef.current = mass;
    }, [mass]);
    

    const random = () => {
        let rand = 0 + Math.random() * (9 + 1 - 0);
        return Math.floor(rand);
    }

    const randomNumberFunc = () => {
    onUpdateBalance(-1);
    updateNumbers({first: random(), second: random(), third: random()});
    updateId(id+1);
    }
    const spin = () => {
        updateNumbers({first: 7, second: 7, third: 7});
    updateId(id+1);
    };
    const starterButton = () =>{
        updateNumbers({first: 0, second: 0, third: 0});
        updateStart(true);
        updateId(0);
    }

    const openGameModal = () => {
      toggleGameModal(true);
    }
    const closeGameModal = () => {
      toggleGameModal(false);
    }
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },
    }));
    const classes = useStyles();
    
    return (
      <div>
         <Container fixed>
              <DataTable rows={mass}/>
          </Container>
        <Button style={{ margin: '0% 0% 13% 15% ' }} variant="contained" onClick={openGameModal}>
          Open game modal
        </Button>
        <Modal open={isOpenGameModal}>
          <div className="modal-content">
          <div className="squares">
          <div className={classes.root}>
            <Paper variant="outlined" >{numbers.first}</Paper>
            <Paper variant="outlined" >{numbers.second}</Paper>
            <Paper variant="outlined" square >{numbers.third}</Paper>
          </div>
          </div>
        
         <div className="div_buttons">
         <Button className="buttons" variant="contained" color="secondary" onClick={randomNumberFunc}>
          Random 
        </Button>
         <Button className="buttons" variant="contained" color="primary" onClick={spin}>
          Spin 
        </Button>
         <Button className="buttons" variant="contained" color="secondary" onClick={closeGameModal}>
          Close 
         </Button>
        </div>
          </div>
        </Modal>
      </div>
      )
}

export default Game;

