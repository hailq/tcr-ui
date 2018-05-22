import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
// import {registrySaga, test} from '../../../redux/modules/ethProvider/sagas/contracts'
import {chooseTCR} from '../../../redux/modules/ethProvider/actions'

import Button from 'views/components/Button'

import styled from 'styled-components'

const CardContent = styled.div`
  padding: 1em;
`
const PadDiv = styled.div`
  padding-top: 1em;
`

const styles = {
  card: {
    width: 200,
    margin: 20,
    padding: '.5em',
  },
  media: {
    height: 100,
    margin: 5,
  },
}

function ListingCard (props) {
  const {
    classes,
    data,
    selectRegistryAddress
  } = props

  return (
    <div>
      <Card className={classes.card}>

        <CardContent>
          <Typography variant="title" component="h3">
            {data.name}
          </Typography>

          <PadDiv>
            <Typography component="p">

            </Typography>
            <Typography component="p">

            </Typography>
          </PadDiv>
        </CardContent>

        <Button methodName="updateStatus" onClick={e => selectRegistryAddress(data)}
                color="primary">
          {'Select'}
        </Button>
      </Card>
    </div>
  )
}

export default withStyles(styles)(ListingCard)
