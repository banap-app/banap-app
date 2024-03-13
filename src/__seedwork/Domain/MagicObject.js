
export default class MagicObject {
    #props
    get(propName, props){
        console.log(props);
        return props[propName];
    }
}