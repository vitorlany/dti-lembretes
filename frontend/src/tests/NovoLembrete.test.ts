import { render } from "react-dom";
import { NovoLembrete } from "../components/NovoLembrete"; 
import '@testing-library/jest-dom'

test('teste renderização', () => {
    render(<NovoLembrete />)
});
