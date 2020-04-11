import * as React from "react";
import skull from './skull.png';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => (<div style={{ background: 'gray'}}>
    <img src={skull} />
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
</div>);