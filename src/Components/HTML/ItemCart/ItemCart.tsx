import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const tableComponent =    
    <div>
    <table style={{ backgroundColor: 'grey', color: 'white' }}>
        <caption>Item Cart</caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Banana</th>
                <td>$1.00</td>
                <td>3</td>
            </tr>
            <tr>
                <th>Burger</th>
                <td>$6.90</td>
                <td>1</td>
            </tr>
            <tr>
                <th>Cookie</th>
                <td>$4.20</td>
                <td>4</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <td>$12.10</td>
                <td>8</td>
            </tr>
        </tfoot>
        </table>
        </div>

const itemCart =
  <>
    <h2 style={{ fontSize: 55 }}>Item Cart</h2>
    <Card variant='outlined' sx={{ minWidth: 275, height: 800, marginBottom: 20, marginTop: -3 }}>
      <CardContent>
          <div>
            <h3>Task</h3>
            <p><i>Build a table element with a designated cart of items</i></p>
            <h3>Keys</h3>
            <ul>
                <li>Make sure to wrap the header row in a 'thead'</li>
                <li>Put the caption of a table in a 'caption'</li>
                <li>Put the final row of a table in a 'tfoot'</li>
            </ul>
          </div>
                <h3>HTML Answer Component</h3>
        <center>
        <table style={{ backgroundColor: 'grey', color: 'white' }}>
        <caption>Item Cart</caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Banana</th>
                <td>$1.00</td>
                <td>3</td>
            </tr>
            <tr>
                <th>Burger</th>
                <td>$6.90</td>
                <td>1</td>
            </tr>
            <tr>
                <th>Cookie</th>
                <td>$4.20</td>
                <td>4</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <td>$12.10</td>
                <td>8</td>
            </tr>
        </tfoot>
        </table>
        </center>
    </CardContent>
    </Card>
  </>

export default function ItemCart() {
  return itemCart;
}
