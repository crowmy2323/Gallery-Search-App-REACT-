import Content from './componet/contetnt';
import ScrollIndicator from './componet/ScrollIndicator';
import './index.css'
function App() {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li> home </li>
            <li> call </li>
            <li> gallery </li>
            <li> blog </li>
          </ul>
        </div>
      </header>
      <ScrollIndicator />
      <Content />
    </>
  );
}

export default App;
