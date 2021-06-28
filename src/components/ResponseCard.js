import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "../styles/ResponseCard.css"

const ResponseCard = (data) => {
    const width = '100%';
    const height = '35vh';

    return (
        <div className="ResponseCardWrapper">
            <div className="responseContainer">
                <AceEditor
                    mode="json"
                    theme="github"
                    name="api-response"
                    fontSize={14}
                    wrapEnabled={true}
                    wrap={true}
                    value={ JSON.stringify(data, null, 2) }
                    height={height}
                    readOnly={true}
                    width={width}
                    fixedWidthGutter={500}
                    setOptions={{
                        // enableBasicAutocompletion: true,
                        // enableLiveAutocompletion: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        vScrollBarAlwaysVisible: true,
                        hScrollBarAlwaysVisible: true,
                        showInvisibles: true,
                        copyWithEmptySelection: true
                    }}
                />
            </div>
        </div>
    );
}
 
export default ResponseCard;
