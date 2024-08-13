import { useState } from "react";

function NameForm() {
    const [name, setName] = useState(name)
    function chooseName() {
    };
    return (
        <div>
            <input type="text">Digite seu nome:</input>
            <button onClick={chooseName}>Submit</button>
        </div>
    )
}

export default NameForm;