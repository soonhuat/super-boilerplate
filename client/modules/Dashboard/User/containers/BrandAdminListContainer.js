import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { InputComponent } from '../../../../components/Forms'
import Button from '../../../../components/Button'
import BrandAdminListComponent from '../components/BrandAdminListComponent'
import { getUserListRequest, setUserLimitRequest } from '../UserActions'

class BrandAdminListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      userList: [],
      limit: undefined,
      brandName: '',
    }
    this.onPageChange = this.onPageChange.bind(this)
    this.onLimitClick = this.onLimitClick.bind(this)
    this.filterBrand = this.filterBrand.bind(this)
  }

  componentWillMount() {
    this.props.getUserList()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userList: nextProps.userList,
      limit: nextProps.limit,
      forcePage: nextProps.forcePage,
    })
  }

  onPageChange(data) {
    const index = data.selected
    this.props.getUserList(this.state.brandName, index + 1, this.state.limit)
  }

  onLimitClick(data) {
    this.props.getUserList(this.state.brandName, 1, data)
    this.props.setUserLimit(data)
  }

  filterBrand(formData) {
    const brandName = formData.brandName || ''
    this.setState({ brandName })
    this.props.getUserList(brandName, 1, this.state.limit)
  }

  render() {
    return (
      <div>
        <h1>Brand</h1>
        <div className="card mb-12">
          <div className="card-body">
            <h4>Search</h4>
            <form onSubmit={this.props.handleSubmit(this.filterBrand)}>
              <div className="row">
                <div className="col-6">
                  <Field label="Brand Name" name="brandName" component={InputComponent} value={this.state.brandName} />
                </div>
              </div>
              <div className="float-right">
                <Button type="primary" text="Filter" htmlType="submit" />
              </div>
            </form>
          </div>
        </div>

        <Link to="/dashboard/brand/admin/edit" className="btn btn-primary">
          <i className="fa fa-plus" /> User
        </Link>
        <BrandAdminListComponent
          userList={this.state.userList}
          onPageChange={this.onPageChange}
          onLimitClick={this.onLimitClick}
          limit={this.state.limit}
          forcePage={this.state.forcePage}
        />
      </div>
    )
  }
}

BrandAdminListContainer = reduxForm({
  form: 'BrandAdminListContainer',
})(BrandAdminListContainer)

const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  userList: state.user.userList,
  limit: state.user.limit,
  forcePage: state.user.forcePage,
})

const mapDispatchToProps = (dispatch) => ({
  getUserList: (brandName = '', page = 1, limit = 10) => {
    dispatch(getUserListRequest(brandName, page, limit))
  },
  setUserLimit: (limit) => {
    dispatch(setUserLimitRequest(limit))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BrandAdminListContainer)
