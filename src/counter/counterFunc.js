import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    btnStyle: {
        marginBottom: 20
    },
    
    countContainer: {
        display: "flex",
        flexDirection: 'column',
        maxWidth: '150px',
        alignItems: 'center',
        margin: '0 auto',
    }

}))

const CounterFunc = () => {
    const [count, setCount] = React.useState(0)
    const classes = useStyles();
    const incerement = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.countContainer}>
            <Button
                onClick={incerement}
                variant="outlined"
                color="secondary"
                className={classes.btnStyle}
            >
                CounterFunc+
            </Button>
            <strong>
                {count}
            </strong>
        </div>
    )
}

export default CounterFunc