import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const recipe =
  <>
    <h2 style={{ fontSize: 55 }}>Recipe</h2>
    <Card variant='outlined' sx={{ minWidth: 275, height: 620, marginBottom: 20, marginTop: -3 }}>
      <CardContent>
      <div>
        <h3>Task</h3>
        <p><i>Use li and list components to show a spaghetti recipe</i></p>
      </div>
    <h3>HTML Answer Component</h3>
      <div>
        <section>
            <h2>Ingredients</h2>
            <ul>
                <li>Spaghetti</li>
                <li>Marinara Sauce</li>
                <li>Salt</li>
                <li>Water</li>
            </ul>
        </section>

        <section>
            <h2>Instructions</h2>
            <ol>
                <li>Bring water to a boil.</li>
                <li>Add spaghetti to boiling water.
                    <ol>
                        <li>Add salt to taste.</li>
                        <li>Cook for 10 minutes, stirring occasionally.</li>
                    </ol>
                </li>
                <li>Add marinara sauce to a pan, bringing to a simmer.</li>
                <li>Mix cooked spaghetti with marinara sauce.</li>
                <li>Enjoy!</li>
            </ol>
        </section>
    </div>
    </CardContent>
    </Card>
  </>

export default function Recipe() {
  return recipe;
}
