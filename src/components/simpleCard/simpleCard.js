import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from "@material-ui/core/IconButton";
import AddFieldComponent from "../addFieldComponent";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import './simpleCard.css';

// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// });

export default function SimpleCard(props) {
    // const classes = useStyles();
    const [add, setAdd] = useState(false);

    return (
        <Card >
            {/*<div className='outer-card'>*/}
            <CardContent >
                {props.children}
            </CardContent>
            {/*</div>*/}
            <CardActions>
                <IconButton aria-label="add" onClick={()=>setAdd(!add)}>
                    {!add && < AddCircleIcon color={'primary'}/>}
                    {add && < CancelIcon color={'primary'}/>}
                </IconButton>
                Add Field
            </CardActions>
            {add && <AddFieldComponent/>}
        </Card>
    );
}
