import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import _ from 'lodash'

const PageLimitComponent = (props) => (
  <div className="pull-right mb-3">
    <ButtonGroup>
      <Button outline color="secondary" onClick={() => props.onLimitClick(10)} active={props.limit === 10 || _.isUndefined(props.limit)}>10</Button>
      <Button outline color="secondary" onClick={() => props.onLimitClick(20)} active={props.limit === 20}>20</Button>
      <Button outline color="secondary" onClick={() => props.onLimitClick(50)} active={props.limit === 50}>50</Button>
      <Button outline color="secondary" onClick={() => props.onLimitClick(100)} active={props.limit === 100}>100</Button>
    </ButtonGroup>
  </div>
)

export default PageLimitComponent
