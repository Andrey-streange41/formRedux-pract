import { connect } from "react-redux";
import RegisterForm from "./components/RegisterForm";

function App(props) {
 
  
  return (
    <div className="App">
      <RegisterForm/>
     
    </div>
  );
}

const mapStateToProps = (store) => {
  return { counter: store.counter };
};


const withStore = connect(mapStateToProps,undefined);

export default withStore(App);
