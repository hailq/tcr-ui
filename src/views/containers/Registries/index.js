import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

import ListingCard from './ListingCard'

import { store } from 'views/App'
import { takeLatest } from 'redux-saga/effects'
import * as actions from 'redux/modules/ethProvider/actions'
import * as homeTypes from 'redux/modules/home/types'
import { chooseTCR } from '../../../redux/modules/ethProvider/actions'
import { setupEthereumStart } from 'redux/modules/home/actions'

import Transactions from 'views/containers/Transactions/Loadable'

function TabContainer (props) {
  return (
    <Typography component="div" style={{ padding: '1em 1em 0' }}>
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.contentBackground,
  },
  tableWrapper: {
    overflowX: 'auto',
    padding: '0 2em',
  },
})

class SimpleTabs extends Component {
  state = {
    value: 0,
    page: 0,
    rowsPerPage: 5,
  }

  selectRegistryAddress = (address) => {
    console.log(`Address: ${address.address}`)
    store.dispatch(chooseTCR(address))
    // store.dispatch(setupEthereumStart())
  }

  render () {
    const {
      classes,
    } = this.props
    const { rowsPerPage, page, value } = this.state

    let data = [
      {
        id: 1,
        name: 'The MeooChain Registry',
        address: '0x225f49b7bfc88703c9c5f2f6c13c5a341461dd5f',
      },
      {
        id: 2,
        name: 'The web3 Registry',
        address: '0x3b8fe3ab70a383df3eb052a11a58ed15950285de',
      },
      {
        id: 3,
        name: 'The Blockchain Registry',
        address: '0x713e395d67abb516f5c075bba93df393f672d8ff',
      },
    ]

    return (
      <Transactions>
        <Paper className={classes.root}>
          <AppBar position="static" color="inherit">
            <Tabs value={value} indicatorColor="primary">
              <Tab label="listing"/>
            </Tabs>
          </AppBar>

          <div className={classes.tableWrapper}>
            <TabContainer>
              <FlexContainer>
                {value === 0 &&
                data.slice(page * rowsPerPage, page * rowsPerPage +
                  rowsPerPage).map(item => {
                  return (
                    <ListingCard
                      key={item.id}
                      selectRegistryAddress={this.selectRegistryAddress}
                      data={item}
                    />
                  )
                })}
              </FlexContainer>
            </TabContainer>

          </div>
        </Paper>
      </Transactions>
    )
  }
}

const FlexContainer = styled.div`
  display: flex;
`

function mapDispatchToProps (dispatch) {
  return {}
}

const mapStateToProps = createStructuredSelector({})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withStyles(styles)(withConnect(SimpleTabs)))
