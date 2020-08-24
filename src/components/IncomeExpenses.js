import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import {
  Typography,
  Grid,
  Box,
  Container,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2, 0),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
  },
  grid: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  income: {
    color: theme.palette.success.main,
  },
  expense: {
    color: theme.palette.error.main,
  },
}))

export default function IncomeExpenses() {
  const classes = useStyles()
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(item => item.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2)

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid
        container
        alignItems='center'
      >
        <Grid item xs={6} className={classes.grid}>
          <Typography variant="h6" align='center' gutterBottom>
            Income
          </Typography>
          <Typography align='center' variant="body1" className={classes.income}>
            +${income}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" align='center' gutterBottom>
            Expense
          </Typography>
          <Typography align='center' variant="body1" className={classes.expense}>
            -${expense}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
