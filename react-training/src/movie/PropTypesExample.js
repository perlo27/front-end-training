import React, {Component} from "react";
import PropTypes from 'prop-types';

export const FunctionalComponentPropTypesExample = ({someProp}) => <div>{someProp}</div>;

FunctionalComponentPropTypesExample.propTypes = {
    someProp: PropTypes.string
};
FunctionalComponentPropTypesExample.defaultProps = {
    someProp: 'placeholder'
}

export class ClassComponentPropTypesExample extends Component {
    
    static propTypes = {
        someProp: PropTypes.string
    }
    static defaultProps = {
        someProp: 'placeholder'
    }
    
    render() {
        return <div>{someProp}</div>;
    }
}