import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const answer =
  <>
    <h2 style={{ fontSize: 55 }}>Answer</h2>
    <Card variant='outlined' sx={{ minWidth: 275, height: 620, marginBottom: 20, marginTop: -3 }}>
      <CardContent>
      <div>
        <h3>Task</h3>
        <p><i>TODO: task here</i></p>
        <h3>Keys</h3>
        <ul>
          <li>TODO: key here</li>
          <li>TODO: key here</li>
        </ul>
      </div>
      <h3>HTML Answer Component</h3>
      {/* TODO: Component here */}
    </CardContent>
    </Card>
  </>

export default function AnswerSkeleton() {
  return answer;
}
