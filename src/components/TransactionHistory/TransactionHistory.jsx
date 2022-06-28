import PropTypes from 'prop-types';
import { Box } from 'utils/Box';
import {TableHead, TableData} from './TransactionHistory.styled'


export const TransactionHistory = ({items}) => {
  return (
      <Box width="600px" display="flex" justifyContent="center" p={4}>
        <table >
            
  <thead>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Currency</TableHead>
            </thead>
            <tbody>
          {items.map(item => 
              
              <tr key={item.id}>
                 
      <TableData>{item.type}</TableData>
                    <TableData>{item.amount }</TableData>
              <TableData>{item.currency}</TableData>
             
              </tr>
      )}

  </tbody>

      </table>
      </Box>
    )
}


TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}