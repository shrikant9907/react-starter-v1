import React from "react";
import { Table } from "react-bootstrap";

const BasicTable = (props) => {

  const { heading, head, data, tableWrClassName } = props;

  return (
    <React.Fragment>
      <div className={ tableWrClassName ? tableWrClassName : 'basic-table'}>

        {
          heading ?
            <div className="text-muted mb-3">
              <i>{heading}</i>
            </div>
            : ''
        }

        {head || data ?
          <Table bordered hover className="mb-4">
            {head ?
              <thead>
                <tr>
                  {
                    head.map((data, index) => {
                      return <th> {data} </th>
                    })
                  }
                </tr>
              </thead>
              : ''
            }
            {data ?
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      {
                        (typeof item === "object") ?
                          Object.values(item).map((value, idx) => {
                            return <td key={idx}> {value} </td>
                          })
                          :
                          <td> {item} </td>
                      }
                    </tr>
                  })
                }
              </tbody>
              : ''
            }
          </Table>
          :
          <p>No records found.</p>
        }
      </div>
    </React.Fragment>
  );
};

export default BasicTable;
