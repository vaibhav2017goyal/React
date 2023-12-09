function customRender(reactElement, container){
    
    // const domE = document.createElement(reactElement.type)
    // domE.innerHTML = reactElement.children
    // domE.setAttribute('href', reactElement.props.href)
    // domE.setAttribute('target', reactElement.props.target)

    // container.appendChild(domE)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==='children')continue;
   domElement.setAttribute(prop, reactElement.props[prop])        
    }
    container.appendChild(domElement)
}
    

const reactElement={
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_blank"

},
children:"click the google"
}


const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)

