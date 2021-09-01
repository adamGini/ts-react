import React, {useCallback} from 'react';
import './App.css';

const Heading = ({title}: { title: string }) => <h2>{title}</h2>
// const Box = ({children}: { children: React.ReactNode }) => ( //<--------------------------------------nasty way
const Box: React.FunctionComponent = ({children}) => ( // nice way
    <div style={{
        padding: "1rem",
        fontWeight: "bold"
    }}>
        {children}
    </div>
)

const List: React.FunctionComponent<{
    items: string[];
    onClick?: (item: string) => void;
    }> = ({items, onClick}) => (
    <ul>
        {items.map((item, idx) => (
            <li key={idx} onClick={() => onClick?.(item)}>{item}</li>
        ))}
    </ul>
)

function App() {
    const onListClick = useCallback((item: string) => {
        console.log(item);
    }, [])

    return (
        <div>
            <Heading title="Introduction"/>
            <Box>
                hello there
            </Box>
            <List items={['one', 'two', 'three']} onClick={onListClick}/>
        </div>
    );
}

export default App;
