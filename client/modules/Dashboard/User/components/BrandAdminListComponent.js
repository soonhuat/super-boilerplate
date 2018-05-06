import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Pagination from '../../../../components/Controls/PaginationComponent'
import PageLimit from '../../../../components/Controls/PageLimitComponent'

const BrandAdminListComponent = (props) => (
  <div className="mt-3">
  {
    !_.isEmpty(props.userList) && props.userList.total > 0 ?
      <div>
        <PageLimit
          onLimitClick={props.onLimitClick}
          limit={props.limit}
        />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Role</th>
              <th>Gorgias Name</th>
              <th></th>
              <th></th>
            </tr>
            {
              props.userList.docs.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td className="ellipsis">{user.description}</td>
                  <td>{user.role}</td>
                  <td>{user.gorgiasName}</td>
                  <td><Link to={`/${user.slug}`}>Preview</Link></td>
                  <td><Link to={`/dashboard/brand/admin/edit/${user._id}`}>Edit</Link></td>
                </tr>
              ))
            }
          </thead>
        </table>
        <Pagination
          onPageChange={props.onPageChange}
          pages={props.userList.pages}
        />
      </div>
    :
      <div>
        <p>No record found...</p>
      </div>
  }
  </div>
)

export default BrandAdminListComponent
