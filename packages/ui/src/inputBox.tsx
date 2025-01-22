
interface propType{
    placeholder :string;
    size: "big" | "small";
}


export function InputBox({placeholder,size}:propType) {
    return (
        <input placeholder={placeholder} style=
            {{
                padding:size==="big" ?"20px": '10px',
                margin:size==="big"?"20px": '10px',
                borderRadius:"5px",
            
              
            }}>
            

        </input>
    );
}

