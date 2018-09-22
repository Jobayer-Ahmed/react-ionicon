## React wrapper for the ionicons project from Ionic Framework

A React wrapper for the [ionicons](https://ionicons.com/) project. It renders a `<i>` tag with ionicons classes (like how you'd usually use it). No extra configuration required.

#### prerequisite:

**React** and **Webpack**.

#### How to use: 

Install it with npm:

    npm install --save react-ionicons 

Include in your component: 

    import IonIcon from 'react-ionicons';

Use it in JSX:

**For Normal**

	<IonIcon name="airplane"/>

**For IOS**

	<IonIcon name="ios-airplane"/>

Supported values for the props are given below :

**name** (Required): 

Any valid icon name from the [ionicons website](https://ionicons.com/).

You can read more about these here: <https://ionicons.com/usage/>

#### Standard Props Support: 

All standard props like `style`, `onClick` are supported. if you use `className` prop. The provided classes will be appended with the `ion` classes.

#### License:

This project, like the [ionicons](https://ionicons.com/) project, is released under the [MIT License](https://opensource.org/licenses/MIT)
