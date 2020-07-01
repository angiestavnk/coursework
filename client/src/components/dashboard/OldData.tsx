import React, { useEffect, useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TemperatureStrategy from '../../actions/strategy/TemperatureStrategy';
import BrightnessStrategy from '../../actions/strategy/BrightnessStrategy';
import HumidityStrategy from '../../actions/strategy/HumidityStrategy';
import ITableData from '../../actions/strategy/ITableData'
import TableDataService from '../../actions/strategy/TableDataService'


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight: 500
  },
});

export default function CustomizedTables() {
  const [rows, setRows] = React.useState<ITableData[]>([])
  const classes = useStyles();
  React.useEffect(() => {
    getData()
}, [])

const getData = () => {
  let service = new TableDataService()
  service.getChartsData().then(function(data){
    setRows(data)
  })
}
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell align="right">Temperature</StyledTableCell>
            <StyledTableCell align="right">Brightness</StyledTableCell>
            <StyledTableCell align="right">Humidity&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.temperature}</StyledTableCell>
              <StyledTableCell align="right">{row.brightness}</StyledTableCell>
              <StyledTableCell align="right">{row.humidity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}