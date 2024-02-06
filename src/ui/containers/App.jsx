import { Provider } from 'react-redux';
import {Form} from '../components/Form.jsx';
import {List} from '../components/List.jsx';
import { store } from '../../helpers/store.js'
import {Footer} from "../components/Footer.jsx";

function App() {
    return (
        <Provider store={store}>
            <div className="container p-3" style={{ backgroundColor: 'antiquewhite', border: '1px solid black', maxWidth: '600px', margin: 'auto'}}>
                <h2>TODO-list</h2>
                <Form />
                <List />
                <Footer />
            </div>
        </Provider>
    )
}

export default App;
