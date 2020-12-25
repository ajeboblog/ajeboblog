import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import TablePagination from '@material-ui/core/TablePagination';


// core components

/* eslint-disable react/no-array-index-key */
function CustomTable({ ...props }) {
  const {
    classes,
    tableHead,
    tableData,
    tableHeaderColor,
    pagination,
    handlePagination,
  } = props;
  return (
    <div className="bg-white mt-2 shadow">
      <table className="w-full text-left table table-auto">
        {tableHead !== undefined ? (
          <thead>
            <tr>
              {tableHead.map((prop, key) => (
                <th
                  className="py-2 px-2 font-bold text-sm text-gray-800 border-b border-gray-300"
                  key={key}
                >
                  {prop}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {tableData.map((prop, key) => (
            <tr key={key}>
              {prop.map((each, index) => (
                <td
                  className="px-2 py-1 text-sm border-gray-300 text-gray-800"
                  key={index}
                >
                  {each}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-full border-t border-gray-300">
        <tbody>
          <tr>
            {pagination && handlePagination && (
              <TablePagination
                style={{ display: 'flex', justifyContent: 'flex-start' }}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                colSpan={3}
                count={pagination.totaldata}
                rowsPerPage={pagination.size}
                page={pagination.page - 1}
                backIconButtonProps={{
                  'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                  'aria-label': 'Next Page',
                }}
                onChangePage={(e, page) =>
                  handlePagination({ ...pagination, page: page + 1 })
                }
                onChangeRowsPerPage={e =>
                  handlePagination({ ...pagination, size: e.target.value })
                }
              />
            )}
          </tr>
        </tbody>
      </table>{' '}
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
  handlePagination: () =>
    console.log('todo: make handlePagination function!!!'),
};

CustomTable.propTypes = {
  classes: PropTypes.object,
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  ),
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    totaldata: PropTypes.number.isRequired,
  }),
  handlePagination: PropTypes.func,
};

export default CustomTable;
