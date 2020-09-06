import React, { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { GlobalContext } from '../context/GlobalState'
import {
  Button,
  TextField,
  Typography,
  Grid,
  InputAdornment,
  makeStyles,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  errorAlert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: `2px solid ${theme.palette.error.light}`,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.error.main,
  },
  moneyType: {
    padding: theme.spacing(0, 'auto')
  },
}))

export default function AddTransaction() {
  const classes = useStyles()
  // Use react-hook-form to simplify forms
  const { register, handleSubmit, errors, control } = useForm()
  const { addTransaction } = useContext(GlobalContext)

  function onSubmit(data) {
    // data contains the use input
    const newTransaction = {
      // Generate a random id to comply with React's mapping
      // This can be improved using UUID
      id: Math.floor(Math.random() * 100000000),
      text: data.text,
      // Depending on Income or Expense, make number positive or negative
      // Remeber all user input is returned as a string regardless of the HTML
      amount: data.type === '+' ? +data.amount : (data.amount * -1),
      type: data.type
    }
    addTransaction(newTransaction)
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        New transaction
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="text"
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
              inputRef={register({ required: true })}
            />
            {/* The Alert component should be used once it enters the stable release. */}
            {errors.text && <Box className={classes.errorAlert}>The expense's name is required.</Box>}
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Type</InputLabel>
              {/* The controller element is provided by react-hook-form */}
              {/* It accomodates special input fields like this one. */}
              <Controller
                as={Select}
                name="type"
                label="Type"
                control={control}
                defaultValue="+"
              >
                <MenuItem value={'+'}>Income</MenuItem>
                <MenuItem value={'-'}>Expense</MenuItem>
              </Controller>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <TextField
              name="amount"
              fullWidth
              inputProps={{inputMode: "decimal"}}
              label="Amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
              }}
              inputRef={register({
                required: true,
                // This regex allows for currency numbers 12.99
                pattern: /^[0-9]+(\.[0-9]{1,2})?$/
              })}
              variant="outlined"
              size="small"
            />
            {errors.amount && errors.amount.type === "pattern" && <Box className={classes.errorAlert}>Only insert digits, 0 through 9.</Box>}
            {errors.amount && errors.amount.type === "required" && <Box className={classes.errorAlert}>The amount is required.</Box>}
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add transaction
        </Button>
      </form>
    </>
  )
}
