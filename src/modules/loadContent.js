
const loadContent = (content, contentName) => {

    const elements = [];
    let paraNo = 1;

    function addComponent(component, root) {
        const type = component.type ? component.type : 'p';
        const element = document.createElement(type);
        const id = component.id ? component.id : 'para-'+paraNo++;
        element.setAttribute('id', id);
        if (component.text) element.textContent = component.text;
        const attr = component.attr ? component.attr : [];
        attr.forEach(attribute => {
          element.setAttribute(attribute.attr, attribute.value);
        });
        elements.push(element);
        if (component.parent) {
          elements.find((element) => element.id===component.parent).appendChild(element);
        }
        else {
          root.appendChild(element);
        }

        //document.getElementById(parent).appendChild(element);
    }

    const contentContainer = document.createElement('div');
    contentContainer.id = contentName;
    contentContainer.className = 'content-container';
    content.forEach(component => {
      addComponent(component, contentContainer);
    });

    document.getElementById('content').appendChild(contentContainer);
}

export default loadContent;