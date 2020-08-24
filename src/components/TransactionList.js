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
  listItem: {
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.shape.borderRadius,
  },
  expenseListItem: {
    color: red[600],
  },
  incomeListItem: {
    color: green[600],
  },
}))

export default function TransactionList() {
  const classes = useStyles()
  const { transactions, deleteTransaction } = useContext(GlobalContext)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        History
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List dense component="nav" className={classes.list}>
            {transactions.map(item => (
              <ListItem key={item.id} className={classes.listItem}>
                <ListItemText
                  primary={item.text}
                  classes={{ secondary: item.type === '+' ? classes.incomeListItem : classes.expenseListItem }}
                  secondary={`${item.type}$${Math.abs(item.amount).toFixed(2)}`}
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
