import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  makeStyles
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import { green, red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  list: {
    height: '225px',
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(2),
    overflowX: 'auto',
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
  },
  // TODO: Add logic for expense vs income
  incomeListItem: {
    margin: theme.spacing(1, 0),
    backgroundColor: green[100],
    borderRadius: theme.shape.borderRadius,
  },
  expenseListItem: {
    margin: theme.spacing(1, 0),
    backgroundColor: red[100],
    borderRadius: theme.shape.borderRadius,
  },
}))

export default function TransactionList() {
  const classes = useStyles()
  const { transactions, deleteTransaction } = useContext(GlobalContext)
  // const sign = item.amount < 0 ? '-' : '+'

  return (
    <>
      <Typography variant="h6" gutterBottom>
        History
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List dense component="nav" className={classes.list}>
            {transactions.map(item => (
              <ListItem key={item.id} className={classes.incomeListItem}>
                <ListItemText
                  primary={item.text}
                  secondary={`$ ${item.amount}`}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => deleteTransaction(item.id)} edge="end">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  )
}
