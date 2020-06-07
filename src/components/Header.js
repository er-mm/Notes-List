import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="container" align="center">
            <table>
                <tbody>
                    <tr>
                        <td><Link to="/notes" className="btn btn-primary">Notes</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}