import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CustomButton({ variant, label, onSubmit, color }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant={variant} color={color} onClick={onSubmit}>
        {label}
      </Button>
    </div>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  onSubmit: PropTypes.func,
  color: PropTypes.string
};
