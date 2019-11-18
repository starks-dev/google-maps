import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const mapTextField = props => {
  const classes = styles();

  return (
    <div>
      <TextField
        id={props.id}
        className={classes.textField}
        label={props.label}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const DirectionTextField = withStyles(styles)(mapTextField);

export { DirectionTextField };
