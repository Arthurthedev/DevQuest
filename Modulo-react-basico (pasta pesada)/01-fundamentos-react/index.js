const root = document.getElementById('root')
const p = React.createElement('p', null, "Hello World!")
const reactRoot = ReactDOM.createRoot(root)

reactRoot.render(p)