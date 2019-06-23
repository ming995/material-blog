import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../About/About';

const WrapperStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BlogHeader = styled.div`
  width: 100%;
  height: 4.875rem;
  color: #efefef;
  background-color: #303249;
  padding: 1.25rem;
  box-shadow: 0px 5px 8px #232438;
  -moz-box-shadow: 0px 5px 8px #232438;
  -webkit-box-shadow: 0px 5px 8px #232438;
  .blog-title {
    display: block
    font-size: 4.25rem;
    margin-left: 1.5rem;
  }
`;

const TableContent = styled.div`
  margin-top: 5%; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    overflowX: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


// const classes = styles123();
function App() {
  const classes = useStyles();
  const [data, setData] = useState({ data: [] });
  // 单独拆分 fetchData
  const fetchData = async () => {
    const result = await axios(
      'https://api.github.com/repos/ming995/X-th-Zone/issues',
    );
    setData(result);
  };
  // 单独拆分 fetchData 的原因是： 上面的 waring 部分，不推荐把 async 写在 effect 中
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ming995
          </Typography>
          <Button color="inherit"><Link to="/about">关于</Link></Button>
        </Toolbar>
      </AppBar>
      <TableContent>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>文章名</TableCell>
                <TableCell align="right">作者</TableCell>
                <TableCell align="right">Url</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.user.login}</TableCell>
                  <TableCell align="right"><a href={row.url}>{row.url}</a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </TableContent>
      <Route path="/about" component={About}></Route>
    </div>
    </Router>
  );
}


export default App