function Bibliography() {
    return (
        <div>
            <header className="App-header">

                <h1>Bibliography</h1>

                <h2> William Shakespeare</h2>

                <ul>{['Titus Andronicus	1594', 'Romeo and Guliet 1595-1596', 'Julius Caesar	1599', 'Hamlet 1600-1601', 'Othello 1604'].map(item => <li>{item}</li>)}</ul>

                <h3>Current time {new Date().toLocaleTimeString()}.</h3>

            </header>

        </div>
    );
}

export { Bibliography };