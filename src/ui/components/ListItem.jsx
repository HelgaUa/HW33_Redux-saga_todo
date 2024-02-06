import { Button } from './Button.jsx';
export function ListItem (props)  {
        const { children, onClick } = props;

        return (
            <li className="list_component">
                <span className="list_component_text">
                    {children}
                </span>
                <Button className="btn-outline-danger " onClick={onClick}>Remove</Button>
            </li>
        )
}