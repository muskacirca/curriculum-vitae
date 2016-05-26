'use strict';

import _ from 'lodash'

export function toggleClassInBody(className) {

    let bodyClass = document.body.className;
    bodyClass = bodyClass.indexOf(className) == -1
        ? addSafely(bodyClass, className)
        : removeSafely(bodyClass, className);

    document.body.className = bodyClass;
}

export function removeClassInBodyIfNeed(className) {

    let bodyClass = document.body.className;
    bodyClass = bodyClass.indexOf(className) != -1
        ? removeSafely(bodyClass, className)
        : bodyClass;
    
    console.log("body class: " + bodyClass)
    document.body.className = bodyClass;
}

function addSafely(bodyClass, className) {
    return bodyClass.length > 0
        ? " " + className
        : className
}


function removeSafely(bodyClass, className) {
    let str = (bodyClass === className)
        ? className
        : " " + className;

    return _.replace(bodyClass, str, '')
}
