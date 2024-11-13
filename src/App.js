
import './App.css';
import DatePicker from './stories/DatePicker';
import {Grid, GridItem} from './stories/Grid';

function App() {
  return (
    <div>
      <h1>Welcome to my React App</h1>
      {/* <DatePicker/> */}
      <Grid columns={3} rowGap="20px" columnGap="10px">
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
      </Grid>
    </div>
  );
};

export default App;
