import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="container" align="center">
            <table>
                <tbody>
                    <tr>
                        <td><Link to="/learningRedux" className="btn btn-primary">Library</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}