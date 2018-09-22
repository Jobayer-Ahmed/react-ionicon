import React, { Component } from 'react';
import './ionicon/ionicons.css';

export default class IonIcon extends Component {
    render() {
        if (!this.props.icon || typeof this.props.icon!='string') return null;
        const { icon,className, ...restOfProps } = this.props;
        const classNames = className ? `${className} `: "";
        const icoval = icon.match(/^ios\-/) ? `ion ion-${icon}` : `ion ion-md-${icon}`
        return (
            <i {...restOfProps} className={`${classNames} ${icon}`}></i>
        );
    }
}
